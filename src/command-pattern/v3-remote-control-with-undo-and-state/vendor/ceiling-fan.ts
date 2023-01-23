export class CeilingFan {
  static readonly HIGH = 3
  static readonly MEDIUM = 2
  static readonly LOW = 1
  static readonly OFF = 0

  location: string = ''
  level: number = CeilingFan.LOW

  constructor(location: string) {
    this.location = location
  }

  high(): void {
    this.level = CeilingFan.HIGH
    console.log(`${this.location} ceiling fan is on high`)
  }

  medium(): void {
    this.level = CeilingFan.MEDIUM
    console.log(`${this.location} ceiling fan is on medium`)
  }

  low(): void {
    this.level = CeilingFan.LOW
    console.log(`${this.location} ceiling fan is on low`)
  }

  off(): void {
    this.level = CeilingFan.OFF
    console.log(`${this.location} ceiling fan is off`)
  }

  getSpeed(): number {
    return this.level
  }
}
