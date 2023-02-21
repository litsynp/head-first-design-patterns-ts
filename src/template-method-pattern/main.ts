import { Coffee, CoffeeWithHook } from './coffee'
import { Tea, TeaWithHook } from './tea'

async function main() {
  const tea: Tea = new Tea()
  const coffee: Coffee = new Coffee()

  console.log('Making tea...')
  tea.prepareRecipe()

  console.log('Making coffee...')
  coffee.prepareRecipe()

  const teaHook: TeaWithHook = new TeaWithHook()
  const coffeeHook: CoffeeWithHook = new CoffeeWithHook()

  console.log('Making tea...')
  await teaHook.prepareRecipe()

  console.log('Making coffee...')
  await coffeeHook.prepareRecipe()
}

main()
