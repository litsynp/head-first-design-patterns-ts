import { Light } from '../vendor'

import { Command } from './command'

export class LightOffCommand implements Command {
  light: Light

  constructor(light: Light) {
    this.light = light
  }

  execute(): void {
    this.light.off()
  }
}
