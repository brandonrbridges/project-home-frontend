export interface IProperty {
  _id: string
  address: {
    line_1: string
    line_2: string
    city: string
    state: string
    country: string
    postal_code: string
  }
  owner_id: string
  owner: object // replace this with the user object | virtual field
  type: string
  bathrooms: number
  bedrooms: number
  max_tenants: number
}

export interface ITenantInvite {
  type: 'tenant'
  sender_id: string
  recipient_email: string
  property_id: string
  name: {
    first: string
    last: string
  }
  details: {
    [key: string]: {
      required: boolean
      info_type: string | Array<any> | File
    }
  }
  status?: string
  date?: Date
}
