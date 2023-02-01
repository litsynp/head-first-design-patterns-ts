import { Duck, MallardDuck } from './duck'
import { DuckAdapter } from './duck-adapter'
import { Turkey } from './turkey'

function main() {
  const duck: Duck = new MallardDuck()
  const duckAdapter: Turkey = new DuckAdapter(duck)

  console.log('The DuckAdapter says...')
  for (let i = 0; i < 10; i++) {
    duckAdapter.gobble()
    duckAdapter.fly()
  }
}

main()
