import { User } from '@/entities'
import { Either } from '@/shared'
import { UseCase } from '@/usecases/ports'
import { EmailOptions, EmailService } from '@/usecases/send-email/ports'
import { MailServiceError } from '@/usecases/errors'

export class SendEmail implements UseCase {
  private readonly emailOptions: EmailOptions
  private readonly emailService: EmailService

  constructor (emailOptions: EmailOptions, emailService: EmailService) {
    this.emailOptions = emailOptions
    this.emailService = emailService
  }

  async perform (user: User):
  Promise<Either< MailServiceError, EmailOptions>> {
    const greetings = `<h3> Hi, ${user.name.value}.</h3>I hope you are doing fine.`
    const customizedHtml = `${greetings} <br><br> ${this.emailOptions.html}`
    const emailInfo: EmailOptions = {
      host: this.emailOptions.host,
      port: this.emailOptions.port,
      username: this.emailOptions.username,
      password: this.emailOptions.password,
      to: `${user.name.value}<${user.email.value}>`,
      from: this.emailOptions.from,
      subject: this.emailOptions.subject,
      text: this.emailOptions.text,
      html: customizedHtml,
      attachments: this.emailOptions.attachments

    }
    return await this.emailService.send(emailInfo)
  }
}
