import { Command, NoCommand } from './command'

export class RemoteControlWithUndo {
  onCommands: Command[]
  offCommands: Command[]
  undoCommand: Command

  constructor() {
    this.onCommands = []
    this.offCommands = []

    const noCommand = new NoCommand()
    for (let i = 0; i < 7; i++) {
      this.onCommands.push(noCommand)
      this.offCommands.push(noCommand)
    }
    this.undoCommand = noCommand
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute()
    this.undoCommand = this.onCommands[slot]
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute()
    this.undoCommand = this.offCommands[slot]
  }

  undoButtonWasPushed(): void {
    this.undoCommand.undo()
  }

  toString(): string {
    return `\n------ Remote Control------\n${this.onCommands
      .map(
        (command, index) =>
          `[Slot ${index}] ${command.constructor.name} ${this.offCommands[index].constructor.name}\n`,
      )
      .join('')}[undo] ${this.undoCommand.constructor.name}
    `
  }
}
