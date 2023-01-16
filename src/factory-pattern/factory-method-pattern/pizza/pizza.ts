export abstract class Pizza {
  private readonly _name?: string
  dough?: string
  sauce?: string
  toppings: string[] = []

  protected constructor(name: string, dough: string, sauce: string) {
    this._name = name
    this.dough = dough
    this.sauce = sauce
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`)
    console.log('Tossing dough...')
    console.log('Adding sauce...')
    console.log('Adding toppings: ')
    for (const topping of this.toppings) {
      console.log(`  ${topping}`)
    }
  }

  bake(): void {
    console.log('Bake for 25 minutes at 350')
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices')
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box')
  }

  get name(): string {
    return this._name ?? ''
  }
}
