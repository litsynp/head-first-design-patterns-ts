import { Amplifier } from './amplifier'

export class StreamingPlayer {
  private readonly description: string
  private currentChapter: number = 0
  private amplifier: Amplifier
  private movie: string | undefined

  constructor(description: string, amplifier: Amplifier) {
    this.description = description
    this.amplifier = amplifier
  }

  on(): void {
    console.log(`${this.description} on`)
  }

  off(): void {
    console.log(`${this.description} off`)
  }

  play(movieOrChapter: string | number): void {
    if (typeof movieOrChapter === 'string') {
      this.playMovie(movieOrChapter)
    } else {
      this.playChapter(movieOrChapter)
    }
  }

  private playMovie(movie: string): void {
    this.movie = movie
    this.currentChapter = 0
    console.log(`${this.description} playing "${movie}"`)
  }

  private playChapter(chapter: number): void {
    if (this.movie === undefined) {
      console.log(
        `${this.description} can't play chapter ${chapter} - no movie selected`,
      )
    } else {
      this.currentChapter = chapter
      console.log(
        `${this.description} playing chapter ${this.currentChapter} of "${this.movie}"`,
      )
    }
  }

  stop(): void {
    this.currentChapter = 0
    console.log(`${this.description} stopped "${this.movie}"`)
  }

  pause(): void {
    console.log(`${this.description} paused "${this.movie}"`)
  }

  setTwoChannelAudio(): void {
    console.log(`${this.description} set two channel audio`)
  }

  setSurroundAudio(): void {
    console.log(`${this.description} set surround audio`)
  }

  toString(): string {
    return this.description
  }
}
