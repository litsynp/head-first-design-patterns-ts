import { Cheese, MozzarellaCheese, ReggianoCheese } from './cheese'
import { Clam, FreshClam, FrozenClam } from './clam'
import { Dough, ThickCrustDough, ThinCrustDough } from './dough'
import { Pepperoni, SlicedPepperoni } from './pepperoni'
import { MarinaraSauce, PlumTomatoSauce, Sauce } from './sauce'
import {
  BlackOlives,
  Eggplant,
  Garlic,
  Mushroom,
  Onion,
  RedPepper,
  Spinach,
  Veggies,
} from './veggies'

export interface PizzaIngredientFactory {
  createDough(): Dough

  createSauce(): Sauce

  createCheese(): Cheese

  createVeggies(): Veggies[]

  createPepperoni(): Pepperoni

  createClam(): Clam
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough()
  }

  createSauce(): Sauce {
    return new MarinaraSauce()
  }

  createCheese(): Cheese {
    return new ReggianoCheese()
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
    ]
    return veggies
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }

  createClam(): Clam {
    return new FreshClam()
  }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough()
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce()
  }

  createCheese(): Cheese {
    return new MozzarellaCheese()
  }

  createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new BlackOlives(),
      new Spinach(),
      new Eggplant(),
    ]
    return veggies
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni()
  }

  createClam(): Clam {
    return new FrozenClam()
  }
}
