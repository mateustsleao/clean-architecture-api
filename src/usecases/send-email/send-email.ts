import { User, UserData } from '@/entities'
import { Either, left } from '@/shared'
import { UseCase } from '@/usecases/ports'
import { EmailOptions, EmailService } from '@/usecases/send-email/ports'
import { MailServiceError } from '@/usecases/errors'
import { InvalidEmailError, InvalidNameError } from '@/entities/errors'

export class SendEmail implements UseCase {
  private readonly emailOptions: EmailOptions
  private readonly emailService: EmailService

  constructor (emailOptions: EmailOptions, emailService: EmailService) {
    this.emailOptions = emailOptions
    this.emailService = emailService
  }

  async perform (userData: UserData):
  Promise<Either<InvalidNameError | InvalidEmailError | MailServiceError, EmailOptions>> {
    const userOrError: Either<InvalidNameError | InvalidEmailError, User> = User.create(userData)
    if (userOrError.isLeft()) {
      return left(userOrError.value)
    }

    const user = userOrError.value
    const greetings = `E aí <b> ${user.name} </b>, beleza?`
    const customizedHtml = `${greetings} <br> <br> ${this.emailOptions.html}`
    const emailInfo: EmailOptions = {
      host: this.emailOptions.host,
      port: this.emailOptions.port,
      username: this.emailOptions.username,
      password: this.emailOptions.password,
      to: `${user.name}<${user.email}>`,
      from: this.emailOptions.from,
      subject: this.emailOptions.subject,
      text: this.emailOptions.text,
      html: customizedHtml,
      attachments: this.emailOptions.attachments

    }
    return await this.emailService.send(emailInfo)
  }
}