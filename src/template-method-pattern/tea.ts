import readline from 'readline'

import { CaffeineBeverage, CaffeineBeverageWithHook } from './caffeine-beverage'

export class Tea extends CaffeineBeverage {
  brew(): void {
    console.log('Steeping the tea')
  }

  addCondiments(): void {
    console.log('Adding lemon')
  }
}

export class TeaWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log('Steeping the tea')
  }

  addCondiments(): void {
    console.log('Adding lemon')
  }

  async customerWantsCondiments(): Promise<boolean> {
    const answer = await TeaWithHook.getUserInput()
    return answer.toLowerCase().startsWith('y')
  }

  private static getUserInput(): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise((resolve) =>
      rl.question('> Would you like lemon with your tea (y/n)? ', (answer) => {
        rl.close()
        resolve(answer)
      }),
    )
  }
}
