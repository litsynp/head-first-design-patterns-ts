import { Subject, WeatherData } from './subject'

export interface Observer {
  update(): void
}

interface DisplayElement {
  display(): void
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number = 0.0
  private humidity: number = 0.0
  private weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  update(): void {
    if (this.weatherData instanceof WeatherData) {
      this.temperature = this.weatherData.temperature
      this.humidity = this.weatherData.humidity
      this.display()
    }
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`,
    )
  }
}

export class StatisticsDisplay implements Observer, DisplayElement {
  private maxTemp: number = 0.0
  private minTemp: number = 200
  private tempSum: number = 0.0
  private numReadings: number = 0
  private weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  update(): void {
    if (this.weatherData instanceof WeatherData) {
      this.tempSum += this.weatherData.temperature
      this.numReadings++

      if (this.weatherData.temperature > this.maxTemp) {
        this.maxTemp = this.weatherData.temperature
      }

      if (this.weatherData.temperature < this.minTemp) {
        this.minTemp = this.weatherData.temperature
      }

      this.display()
    }
  }

  display(): void {
    console.log(
      `Avg/Max/Min temperature = ${this.tempSum / this.numReadings}/${
        this.maxTemp
      }/${this.minTemp}`,
    )
  }
}

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92
  private lastPressure: number = 0
  private weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  update(): void {
    if (this.weatherData instanceof WeatherData) {
      this.lastPressure = this.currentPressure
      this.currentPressure = this.weatherData.temperature

      this.display()
    }
  }

  display(): void {
    console.log(
      `Forecast: ${
        this.currentPressure > this.lastPressure
          ? 'Improving weather on the way!'
          : this.currentPressure === this.lastPressure
          ? 'More of the same'
          : 'Watch out for cooler, rainy weather'
      }`,
    )
  }
}

export class HeatIndexDisplay implements Observer, DisplayElement {
  private heatIndex: number = 0.0
  private weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this)
  }

  update(): void {
    if (this.weatherData instanceof WeatherData) {
      this.heatIndex = this.computeHeatIndex(
        this.weatherData.temperature,
        this.weatherData.humidity,
      )
      this.display()
    }
  }

  private computeHeatIndex(t: number, rh: number): number {
    const index =
      16.923 +
      0.185212 * t +
      5.37941 * rh -
      0.100254 * t * rh +
      0.00941695 * (t * t) +
      0.00728898 * (rh * rh) +
      0.000345372 * (t * t * rh) -
      0.000814971 * (t * rh * rh) +
      0.0000102102 * (t * t * rh * rh) -
      0.000038646 * (t * t * t) +
      0.0000291583 * (rh * rh * rh) +
      0.00000142721 * (t * t * t * rh) +
      0.000000197483 * (t * rh * rh * rh) -
      0.0000000218429 * (t * t * t * rh * rh) +
      0.000000000843296 * (t * t * rh * rh * rh) -
      0.0000000000481975 * (t * t * t * rh * rh * rh)
    return index
  }

  display(): void {
    console.log(`Heat index is ${this.heatIndex}`)
  }
}
