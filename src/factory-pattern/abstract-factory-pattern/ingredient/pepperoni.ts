export interface Pepperoni {
  toString(): string
}

export class SlicedPepperoni implements Pepperoni {
  toString(): string {
    return 'Sliced Pepperoni'
  }
}
