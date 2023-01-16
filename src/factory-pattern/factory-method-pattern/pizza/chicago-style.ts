import { Pizza } from './pizza'

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super(
      'Chicago Style Deep Dish Cheese Pizza',
      'Extra Thick Crust Dough',
      'Plum Tomato Sauce',
    )

    this.toppings.push('Shredded Mozzarella Cheese')
  }

  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}

export class ChicagoStyleVeggiePizza extends Pizza {
  constructor() {
    super(
      'Chicago Style Deep Dish Veggie Pizza',
      'Extra Thick Crust Dough',
      'Plum Tomato Sauce',
    )

    this.toppings.push('Shredded Mozzarella Cheese')
    this.toppings.push('Black Olives')
    this.toppings.push('Spinach')
    this.toppings.push('Eggplant')
  }

  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}

export class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super(
      'Chicago Style Deep Dish Clam Pizza',
      'Extra Thick Crust Dough',
      'Plum Tomato Sauce',
    )

    this.toppings.push('Shredded Mozzarella Cheese')
    this.toppings.push('Frozen Clams from Chesapeake Bay')
  }

  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}

export class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super(
      'Chicago Style Deep Dish Pepperoni Pizza',
      'Extra Thick Crust Dough',
      'Plum Tomato Sauce',
    )

    this.toppings.push('Shredded Mozzarella Cheese')
    this.toppings.push('Black Olives')
    this.toppings.push('Spinach')
    this.toppings.push('Eggplant')
    this.toppings.push('Sliced Pepperoni')
  }

  cut(): void {
    console.log('Cutting the pizza into square slices')
  }
}
