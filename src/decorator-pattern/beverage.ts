export abstract class Beverage {
  private _description: string = 'Unknown Beverage'

  protected set description(value: string) {
    this._description = value
  }

  get description(): string {
    return this._description
  }

  abstract cost(): number
}

export class HouseBlend extends Beverage {
  constructor() {
    super()
    this.description = 'House Blend Coffee'
  }

  cost(): number {
    return 0.89
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super()
    this.description = 'Dark Roast'
  }

  cost(): number {
    return 0.99
  }
}

export class Decaf extends Beverage {
  constructor() {
    super()
    this.description = 'Decaf'
  }

  cost(): number {
    return 1.05
  }
}

export class Espresso extends Beverage {
  constructor() {
    super()
    this.description = 'Espresso'
  }

  cost(): number {
    return 1.99
  }
}
