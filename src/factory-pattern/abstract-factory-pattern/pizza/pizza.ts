import { Cheese } from '../ingredient/cheese'
import { Clam } from '../ingredient/clam'
import { Dough } from '../ingredient/dough'
import { PizzaIngredientFactory } from '../ingredient/ingredient'
import { Pepperoni } from '../ingredient/pepperoni'
import { Sauce } from '../ingredient/sauce'
import { Veggies } from '../ingredient/veggies'

export abstract class Pizza {
  private _name?: string

  protected dough?: Dough
  protected sauce?: Sauce
  protected veggies: Veggies[] = []
  protected cheese?: Cheese
  protected pepperoni?: Pepperoni
  protected clam?: Clam

  abstract prepare(): void

  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices')
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box')
  }

  set name(value: string) {
    this._name = value
  }

  get name(): string {
    return this._name ?? ''
  }

  toString(): string {
    // code to display pizza name and ingredients
    return ''
  }
}

export class CheesePizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
  }
}

export class ClamPizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.clam = this.ingredientFactory.createClam()
  }
}

export class PepperoniPizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.pepperoni = this.ingredientFactory.createPepperoni()
  }
}

export class VeggiePizza extends Pizza {
  private ingredientFactory: PizzaIngredientFactory

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super()
    this.ingredientFactory = ingredientFactory
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    this.dough = this.ingredientFactory.createDough()
    this.sauce = this.ingredientFactory.createSauce()
    this.cheese = this.ingredientFactory.createCheese()
    this.clam = this.ingredientFactory.createClam()
    this.veggies = this.ingredientFactory.createVeggies()
  }
}
