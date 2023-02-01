import { StreamingPlayer } from './streaming-player'

export class Projector {
  private readonly description: string
  private player: StreamingPlayer
  private wideScreenMode: boolean = false

  constructor(description: string, player: StreamingPlayer) {
    this.description = description
    this.player = player
  }

  on(): void {
    console.log(`${this.description} on`)
  }

  off(): void {
    console.log(`${this.description} off`)
  }

  setWideScreenMode(): void {
    console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`)
    this.wideScreenMode = true
  }

  setTvMode(): void {
    console.log(`${this.description} in tv mode (4x3 aspect ratio)`)
    this.wideScreenMode = false
  }

  toString(): string {
    return this.description
  }
}
