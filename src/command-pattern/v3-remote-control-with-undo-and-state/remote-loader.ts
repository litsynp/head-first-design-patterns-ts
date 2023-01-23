import {
  CeilingFanHighCommand,
  CeilingFanMediumCommand,
  CeilingFanOffCommand,
} from './command'
import { RemoteControlWithUndo } from './remote-control-with-undo'
import { CeilingFan } from './vendor'

function main() {
  const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo()

  const ceilingFan = new CeilingFan('Living Room')

  const ceilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan)
  const ceilingFanHighCommand = new CeilingFanHighCommand(ceilingFan)
  const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan)

  remoteControl.setCommand(0, ceilingFanMediumCommand, ceilingFanOffCommand)
  remoteControl.setCommand(1, ceilingFanHighCommand, ceilingFanOffCommand)

  remoteControl.onButtonWasPushed(0)
  remoteControl.offButtonWasPushed(0)
  console.log(remoteControl.toString())
  remoteControl.undoButtonWasPushed()

  remoteControl.onButtonWasPushed(1)
  console.log(remoteControl.toString())
  remoteControl.undoButtonWasPushed()
}

main()
