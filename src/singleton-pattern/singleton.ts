export default class Singleton {
  private static uniqueInstance: Singleton
  private data: number

  private constructor() {
    this.data = 1
  }

  static getInstance(): Singleton {
    if (!this.uniqueInstance) {
      this.uniqueInstance = new Singleton()
    }
    return this.uniqueInstance
  }

  getData(): number {
    this.data = this.data + 1
    return this.data
  }
}
