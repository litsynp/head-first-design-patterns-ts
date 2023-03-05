import { CafeMenu, DinerMenu, PancakeHouseMenu } from './menu'
import { Waitress } from './waitress'

function main() {
  const pancakeHouseMenu = new PancakeHouseMenu()
  const dinerMenu = new DinerMenu()
  const cafeMenu = new CafeMenu()

  const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu)

  waitress.printMenu()
}

main()
