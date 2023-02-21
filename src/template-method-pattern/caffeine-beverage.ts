export abstract class CaffeineBeverage {
  prepareRecipe(): void {
    this.boilWater()
    this.brew()
    this.pourInCup()
    this.addCondiments()
  }

  abstract brew(): void

  abstract addCondiments(): void

  boilWater(): void {
    console.log('Boiling water')
  }

  pourInCup(): void {
    console.log('Pouring into cup')
  }
}

export abstract class CaffeineBeverageWithHook {
  async prepareRecipe(): Promise<void> {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (await this.customerWantsCondiments()) {
      this.addCondiments()
    }
  }

  abstract brew(): void

  abstract addCondiments(): void

  boilWater(): void {
    console.log('Boiling water')
  }

  pourInCup(): void {
    console.log('Pouring into cup')
  }

  // Hook
  customerWantsCondiments(): Promise<boolean> {
    return Promise.resolve(true)
  }
}
