import { Duck, MallardDuck } from './duck'
import { Turkey, WildTurkey } from './turkey'
import { TurkeyAdapter } from './turkey-adapter'

function main() {
  const duck: Duck = new MallardDuck()

  const turkey: Turkey = new WildTurkey()
  const turkeyAdapter: Duck = new TurkeyAdapter(turkey)

  console.log('The Turkey says...')
  turkey.gobble()
  turkey.fly()

  console.log('The Duck says...')
  duck.quack()
  duck.fly()

  console.log('The TurkeyAdapter says...')
  turkeyAdapter.quack()
  turkeyAdapter.fly()
}

main()
