export class GarageDoor {
  location: string

  constructor(location: string) {
    this.location = location
  }

  up(): void {
    console.log(`${this.location} garage door is up`)
  }

  down(): void {
    console.log(`${this.location} garage door is down`)
  }

  stop(): void {
    console.log(`${this.location} garage door is stopped`)
  }

  lightOn(): void {
    console.log(`${this.location} garage light is on`)
  }

  lightOff(): void {
    console.log(`${this.location} garage light is off`)
  }
}
