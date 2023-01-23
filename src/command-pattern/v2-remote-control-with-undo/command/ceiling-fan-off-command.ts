import { CeilingFan } from '../vendor'

import { Command } from './command'

export class CeilingFanOffCommand implements Command {
  ceilingFan: CeilingFan

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  execute(): void {
    this.ceilingFan.off()
  }

  undo(): void {
    this.ceilingFan.on()
  }
}
