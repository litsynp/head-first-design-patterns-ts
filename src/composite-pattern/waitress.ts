import { MenuComponent } from './menu-component'

export class Waitress {
  private allMenus: MenuComponent

  constructor(menuComponent: MenuComponent) {
    this.allMenus = menuComponent
  }

  printMenu(): void {
    this.allMenus.print()
  }
}
