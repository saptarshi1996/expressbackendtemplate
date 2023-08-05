import express from 'express'
import cors from 'cors'

export const getServer = async () => {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({
    extended: false
  }))

  app.use(cors())

  return app
}
