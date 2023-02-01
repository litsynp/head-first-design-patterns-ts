import { StreamingPlayer } from './streaming-player'
import { Tuner } from './tuner'

export class Amplifier {
  private readonly description: string
  private tuner: Tuner | undefined
  private player: StreamingPlayer | undefined

  constructor(description: string) {
    this.description = description
  }

  on(): void {
    console.log(`${this.description} on`)
  }

  off(): void {
    console.log(`${this.description} off`)
  }

  setStereoSound(): void {
    console.log(`${this.description} stereo mode on`)
  }

  setSurroundSound(): void {
    console.log(
      `${this.description} surround sound on (5 speakers, 1 subwoofer)`,
    )
  }

  setVolume(volume: number): void {
    console.log(`${this.description} setting volume to ${volume}`)
  }

  setTuner(tuner: Tuner): void {
    console.log(`${this.description} setting tuner to ${tuner.toString()}`)
    this.tuner = tuner
  }

  setStreamingPlayer(player: StreamingPlayer): void {
    console.log(
      `${this.description} setting streaming player to ${player.toString()}`,
    )
    this.player = player
  }

  toString(): string {
    return this.description
  }
}
