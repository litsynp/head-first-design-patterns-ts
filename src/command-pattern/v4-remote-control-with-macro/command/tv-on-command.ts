import { Tv } from '../vendor'

import { Command } from './command'

export class TvOnCommand implements Command {
  tv: Tv

  constructor(tv: Tv) {
    this.tv = tv
  }

  execute(): void {
    this.tv.on()
  }

  undo(): void {
    this.tv.off()
  }
}
