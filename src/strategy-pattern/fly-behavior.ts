export interface FlyBehavior {
  fly(): void
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't fly")
  }
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying")
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("I'm flying with a rocket")
  }
}
