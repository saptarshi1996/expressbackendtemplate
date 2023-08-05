import {
  type Request,
  type Response,
  type NextFunction
} from 'express'

import logger from '../config/logger'

export default (fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>) => {
  const getStatusFromRequest = (method: string): number => {
    switch (method) {
      case 'POST':
        return 201
      case 'PUT':
        return 201
      case 'GET':
        return 200
      case 'DELETE':
        return 200
      default:
        return 200
    }
  }

  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).then((result: any) => {
      const statusCode = getStatusFromRequest(req.method)
      logger.info(`${req.method} | ${req.originalUrl} | ${statusCode}`)
      return res.status(statusCode).json(result)
    }).catch((err: any) => {
      const statusCode: number = err.statusCode || 500
      logger.error(`${req.method} | ${req.originalUrl} | ${statusCode}`)

      if (!err.statusCode || statusCode === 500) {
        logger.error(err.stack)
      }

      return res.status(statusCode).json({ message: err.message })
    })
  }
}
