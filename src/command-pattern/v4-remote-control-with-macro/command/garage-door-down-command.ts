import { GarageDoor } from '../vendor'

import { Command } from './command'

export class GarageDoorDownCommand implements Command {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute(): void {
    this.garageDoor.down()
  }

  undo(): void {
    this.garageDoor.up()
  }
}
