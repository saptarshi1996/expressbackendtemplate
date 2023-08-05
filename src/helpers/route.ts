import type IRoute from '../interfaces/config/route'

export const createRoute = (routes: IRoute[], basePath: string) => routes.map((route) => ({
  ...route,
  path: `${basePath}${route.path}`
}))
