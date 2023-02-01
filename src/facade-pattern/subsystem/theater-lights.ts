export class TheaterLights {
  private readonly description: string
  private dimLevel: number = 0

  constructor(description: string) {
    this.description = description
  }

  on(): void {
    console.log(`${this.description} on`)
  }

  off(): void {
    console.log(`${this.description} off`)
  }

  dim(level: number): void {
    console.log(`${this.description} dimming to ${level}%`)
    this.dimLevel = level
  }

  toString(): string {
    return this.description
  }
}
