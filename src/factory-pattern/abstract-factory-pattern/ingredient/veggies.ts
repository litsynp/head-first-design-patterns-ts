export interface Veggies {
  toString(): string
}

export class BlackOlives implements Veggies {
  toString(): string {
    return 'Black Olives'
  }
}

export class Eggplant implements Veggies {
  toString(): string {
    return 'Eggplant'
  }
}

export class Garlic implements Veggies {
  toString(): string {
    return 'Garlic'
  }
}

export class Mushroom implements Veggies {
  toString(): string {
    return 'Mushroom'
  }
}

export class Onion implements Veggies {
  toString(): string {
    return 'Onion'
  }
}

export class RedPepper implements Veggies {
  toString(): string {
    return 'Red Pepper'
  }
}

export class Spinach implements Veggies {
  toString(): string {
    return 'Spinach'
  }
}
