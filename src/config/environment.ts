import { config } from 'dotenv'

config()

export default {
  PORT: process.env.PORT,
  HOST: process.env.HOST
}