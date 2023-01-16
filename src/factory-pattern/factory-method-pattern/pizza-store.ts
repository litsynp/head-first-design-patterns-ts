import {
  ChicagoStyleCheesePizza,
  ChicagoStyleClamPizza,
  ChicagoStylePepperoniPizza,
  ChicagoStyleVeggiePizza,
  NYStyleCheesePizza,
  NYStyleClamPizza,
  NYStylePepperoniPizza,
  NYStyleVeggiePizza,
  Pizza,
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

    if (item === 'cheese') {
      pizza = new NYStyleCheesePizza()
    } else if (item === 'veggie') {
      pizza = new NYStyleVeggiePizza()
    } else if (item === 'clam') {
      pizza = new NYStyleClamPizza()
    } else if (item === 'pepperoni') {
      pizza = new NYStylePepperoniPizza()
    }
    return pizza
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza | null {
    let pizza: Pizza | null = null

    if (item === 'cheese') {
      pizza = new ChicagoStyleCheesePizza()
    } else if (item === 'veggie') {
      pizza = new ChicagoStyleVeggiePizza()
    } else if (item === 'clam') {
      pizza = new ChicagoStyleClamPizza()
    } else if (item === 'pepperoni') {
      pizza = new ChicagoStylePepperoniPizza()
    }
    return pizza
  }
}
