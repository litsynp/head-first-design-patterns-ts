import { Tv } from '../vendor'

import { Command } from './command'

export class TvOffCommand implements Command {
  tv: Tv

  constructor(tv: Tv) {
    this.tv = tv
  }

  execute(): void {
    this.tv.off()
  }

  undo(): void {
    this.tv.on()
  }
}
