export interface Clam {
  toString(): string
}

export class FreshClam implements Clam {
  toString(): string {
    return 'Fresh Clams'
  }
}

export class FrozenClam implements Clam {
  toString(): string {
    return 'Frozen Clams'
  }
}
