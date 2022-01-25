import { Request, Response } from 'express'
import { RegisterUserController } from '@/web-controllers/'
import { HttpRequest } from '@/web-controllers/ports'

export const adaptRoute = (controller: RegisterUserController) => {
  return async (req: Request, res: Response) => {
    const htttpRequest: HttpRequest = {
      body: req.body
    }

    const httpResponse = await controller.handle(htttpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
