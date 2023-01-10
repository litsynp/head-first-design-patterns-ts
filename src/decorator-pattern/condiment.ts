import { Beverage } from './beverage'

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage

  abstract get description(): string

  protected constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }
}

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  get description(): string {
    return this.beverage.description + ', Milk'
  }

  cost(): number {
    return this.beverage.cost() + 0.1
  }
}

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  get description(): string {
    return this.beverage.description + ', Mocha'
  }

  cost(): number {
    return this.beverage.cost() + 0.2
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  get description(): string {
    return this.beverage.description + ', Soy'
  }

  cost(): number {
    return this.beverage.cost() + 0.15
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super(beverage)
  }

  get description(): string {
    return this.beverage.description + ', Whip'
  }

  cost(): number {
    return this.beverage.cost() + 0.1
  }
}
