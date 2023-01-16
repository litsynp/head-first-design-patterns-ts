import { Pizza } from './pizza'
import { ChicagoPizzaStore, NYPizzaStore } from './pizza-store'

function main() {
  const nyStore = new NYPizzaStore()
  const chicagoStore = new ChicagoPizzaStore()

  let pizza: Pizza | null = nyStore.orderPizza('cheese')
  if (pizza) {
    console.log(`Ethan ordered a ${pizza.name}\n`)
  }

  pizza = chicagoStore.orderPizza('cheese')
  if (pizza) {
    console.log(`Joel ordered a ${pizza.name}\n`)
  }
}

main()
