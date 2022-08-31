import { Gallery } from "./gallery"

export interface Venue {
  address1?: string
  address2?: string
  begindate: string
  city?: string
  country?: string
  enddate: string
  fullname: string
  galleries?: Gallery[]
  ishamvenue: number
  name: string
  state?: string
  venueid: number
  zipcode?: string
}
