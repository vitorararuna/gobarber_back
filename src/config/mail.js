export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS ,
    },
    default: {
        from: 'Equipe GoBarber <noreply@gobarber.com>',
    },
};


// SERVIÇOS DE EMAILS:
// Para desenvolvimento:  MAILTRAP
// Para serviço online: AMAZON SES, MAILGUN, SPARKPOST, MANDRIL
