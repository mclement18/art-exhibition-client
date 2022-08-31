import { Exhibition } from "../interfaces"

export const address = (exhibition: Exhibition) => {
  const {address1, city, state} = exhibition.venue
  if (address1 && city && state) {
    return `${address1}, ${city}, ${state}`
  }
}
