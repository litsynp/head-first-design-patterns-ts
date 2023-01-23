export class Hottub {
  private _on: boolean = false
  private _temperature: number = 100

  constructor() {}

  on(): void {
    this._on = true
  }

  off(): void {
    this._on = false
  }

  bubblesOn(): void {
    if (this._on) {
      console.log('Hottub is bubbling!')
    }
  }

  bubblesOff(): void {
    if (this._on) {
      console.log('Hottub is not bubbling')
    }
  }

  jetsOn(): void {
    if (this._on) {
      console.log('Hottub jets are on')
    }
  }

  jetsOff(): void {
    if (this._on) {
      console.log('Hottub jets are off')
    }
  }

  setTemperature(temperature: number): void {
    this._temperature = temperature
  }

  heat(): void {
    this._temperature = 105
    console.log(`Hottub is heating to a steaming ${this._temperature} degrees`)
  }

  cool(): void {
    this._temperature = 98
    console.log(`Hottub is cooling to ${this._temperature} degrees`)
  }
}
