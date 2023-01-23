import { Hottub } from '../vendor'

import { Command } from './command'

export class HottubOffCommand implements Command {
  hottub: Hottub

  constructor(hottub: Hottub) {
    this.hottub = hottub
  }

  execute(): void {
    this.hottub.off()
  }

  undo(): void {
    this.hottub.on()
  }
}
