export default interface IRoute {
  path: string
  method: string
  auth: boolean
  controller: any
  validation: any
}
