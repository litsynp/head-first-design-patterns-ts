export class Stereo {
  location: string = ''

  constructor(location: string) {
    this.location = location
  }

  on(): void {
    console.log(`${this.location} stereo is on`)
  }

  off(): void {
    console.log(`${this.location} stereo is off`)
  }

  setCD(): void {
    console.log(`${this.location} stereo is set for CD input`)
  }

  setDVD(): void {
    console.log(`${this.location} stereo is set for DVD input`)
  }

  setRadio(): void {
    console.log(`${this.location} stereo is set for radio`)
  }

  setVolume(volume: number): void {
    console.log(`${this.location} stereo volume set to ${volume}`)
  }
}
