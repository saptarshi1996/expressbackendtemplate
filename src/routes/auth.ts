import type IRoute from '../interfaces/config/route'

import { userLogin } from '../controllers/auth'

import { createRoute } from '../helpers/route'

const routes = [
  {
    path: '/login',
    method: 'POST',
    auth: false,
    controller: userLogin,
    validation: false
  }
] as IRoute[]

export default createRoute(routes, '/auth')
