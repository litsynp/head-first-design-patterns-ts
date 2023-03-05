import { MenuComponent } from './menu-component'

export class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = []
  private readonly _name: string
  private readonly _description: string

  constructor(name: string, description: string) {
    super()
    this._name = name
    this._description = description
  }

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent)
  }

  remove(menuComponent: MenuComponent): void {
    const index = this.menuComponents.indexOf(menuComponent)
    if (index >= 0) {
      this.menuComponents.splice(index, 1)
    }
  }

  getChild(index: number): MenuComponent {
    return this.menuComponents[index]
  }

  get name(): string {
    return this._name
  }

  get description(): string {
    return this._description
  }

  print(): void {
    console.log(`\n${this.name}, ${this.description}`)
    console.log('---------------------')

    for (const menuComponent of this.menuComponents) {
      menuComponent.print()
    }
  }
}
