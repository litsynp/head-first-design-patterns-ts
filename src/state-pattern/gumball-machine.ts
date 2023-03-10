import {
  HasQuarterState,
  NoQuarterState,
  SoldOutState,
  SoldState,
  State,
  WinnerState,
} from './state'

export class GumballMachine {
  soldOutState: State
  noQuarterState: State
  hasQuarterState: State
  soldState: State
  winnerState: State

  state: State
  count: number = 0

  constructor(numberGumballs: number) {
    this.soldState = new SoldState(this)
    this.soldOutState = new SoldOutState(this)
    this.noQuarterState = new NoQuarterState(this)
    this.hasQuarterState = new HasQuarterState(this)
    this.winnerState = new WinnerState(this)

    this.count = numberGumballs
    this.state = numberGumballs > 0 ? this.noQuarterState : this.soldOutState
  }

  insertQuarter(): void {
    this.state.insertQuarter()
  }

  ejectQuarter(): void {
    this.state.ejectQuarter()
  }

  turnCrank(): void {
    this.state.turnCrank()
    this.state.dispense()
  }

  setState(state: State): void {
    this.state = state
  }

  releaseBall(): void {
    console.log('A gumball comes rolling out the slot...')
    if (this.count !== 0) {
      this.count -= 1
    }
  }

  getCount(): number {
    return this.count
  }

  refill(count: number): void {
    this.count = count
    console.log(
      `The gumball machine was just refilled; it's new count is: ${this.count}`,
    )
    this.state = this.noQuarterState
  }

  toString(): string {
    let result = ''
    result += '\nMighty Gumball, Inc.'
    result += '\nJavaScript-enabled Standing Gumball Model #2004'
    result += `\nInventory: ${this.count} gumball`
    if (this.count !== 1) {
      result += 's'
    }
    result += `\nMachine is ${this.state.toString()}`
    return result
  }
}
