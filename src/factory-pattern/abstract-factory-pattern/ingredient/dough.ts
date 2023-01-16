export interface Dough {
  toString(): string
}

export class ThinCrustDough implements Dough {
  toString(): string {
    return 'Thin Crust Dough'
  }
}

export class ThickCrustDough implements Dough {
  toString(): string {
    return 'Thick Crust Dough'
  }
}
