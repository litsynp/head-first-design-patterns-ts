import readline from 'readline'

import { CaffeineBeverage, CaffeineBeverageWithHook } from './caffeine-beverage'

export class Coffee extends CaffeineBeverage {
  brew(): void {
    console.log('Dripping coffee through filter')
  }

  addCondiments(): void {
    console.log('Adding sugar and milk')
  }
}

export class CoffeeWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log('Dripping coffee through filter')
  }

  addCondiments(): void {
    console.log('Adding sugar and milk')
  }

  async customerWantsCondiments(): Promise<boolean> {
    const answer = await CoffeeWithHook.getUserInput()
    return answer.toLowerCase().startsWith('y')
  }

  private static getUserInput(): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise((resolve) =>
      rl.question(
        '> Would you like milk and sugar with your coffee (y/n)? ',
        (answer) => {
          rl.close()
          resolve(answer)
        },
      ),
    )
  }
}
