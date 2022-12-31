export interface QuackBehavior {
  quack(): void
}

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('quack')
  }
}

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('')
  }
}

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('squeak')
  }
}
