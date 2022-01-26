import { EmailOptions } from '@/usecases/send-email/ports'

const attachments = [{
  filename: 'Resume.pdf',
  path: 'https://github.com/mateustsleao/mateustsleao.github.io/raw/master/Resume.pdf'
}]

export function getEmailOptions (): EmailOptions {
  const from = 'Mateus Silveira | Software Engineer <mateustsleao@gmail.com>'
  const to = ''
  const html = `
    Thank you for requesting my resume, you can kindly access it through the attachments.
    <br><br>
    Feel free to get in touch.
    <br><br>
    Regards,
    <br>
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
