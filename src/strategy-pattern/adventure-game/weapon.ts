export interface WeaponBehavior {
  useWeapon: () => void
}

export class AxeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Chop with axe')
  }
}

export class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Shoot with bow and arrow')
  }
}

export class KnifeBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Stab with knife')
  }
}

export class SwordBehavior implements WeaponBehavior {
  useWeapon() {
    console.log('Slash with sword')
  }
}
