import { CeilingFan } from '../vendor'

import { Command } from './command'

export class CeilingFanMediumCommand implements Command {
  ceilingFan: CeilingFan
  prevSpeed: number

  constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan
    this.prevSpeed = ceilingFan.getSpeed()
  }

  execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed()
    this.ceilingFan.medium()
  }

  undo(): void {
    if (this.prevSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high()
    } else if (this.prevSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium()
    } else if (this.prevSpeed === CeilingFan.LOW) {
      this.ceilingFan.low()
    } else if (this.prevSpeed === CeilingFan.OFF) {
      this.ceilingFan.off()
    }
  }
}
