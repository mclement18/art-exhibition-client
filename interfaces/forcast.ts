export interface Forcast {
  detailedForecast: string
  endTime: string
  icon: string
  isDaytime: boolean
  name: string
  number: number
  shortForecast: string
  startTime: string
  temperature: number
  temperatureTrend?: string
  temperatureUnit: string
  windDirection: string
  windSpeed: string
}
