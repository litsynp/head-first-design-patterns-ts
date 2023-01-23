export class Tv {
  location: string = ''
  channel: number = 0

  constructor(location: string) {
    this.location = location
  }

  on(): void {
    console.log(`${this.location} TV is on`)
  }

  off(): void {
    console.log(`${this.location} TV is off`)
  }

  setInputChannel(): void {
    this.channel = 3
    console.log(`${this.location} TV channel is set for VCR`)
  }
}
