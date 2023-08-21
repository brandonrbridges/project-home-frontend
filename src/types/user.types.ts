export interface IUser {
  _id: string
  email: string
  name: {
    first: string
    last: string
  }
  roles: string[]
}
