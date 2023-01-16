import { Pizza } from './pizza'

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super(
      'NY Style Sauce and Cheese Pizza',
      'Thin Crust Dough',
      'Marinara Sauce',
    )

    this.toppings.push('Grated Reggiano Cheese')
  }
}

export class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super('NY Style Veggie Pizza', 'Thin Crust Dough', 'Marinara Sauce')

    this.toppings.push('Grated Reggiano Cheese')
    this.toppings.push('Garlic')
    this.toppings.push('Onion')
    this.toppings.push('Mushrooms')
    this.toppings.push('Red Pepper')
  }
}

export class NYStyleClamPizza extends Pizza {
  constructor() {
    super('NY Style Clam Pizza', 'Thin Crust Dough', 'Marinara Sauce')

    this.toppings.push('Grated Reggiano Cheese')
    this.toppings.push('Fresh Clams from Long Island Sound')
  }
}

export class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super('NY Style Pepperoni Pizza', 'Thin Crust Dough', 'Marinara Sauce')

    this.toppings.push('Grated Reggiano Cheese')
    this.toppings.push('Sliced Pepperoni')
    this.toppings.push('Garlic')
    this.toppings.push('Onion')
    this.toppings.push('Mushrooms')
    this.toppings.push('Red Pepper')
  }
}
