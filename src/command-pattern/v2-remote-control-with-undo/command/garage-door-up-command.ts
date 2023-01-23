import { GarageDoor } from '../vendor'

import { Command } from './command'

export class GarageDoorUpCommand implements Command {
  garageDoor: GarageDoor

  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor
  }

  execute(): void {
    this.garageDoor.up()
  }

  undo(): void {
    this.garageDoor.down()
  }
}
