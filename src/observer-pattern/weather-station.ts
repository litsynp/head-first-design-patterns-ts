import {
  CurrentConditionsDisplay,
  ForecastDisplay,
  HeatIndexDisplay,
  StatisticsDisplay,
} from './observer'
import { WeatherData } from './subject'

function main() {
  const weatherData: WeatherData = new WeatherData()

  const currentDisplay = new CurrentConditionsDisplay(weatherData)
  new StatisticsDisplay(weatherData)
  new ForecastDisplay(weatherData)
  new HeatIndexDisplay(weatherData)

  weatherData.setMeasurements(80, 65, 30.4)
  weatherData.setMeasurements(82, 70, 29.2)
  weatherData.setMeasurements(78, 90, 29.2)

  weatherData.removeObserver(currentDisplay)
  weatherData.setMeasurements(62, 90, 28.1)
}

main()
