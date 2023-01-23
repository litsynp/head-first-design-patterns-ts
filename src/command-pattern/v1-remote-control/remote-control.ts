import { Command, NoCommand } from './command'

export class RemoteControl {
  onCommands: Command[]
  offCommands: Command[]

  constructor() {
    this.onCommands = []
    this.offCommands = []

    const noCommand = new NoCommand()
    for (let i = 0; i < 7; i++) {
      this.onCommands.push(noCommand)
      this.offCommands.push(noCommand)
    }
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command): void {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute()
  }

  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute()
  }

  toString(): string {
    return `\n------ Remote Control------\n${this.onCommands
      .map(
        (command, index) =>
          `[Slot ${index}] ${command.constructor.name} ${this.offCommands[index].constructor.name}\n`,
      )
      .join('')}
    `
  }
}
