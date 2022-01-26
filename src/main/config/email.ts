import { EmailOptions } from '@/usecases/send-email/ports'

const attachments = [{
  filename: 'clean-architecture.pdf',
  path: 'https://otaviolemos.github.io/clean-architecture.pdf'
}]

export function getEmailOptions (): EmailOptions {
  const from = 'Mateus Silveira | Software Engineer <mateustsleao@gmail.com>'
  const to = ''
  const mailOptions: EmailOptions = {
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT),
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    from: from,
    to: to,
    subject: 'Mensagem de teste',
    text: '',
    html: 'teste',
    attachments: attachments
  }
  return mailOptions
}
