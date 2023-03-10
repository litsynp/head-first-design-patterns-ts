import { GumballMachine } from './gumball-machine'

export interface State {
  insertQuarter(): void

  ejectQuarter(): void

  turnCrank(): void

  dispense(): void

  refill(count: number): void
}

export class SoldState implements State {
  gumBallMachine: GumballMachine

  constructor(gumBallMachine: GumballMachine) {
    this.gumBallMachine = gumBallMachine
  }

  insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball")
  }

  ejectQuarter(): void {
    console.log('Sorry, you already turned the crank')
  }

  turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball!")
  }

  dispense(): void {
    this.gumBallMachine.releaseBall()
    if (this.gumBallMachine.getCount() > 0) {
      this.gumBallMachine.setState(this.gumBallMachine.noQuarterState)
    } else {
      console.log('Oops, out of gumballs!')
      this.gumBallMachine.setState(this.gumBallMachine.soldOutState)
    }
  }

  refill(): void {}

  toString(): string {
    return 'dispensing a gumball'
  }
}

export class SoldOutState implements State {
  gumBallMachine: GumballMachine

  constructor(gumBallMachine: GumballMachine) {
    this.gumBallMachine = gumBallMachine
  }

  insertQuarter(): void {
    console.log("You can't insert a quarter, the machine is sold out")
  }

  ejectQuarter(): void {
    console.log("You can't eject, you haven't inserted a quarter yet")
  }

  turnCrank(): void {
    console.log('You turned, but there are no gumballs')
  }

  dispense(): void {
    console.log('No gumball dispensed')
  }

  refill(): void {
    this.gumBallMachine.setState(this.gumBallMachine.noQuarterState)
  }

  toString(): string {
    return 'sold out'
  }
}

export class NoQuarterState implements State {
  gumBallMachine: GumballMachine

  constructor(gumBallMachine: GumballMachine) {
    this.gumBallMachine = gumBallMachine
  }

  insertQuarter(): void {
    console.log('You inserted a quarter')
    this.gumBallMachine.setState(this.gumBallMachine.hasQuarterState)
  }

  ejectQuarter(): void {
    console.log("You haven't inserted a quarter")
  }

  turnCrank(): void {
    console.log("You turned, but there's no quarter")
  }

  dispense(): void {
    console.log('You need to pay first')
  }

  refill(): void {}

  toString(): string {
    return 'waiting for quarter'
  }
}

export class HasQuarterState implements State {
  gumBallMachine: GumballMachine

  constructor(gumBallMachine: GumballMachine) {
    this.gumBallMachine = gumBallMachine
  }

  insertQuarter(): void {
    console.log("You can't insert another quarter")
  }

  ejectQuarter(): void {
    console.log('Quarter returned')
    this.gumBallMachine.setState(this.gumBallMachine.noQuarterState)
  }

  turnCrank(): void {
    console.log('You turned...')
    const winner = HasQuarterState.getRandomNumber()

    // 10% chance of winning
    if (winner === 1 && this.gumBallMachine.getCount() > 1) {
      this.gumBallMachine.setState(this.gumBallMachine.winnerState)
    } else {
      this.gumBallMachine.setState(this.gumBallMachine.soldState)
    }
  }

  dispense(): void {
    console.log('No gumball dispensed')
  }

  refill(): void {}

  toString(): string {
    return 'waiting for turn of crank'
  }

  // Get a random number between 1 and 10
  private static getRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1
  }
}

export class WinnerState implements State {
  gumBallMachine: GumballMachine

  constructor(gumBallMachine: GumballMachine) {
    this.gumBallMachine = gumBallMachine
  }

  insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball")
  }

  ejectQuarter(): void {
    console.log('Sorry, you already turned the crank')
  }

  turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball!")
  }

  dispense(): void {
    this.gumBallMachine.releaseBall()

    if (this.gumBallMachine.getCount() === 0) {
      this.gumBallMachine.setState(this.gumBallMachine.soldOutState)
    } else {
      this.gumBallMachine.releaseBall()
      console.log("YOU'RE A WINNER! You got two gumballs for your quarter")

      if (this.gumBallMachine.getCount() > 0) {
        this.gumBallMachine.setState(this.gumBallMachine.noQuarterState)
      } else {
        console.log('Oops, out of gumballs!')
        this.gumBallMachine.setState(this.gumBallMachine.soldOutState)
      }
    }
  }

  refill(): void {}

  toString(): string {
    return "dispensing two gumballs for your quarter, because YOU'RE A WINNER!"
  }
}
