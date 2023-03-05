import { MenuItem } from './menu-item'

export interface Menu extends Iterable<MenuItem> {
  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number,
  ): void

  // JS/TS supports the iterator pattern via the Symbol.iterator property.
  [Symbol.iterator](): Iterator<MenuItem>
}

export class PancakeHouseMenu implements Menu {
  private _menuItems: MenuItem[] = []

  constructor() {
    this.addItem(
      "K&B's Pancake Breakfast",
      'Pancakes with scrambled eggs, and toast',
      true,
      2.99,
    )
    this.addItem(
      'Regular Pancake Breakfast',
      'Pancakes with fried eggs, sausage',
      false,
      2.99,
    )
    this.addItem(
      'Blueberry Pancakes',
      'Pancakes made with fresh blueberries',
      true,
      3.49,
    )
    this.addItem(
      'Waffles',
      'Waffles, with your choice of blueberries or strawberries',
      true,
      3.59,
    )
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number,
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price)
    this._menuItems.push(menuItem)
  }

  [Symbol.iterator]() {
    let index = 0

    return {
      next: () => {
        const value = this._menuItems[index]
        index++
        return {
          done: index > this._menuItems.length,
          value,
        }
      },
    }
  }
}

export class DinerMenu implements Menu {
  static readonly MAX_ITEMS = 6
  private _numberOfItems = 0
  private readonly _menuItems: MenuItem[] = []

  constructor() {
    this.addItem(
      'Vegetarian BLT',
      '(Fakin’) Bacon with lettuce & tomato on whole wheat',
      true,
      2.99,
    )
    this.addItem(
      'BLT',
      'Bacon with lettuce & tomato on whole wheat',
      false,
      2.99,
    )
    this.addItem(
      'Soup of the day',
      'Soup of the day, with a side of potato salad',
      false,
      3.29,
    )
    this.addItem(
      'Hotdog',
      'A hot dog, with saurkraut, relish, onions, topped with cheese',
      false,
      3.05,
    )
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number,
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price)
    if (this._numberOfItems >= DinerMenu.MAX_ITEMS) {
      console.log('Sorry, menu is full!  Can’t add item to menu')
    } else {
      this._menuItems[this._numberOfItems] = menuItem
      this._numberOfItems++
    }
  }

  [Symbol.iterator]() {
    let index = 0

    return {
      next: () => {
        const value = this._menuItems[index]
        index++
        return {
          done: index > this._menuItems.length,
          value,
        }
      },
    }
  }
}

export class CafeMenu implements Menu {
  private readonly _menuItems: Map<string, MenuItem> = new Map()

  constructor() {
    this.addItem(
      'Veggie Burger and Air Fries',
      'Veggie burger on a whole wheat bun, lettuce, tomato, and fries',
      true,
      3.99,
    )
    this.addItem(
      'Soup of the day',
      'A cup of the soup of the day, with a side salad',
      false,
      3.69,
    )
    this.addItem(
      'Burrito',
      'A large burrito, with whole pinto beans, salsa, guacamole',
      true,
      4.29,
    )
  }

  addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number,
  ): void {
    const menuItem = new MenuItem(name, description, vegetarian, price)
    this._menuItems.set(menuItem.name, menuItem)
  }

  [Symbol.iterator]() {
    const values = this._menuItems.values()
    return {
      next: () => {
        const value = values.next().value
        return {
          done: value === undefined,
          value,
        }
      },
    }
  }
}
