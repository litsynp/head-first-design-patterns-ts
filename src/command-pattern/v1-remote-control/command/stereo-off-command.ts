import { Stereo } from '../vendor'

export class StereoOffCommand {
  private stereo: Stereo

  constructor(stereo: Stereo) {
    this.stereo = stereo
  }

  execute(): void {
    this.stereo.off()
  }
}
