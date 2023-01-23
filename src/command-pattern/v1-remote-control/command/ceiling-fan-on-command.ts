import { CeilingFan } from '../vendor'

import { Command } from './command'

export class CeilingFanOnCommand implements Command {
  ceilingFan: CeilingFan

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
  }

  execute(): void {
    this.ceilingFan.on()
  }
}
