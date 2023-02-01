import {
  Amplifier,
  PopcornPopper,
  Projector,
  Screen,
  StreamingPlayer,
  TheaterLights,
  Tuner,
} from './subsystem'

export class HomeTheaterFacade {
  private readonly amp: Amplifier
  private readonly tuner: Tuner
  private readonly player: StreamingPlayer
  private readonly projector: Projector
  private readonly lights: TheaterLights
  private readonly screen: Screen
  private readonly popper: PopcornPopper

  constructor(
    amplifier: Amplifier,
    tuner: Tuner,
    player: StreamingPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: Screen,
    popper: PopcornPopper,
  ) {
    this.amp = amplifier
    this.tuner = tuner
    this.player = player
    this.projector = projector
    this.lights = lights
    this.screen = screen
    this.popper = popper
  }

  watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...')
    this.popper.on()
    this.popper.pop()
    this.lights.dim(10)
    this.screen.down()
    this.projector.on()
    this.projector.setWideScreenMode()
    this.amp.on()
    this.amp.setStreamingPlayer(this.player)
    this.amp.setSurroundSound()
    this.amp.setVolume(5)
    this.player.on()
    this.player.play(movie)
  }

  endMovie(): void {
    console.log('Shutting movie theater down...')
    this.popper.off()
    this.lights.on()
    this.screen.up()
    this.projector.off()
    this.amp.off()
    this.player.stop()
    this.player.off()
  }

  listenToRadio(frequency: number): void {
    console.log('Tuning in the airwaves...')
    this.tuner.on()
    this.tuner.setFrequency(frequency)
    this.amp.on()
    this.amp.setVolume(5)
    this.amp.setTuner(this.tuner)
  }

  endRadio(): void {
    console.log('Shutting down the tuner...')
    this.tuner.off()
    this.amp.off()
  }
}
