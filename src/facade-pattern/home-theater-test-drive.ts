import { HomeTheaterFacade } from './home-theater-facade'
import {
  Amplifier,
  PopcornPopper,
  Projector,
  Screen,
  StreamingPlayer,
  TheaterLights,
  Tuner,
} from './subsystem'

function main() {
  const amp = new Amplifier('Amplifier')
  const tuner = new Tuner('AM/FM Tuner', amp)
  const player = new StreamingPlayer('Streaming Player', amp)
  const projector = new Projector('Projector', player)
  const lights = new TheaterLights('Theater Ceiling Lights')
  const screen = new Screen('Theater Screen')
  const popper = new PopcornPopper('Popcorn Popper')

  const homeTheater = new HomeTheaterFacade(
    amp,
    tuner,
    player,
    projector,
    lights,
    screen,
    popper,
  )

  homeTheater.watchMovie('Raiders of the Lost Ark')
  homeTheater.endMovie()
}

main()
