import { Hottub } from '../vendor'

import { Command } from './command'

export class HottubOnCommand implements Command {
  hottub: Hottub

  constructor(hottub: Hottub) {
    this.hottub = hottub
  }

  execute(): void {
    this.hottub.on()
  }

  undo(): void {
    this.hottub.off()
  }
}
