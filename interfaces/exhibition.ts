import { Forcast } from "./forcast"
import { Image } from "./image"
import { People } from "./poeple"
import { Poster } from "./poster"
import { Venue } from "./venue"

export interface Exhibition {
  _id: string
  begindate: string
  color?: string
  description?: string
  enddate: string
  exhibitionid: number
  forcast: Forcast[]
  id: number
  images?: Image[]
  lastupdate: string
  location: number[]
  people?: People[]
  poster?: Poster
  primaryimageurl?: string
  shortdescription?: string
  temporalorder: number
  textiledescription?: string
  title: string
  url: string
  venue: Venue
}
