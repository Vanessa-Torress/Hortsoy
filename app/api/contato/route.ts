import { NextResponse } from 'next/server';
import validator from 'validator';

// Sliding window rate limiter em memória com limpeza automática
interface RateLimitEntry {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutos
const MAX_REQUESTS_PER_WINDOW = 10;

function getClientIp(request: Request): string {
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp.trim();

  const xRealIp = request.headers.get('x-real-ip');
  if (xRealIp) return xRealIp.trim();

  const xForwardedFor = request.headers.get('x-forwarded-for');
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }

  return '127.0.0.1';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { timestamps: [] };

  // Filtra timestamps dentro da janela ativa
  entry.timestamps = entry.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (entry.timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.timestamps.push(now);
  rateLimitMap.set(ip, entry);

  // Limpeza de IPs inativos se a memória crescer
  if (rateLimitMap.size > 2000) {
    for (const [key, value] of rateLimitMap.entries()) {
      const active = value.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
      if (active.length === 0) {
        rateLimitMap.delete(key);
      }
    }
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // Validação de Rate Limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Muitas tentativas de envio. Por favor, aguarde alguns minutos antes de tentar novamente.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '900',
          },
        }
      );
    }

    // Validação de Content-Type
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Formato de requisição inválido. Envie como application/json.',
        },
        { status: 415 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, error: 'Corpo da requisição inválido.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message, _gotcha } = body;

    // Proteção Honeypot Anti-Bot: Se o campo invisível estiver preenchido, descarta silenciosamente simulando sucesso
    if (_gotcha && typeof _gotcha === 'string' && _gotcha.trim().length > 0) {
      console.warn(`[Anti-Bot Honeypot Triggered] IP: ${ip}`);
      return NextResponse.json(
        {
          success: true,
          message: 'Mensagem recebida com sucesso! Nossa equipe entrará em contato em breve.',
        },
        { status: 200 }
      );
    }

    // Validação rigorosa de Nome
    if (!name || typeof name !== 'string' || validator.isEmpty(name.trim())) {
      return NextResponse.json(
        { success: false, error: 'Por favor, informe seu nome.' },
        { status: 400 }
      );
    }
    const cleanName = name.trim().slice(0, 100);
    if (cleanName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'O nome deve conter ao menos 2 caracteres.' },
        { status: 400 }
      );
    }

    // Validação rigorosa de E-mail
    if (
      !email ||
      typeof email !== 'string' ||
      !validator.isEmail(email.trim(), { allow_utf8_local_part: false })
    ) {
      return NextResponse.json(
        { success: false, error: 'Por favor, informe um endereço de e-mail válido.' },
        { status: 400 }
      );
    }
    const cleanEmail = (validator.normalizeEmail(email.trim()) || email.trim()).slice(0, 150);

    // Validação de Assunto
    const cleanSubject =
      subject && typeof subject === 'string' && !validator.isEmpty(subject.trim())
        ? subject.trim().slice(0, 150)
        : 'Contato Comercial via Website';

    // Validação de Mensagem
    if (!message || typeof message !== 'string' || validator.isEmpty(message.trim())) {
      return NextResponse.json(
        { success: false, error: 'Por favor, digite a sua mensagem.' },
        { status: 400 }
      );
    }
    const cleanMessage = message.trim().slice(0, 3000);
    if (cleanMessage.length < 5) {
      return NextResponse.json(
        { success: false, error: 'A mensagem deve conter ao menos 5 caracteres.' },
        { status: 400 }
      );
    }

    const payload = {
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      receivedAt: new Date().toISOString(),
      clientIp: ip,
    };

    console.log('--- [Hortsoy] Nova Mensagem de Contato Validada ---');
    console.log(`Data: ${payload.receivedAt}`);
    console.log(`Nome: ${payload.name}`);
    console.log(`E-mail: ${payload.email}`);
    console.log(`Assunto: ${payload.subject}`);
    console.log(`Tamanho da Mensagem: ${payload.message.length} caracteres`);
    console.log('----------------------------------------------------');

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API Contato Error]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno ao processar a mensagem. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}
