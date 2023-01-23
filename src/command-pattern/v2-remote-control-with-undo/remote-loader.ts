import { LightOffCommand, LightOnCommand } from './command'
import { RemoteControlWithUndo } from './remote-control-with-undo'
import { Light } from './vendor'

function main() {
  const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo()

  const livingRoomLight = new Light('Living Room')

  const livingRoomLightOnCommand = new LightOnCommand(livingRoomLight)
  const livingRoomLightOffCommand = new LightOffCommand(livingRoomLight)

  remoteControl.setCommand(
    0,
    livingRoomLightOnCommand,
    livingRoomLightOffCommand,
  )

  remoteControl.onButtonWasPushed(0)
  remoteControl.offButtonWasPushed(0)

  console.log(remoteControl.toString())

  remoteControl.undoButtonWasPushed()
  remoteControl.offButtonWasPushed(0)
  remoteControl.onButtonWasPushed(0)

  console.log(remoteControl.toString())

  remoteControl.undoButtonWasPushed()
}

main()
