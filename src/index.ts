import { getServer } from './application/server'
import environment from './config/environment'

getServer().then((server) => {
  const { PORT, HOST } = environment
  server.listen(+PORT, HOST, () => {
    console.log(`Server on PORT ${PORT} at ${HOST}`)
  })
}).catch((err) => {
  throw err
})
