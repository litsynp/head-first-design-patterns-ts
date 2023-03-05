import { CafeMenu, DinerMenu, PancakeHouseMenu } from './menu'
import { MenuItem } from './menu-item'

export class Waitress {
  private readonly _pancakeHouseMenu: PancakeHouseMenu
  private readonly _dinerMenu: DinerMenu
  private readonly _cafeMenu: CafeMenu

  constructor(
    pancakeHouseMenu: PancakeHouseMenu,
    dinerMenu: DinerMenu,
    cafeMenu: CafeMenu,
  ) {
    this._pancakeHouseMenu = pancakeHouseMenu
    this._dinerMenu = dinerMenu
    this._cafeMenu = cafeMenu
  }

  printMenu(): void {
    console.log('MENU\n----\nBREAKFAST')
    this.printMenuItems(this._pancakeHouseMenu)

    console.log('\nLUNCH')
    this.printMenuItems(this._dinerMenu)

    console.log('\nDINNER')
    this.printMenuItems(this._cafeMenu)
  }

  // JS/TS doesn't have overloading, so we have to use a different name
  private printMenuItems(iterator: Iterable<MenuItem>): void {
    for (const menuItem of iterator) {
      console.log(
        `${menuItem.name}, ${menuItem.price} -- ${menuItem.description}`,
      )
    }
  }
}
