import { FlyBehavior, FlyNoWay, FlyWithWings } from './fly-behavior'
import { Quack, QuackBehavior, Squeak } from './quack-behavior'

export abstract class Duck {
  protected flyBehavior: FlyBehavior
  protected quackBehavior: QuackBehavior

  protected constructor(
    flyBehavior: FlyBehavior,
    quackBehavior: QuackBehavior,
  ) {
    this.flyBehavior = flyBehavior
    this.quackBehavior = quackBehavior
  }

  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb
  }

  setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb
  }

  abstract display(): void

  performFly(): void {
    this.flyBehavior.fly()
  }

  performQuack(): void {
    this.quackBehavior.quack()
  }

  swim(): void {
    console.log('All ducks float, even decoys!')
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack())
  }

  display(): void {
    console.log("I'm a real mallard duck")
  }
}

export class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak())
  }

  display(): void {
    console.log("I'm a rubber duck")
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack())
  }

  display(): void {
    console.log("I'm a model duck")
  }
}
