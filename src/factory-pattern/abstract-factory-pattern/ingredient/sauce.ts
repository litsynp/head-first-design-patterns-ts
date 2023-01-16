export interface Sauce {
  toString(): string
}

export class MarinaraSauce implements Sauce {
  toString(): string {
    return 'Marinara Sauce'
  }
}

export class PlumTomatoSauce implements Sauce {
  toString(): string {
    return 'Plum Tomato Sauce'
  }
}
