import { NextResponse } from 'next/server';
import validator from 'validator';

// In-memory rate limiting simples para o endpoint de contato
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

export async function POST(request: Request) {
  try {
    // Obter IP para controle de spam
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';

    const now = Date.now();
    const limitData = rateLimitMap.get(ip) || { count: 0, expiresAt: now + 15 * 60 * 1000 };

    if (now > limitData.expiresAt) {
      limitData.count = 0;
      limitData.expiresAt = now + 15 * 60 * 1000;
    }

    if (limitData.count >= 15) {
      return NextResponse.json(
        {
          success: false,
          error: 'Muitas tentativas de contato a partir deste IP. Por favor, aguarde alguns minutos.',
        },
        { status: 429 }
      );
    }

    limitData.count += 1;
    rateLimitMap.set(ip, limitData);

    const body = await request.json().catch(() => ({}));
    const { name, email, subject, message } = body;

    // Validação estrita
    if (!name || typeof name !== 'string' || validator.isEmpty(name.trim())) {
      return NextResponse.json(
        { success: false, error: 'O nome é obrigatório.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !validator.isEmail(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Forneça um e-mail válido.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || validator.isEmpty(message.trim())) {
      return NextResponse.json(
        { success: false, error: 'A mensagem não pode estar vazia.' },
        { status: 400 }
      );
    }

    // Sanitização contra XSS e injeção
    const sanitizedData = {
      name: validator.escape(name.trim()).slice(0, 100),
      email: validator.normalizeEmail(email.trim()) || email.trim(),
      subject:
        subject && typeof subject === 'string'
          ? validator.escape(subject.trim()).slice(0, 150)
          : 'Sem assunto',
      message: validator.escape(message.trim()).slice(0, 2000),
      receivedAt: new Date().toISOString(),
    };

    console.log('--- Nova Mensagem de Contato (Next.js Serverless) ---');
    console.log(`Data: ${sanitizedData.receivedAt}`);
    console.log(`Nome: ${sanitizedData.name}`);
    console.log(`E-mail: ${sanitizedData.email}`);
    console.log(`Assunto: ${sanitizedData.subject}`);
    console.log(`Mensagem: ${sanitizedData.message}`);
    console.log('-----------------------------------------------------');

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro na API de contato:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno ao processar a mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
