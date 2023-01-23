import { Command } from './command'

export class MacroCommand {
  private commands: Command[]

  constructor(commands: Command[]) {
    this.commands = commands
  }

  execute(): void {
    this.commands.forEach((command) => command.execute())
  }

  undo(): void {
    // done backwards to ensure the commands are undone in the correct order
    for (let i = this.commands.length - 1; i >= 0; i--) {
      this.commands[i].undo()
    }
  }
}
