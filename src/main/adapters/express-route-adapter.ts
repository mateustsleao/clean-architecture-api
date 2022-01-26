import { Request, Response } from 'express'
import { RegisterAndSendEmailController } from '@/web-controllers/'
import { HttpRequest } from '@/web-controllers/ports'

export const adaptRoute = (controller: RegisterAndSendEmailController) => {
  return async (req: Request, res: Response) => {
    const htttpRequest: HttpRequest = {
      body: req.body
    }

    const httpResponse = await controller.handle(htttpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
