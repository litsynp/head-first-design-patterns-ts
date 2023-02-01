import { Duck } from './duck'
import { Turkey } from './turkey'

export class DuckAdapter implements Turkey {
  duck: Duck
  rand: number

  constructor(duck: Duck) {
    this.duck = duck
    this.rand = Math.random()
  }

  gobble(): void {
    this.duck.quack()
  }

  fly(): void {
    if (this.rand === 0) {
      this.duck.fly()
    }
  }
}
