export interface Turkey {
  gobble(): void

  fly(): void
}

export class WildTurkey implements Turkey {
  gobble(): void {
    console.log('gobble gobble')
  }

  fly(): void {
    console.log("I'm flying a short distance")
  }
}
