import { Observer } from './observer'

export interface Subject {
  registerObserver(o: Observer): void

  removeObserver(o: Observer): void

  notifyObservers(): void
}

export class WeatherData implements Subject {
  private observers: Observer[]
  private _temperature: number = 0
  private _humidity: number = 0
  private _pressure: number = 0

  constructor() {
    this.observers = []
  }

  registerObserver(o: Observer): void {
    this.observers.push(o)
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update()
    }
  }

  // Retrieve the measurements from the Weather Station and notify the observers
  measurementsChanged(): void {
    this.notifyObservers()
  }

  // Set the measurements and notify the observers
  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
  ): void {
    this._temperature = temperature
    this._humidity = humidity
    this._pressure = pressure
    this.measurementsChanged()
  }

  get temperature(): number {
    return this._temperature
  }

  get humidity(): number {
    return this._humidity
  }

  get pressure(): number {
    return this._pressure
  }
}
