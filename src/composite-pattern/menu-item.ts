import { MenuComponent } from './menu-component'

export class MenuItem extends MenuComponent {
  private readonly _name: string
  private readonly _description: string
  private readonly _vegetarian: boolean
  private readonly _price: number

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number,
  ) {
    super()
    this._name = name
    this._description = description
    this._vegetarian = vegetarian
    this._price = price
  }

  get name(): string {
    return this._name
  }

  get description(): string {
    return this._description
  }

  get vegetarian(): boolean {
    return this._vegetarian
  }

  get price(): number {
    return this._price
  }

  print(): void {
    console.log(`  ${this.name} ${this.vegetarian ? '(v)' : ''}, ${this.price}`)
    console.log(`    -- ${this.description}`)
  }
}
