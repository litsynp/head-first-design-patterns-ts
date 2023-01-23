export class CeilingFan {
  location: string = ''

  constructor(location: string) {
    this.location = location
  }

  on(): void {
    console.log(`${this.location} ceiling fan is on`)
  }

  off(): void {
    console.log(`${this.location} ceiling fan is off`)
  }
}
