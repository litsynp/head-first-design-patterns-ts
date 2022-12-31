import {
  AxeBehavior,
  BowAndArrowBehavior,
  SwordBehavior,
  WeaponBehavior,
} from './weapon'

export abstract class Character {
  protected weaponBehavior: WeaponBehavior

  protected constructor(weaponBehavior: WeaponBehavior) {
    this.weaponBehavior = weaponBehavior
  }

  setWeapon(weaponBehavior: WeaponBehavior) {
    this.weaponBehavior = weaponBehavior
  }

  fight() {
    this.weaponBehavior.useWeapon()
  }
}

export class Archer extends Character {
  constructor() {
    super(new BowAndArrowBehavior())
  }
}

export class Knight extends Character {
  constructor() {
    super(new SwordBehavior())
  }
}

export class King extends Character {
  constructor() {
    super(new SwordBehavior())
  }
}

export class Queen extends Character {
  constructor() {
    super(new SwordBehavior())
  }
}

export class Troll extends Character {
  constructor() {
    super(new AxeBehavior())
  }
}
