import { EmailOptions } from '@/usecases/send-email/ports'

const attachments = [{
  filename: 'clean-architecture.pdf',
  path: 'https://otaviolemos.github.io/clean-architecture.pdf'
}]

export function getEmailOptions (): EmailOptions {
  const from = 'Mateus Silveira | Software Engineer <mateustsleao@gmail.com>'
  const to = ''
  const html = `
    <h2> Hi, ${to}.</h2><br><br>
    Thank you for requesting my resume, you can kindly access it through the attachments.

    Feel free to get in touch.

    Regards,
    Mateus Toledo | Software Engineer`

  const mailOptions: EmailOptions = {
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT),
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
    from: from,
    to: to,
    subject: 'Resume - Mateus Toledo',
    text: '',
    html: html,
    attachments: attachments
  }
  return mailOptions
}
