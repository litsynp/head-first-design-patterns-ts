import {
  ChicagoPizzaIngredientFactory,
  NYPizzaIngredientFactory,
} from './ingredient'
import {
  CheesePizza,
  ClamPizza,
  PepperoniPizza,
  Pizza,
  VeggiePizza,
} from './pizza'

export abstract class PizzaStore {
  orderPizza(type: string): Pizza | null {
    const pizza = this.createPizza(type)

    if (!pizza) {
      return null
    }

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()
    return pizza
  }

  protected abstract createPizza(type: string): Pizza | null
}

export class NYPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza | null {
    let pizza: Pizza | null = null
    const ingredientFactory = new NYPizzaIngredientFactory()

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory)
      pizza.name = 'New York Style Cheese Pizza'
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory)
      pizza.name = 'New York Style Veggie Pizza'
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory)
      pizza.name = 'New York Style Clam Pizza'
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory)
      pizza.name = 'New York Style Pepperoni Pizza'
    }
    return pizza
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza | null {
    let pizza: Pizza | null = null
    const ingredientFactory = new ChicagoPizzaIngredientFactory()

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory)
      pizza.name = 'Chicago Style Cheese Pizza'
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory)
      pizza.name = 'Chicago Style Veggie Pizza'
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory)
      pizza.name = 'Chicago Style Clam Pizza'
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory)
      pizza.name = 'Chicago Style Pepperoni Pizza'
    }
    return pizza
  }
}
