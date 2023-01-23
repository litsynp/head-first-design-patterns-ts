import Singleton from './singleton'

function main() {
  // If these singletons were assigned a new instance(which means if they are not singletons),
  // then each of its data will be always 2.

  const singleton1 = Singleton.getInstance()
  console.log(singleton1.getData()) // 2

  const singleton2 = Singleton.getInstance()
  console.log(singleton2.getData()) // 3

  const singleton3 = Singleton.getInstance()
  console.log(singleton3.getData()) // 4

  const singleton4 = Singleton.getInstance()
  console.log(singleton4.getData()) // 5

  const singleton5 = Singleton.getInstance()
  console.log(singleton5.getData()) // 6
}

main()
