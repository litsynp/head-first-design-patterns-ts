export abstract class MenuComponent {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(menuComponent: MenuComponent): void {
    throw new Error('Method not implemented.')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(menuComponent: MenuComponent): void {
    throw new Error('Method not implemented.')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChild(index: number): MenuComponent {
    throw new Error('Method not implemented.')
  }

  get name(): string {
    throw new Error('Method not implemented.')
  }

  get description(): string {
    throw new Error('Method not implemented.')
  }

  get price(): number {
    throw new Error('Method not implemented.')
  }

  get vegetarian(): boolean {
    throw new Error('Method not implemented.')
  }

  print(): void {
    throw new Error('Method not implemented.')
  }
}
