import { Duck, MallardDuck, ModelDuck } from './duck'
import { FlyRocketPowered } from './fly-behavior'

function main() {
  const mallard: Duck = new MallardDuck()
  mallard.performFly()
  mallard.performQuack()

  const model: Duck = new ModelDuck()
  model.performFly()
  model.setFlyBehavior(new FlyRocketPowered())
  model.performFly()
}

main()
