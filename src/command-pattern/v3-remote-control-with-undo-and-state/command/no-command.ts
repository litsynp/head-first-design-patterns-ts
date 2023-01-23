import { Command } from './command'

export class NoCommand implements Command {
  execute(): void {}

  undo(): void {}
}
