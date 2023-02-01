export interface Duck {
  quack(): void

  fly(): void
}

export class MallardDuck implements Duck {
  quack(): void {
    console.log('quack')
  }

  fly(): void {
    console.log('fly')
  }
}
