export interface Cheese {
  toString(): string
}

export class ReggianoCheese implements Cheese {
  toString(): string {
    return 'Reggiano Cheese'
  }
}

export class MozzarellaCheese implements Cheese {
  toString(): string {
    return 'Mozzarella Cheese'
  }
}
