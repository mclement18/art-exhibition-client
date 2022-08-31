import { Exhibition } from "../interfaces"

export default class ExhibitionFetching {
  private apiUrl: string
  
  constructor() {
    this.apiUrl = process.env.ART_EXHIBITION_API_URL as string
  }

  public getExhibitions = async () => {
    const endpoint = '/exhibitions'
    const exhibitions: Exhibition[] = await this.get(endpoint)
    return exhibitions
  }

  private get = async (endpoint: string): Promise<any> => {
    const url = this.apiUrl + endpoint
    try {
      const response = await fetch(url)
      return response.json()
    } catch (error) {
      console.error(error)
    }
  }
}
