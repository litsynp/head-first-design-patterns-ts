import {
  Command,
  HottubOffCommand,
  HottubOnCommand,
  LightOffCommand,
  LightOnCommand,
  MacroCommand,
  StereoOffCommand,
  StereoOnWithCdCommand,
  TvOffCommand,
  TvOnCommand,
} from './command'
import { RemoteControl } from './remote-control'
import { Hottub, Light, Stereo, Tv } from './vendor'

function main() {
  const remoteControl = new RemoteControl()

  const livingRoomLight = new Light('Living Room')
  const tv = new Tv('Living Room')
  const stereo = new Stereo('Living Room')
  const hottub = new Hottub()

  const livingRoomLightOnCommand = new LightOnCommand(livingRoomLight)
  const livingRoomLightOffCommand = new LightOffCommand(livingRoomLight)
  const tvOnCommand = new TvOnCommand(tv)
  const tvOffCommand = new TvOffCommand(tv)
  const stereoOnCommand = new StereoOnWithCdCommand(stereo)
  const stereoOffCommand = new StereoOffCommand(stereo)
  const hottubOnCommand = new HottubOnCommand(hottub)
  const hottubOffCommand = new HottubOffCommand(hottub)

  const partyOn: Command[] = [
    livingRoomLightOnCommand,
    stereoOnCommand,
    tvOnCommand,
    hottubOnCommand,
  ]

  const partyOff: Command[] = [
    livingRoomLightOffCommand,
    stereoOffCommand,
    tvOffCommand,
    hottubOffCommand,
  ]

  const partyOnMacro = new MacroCommand(partyOn)
  const partyOffMacro = new MacroCommand(partyOff)

  remoteControl.setCommand(0, partyOnMacro, partyOffMacro)

  console.log(remoteControl.toString())
  console.log('--- Pushing Macro On ---')
  remoteControl.onButtonWasPushed(0)
  console.log('--- Pushing Macro Off ---')
  remoteControl.offButtonWasPushed(0)
}

main()
