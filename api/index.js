const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permite requisições do frontend React
app.use(express.json()); // Permite ler o corpo da requisição em JSON

// Endpoint de Contato
app.post('/api/contato', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Simulação de validação básica
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Nome, E-mail e Mensagem são obrigatórios.' });
    }

    console.log('--- Nova Mensagem de Contato ---');
    console.log(`Nome: ${name}`);
    console.log(`E-mail: ${email}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}`);
    console.log('--------------------------------');

    // Aqui você conectaria com um banco de dados ou serviço de e-mail (ex: Nodemailer)
    
    // Retornando sucesso para o frontend
    res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
