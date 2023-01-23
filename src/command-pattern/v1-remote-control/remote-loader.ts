import {
  CeilingFanOffCommand,
  CeilingFanOnCommand,
  GarageDoorDownCommand,
  GarageDoorUpCommand,
  LightOffCommand,
  LightOnCommand,
  StereoOffCommand,
  StereoOnWithCdCommand,
} from './command'
import { RemoteControl } from './remote-control'
import { CeilingFan, GarageDoor, Light, Stereo } from './vendor'

function main() {
  const remoteControl: RemoteControl = new RemoteControl()

  const livingRoomLight = new Light('Living Room')
  const kitchenLight = new Light('Kitchen')
  const ceilingFan = new CeilingFan('Living Room')
  const garageDoor = new GarageDoor('Garage')
  const stereo = new Stereo('Living Room')

  const livingRoomLightOnCommand = new LightOnCommand(livingRoomLight)
  const livingRoomLightOffCommand = new LightOffCommand(livingRoomLight)
  const kitchenLightOnCommand = new LightOnCommand(kitchenLight)
  const kitchenLightOffCommand = new LightOffCommand(kitchenLight)

  const ceilingFanOnCommand = new CeilingFanOnCommand(ceilingFan)
  const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan)

  const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor)
  const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor)

  const stereoOnWithCDCommand = new StereoOnWithCdCommand(stereo)
  const stereoOffCommand = new StereoOffCommand(stereo)

  remoteControl.setCommand(
    0,
    livingRoomLightOnCommand,
    livingRoomLightOffCommand,
  )
  remoteControl.setCommand(1, kitchenLightOnCommand, kitchenLightOffCommand)
  remoteControl.setCommand(2, ceilingFanOnCommand, ceilingFanOffCommand)
  remoteControl.setCommand(3, garageDoorUpCommand, garageDoorDownCommand)
  remoteControl.setCommand(4, stereoOnWithCDCommand, stereoOffCommand)

  console.log(remoteControl.toString())

  remoteControl.onButtonWasPushed(0)
  remoteControl.offButtonWasPushed(0)
  remoteControl.onButtonWasPushed(1)
  remoteControl.offButtonWasPushed(1)
  remoteControl.onButtonWasPushed(2)
  remoteControl.offButtonWasPushed(2)
  remoteControl.onButtonWasPushed(3)
  remoteControl.offButtonWasPushed(3)
  remoteControl.onButtonWasPushed(4)
  remoteControl.offButtonWasPushed(4)
}

main()
