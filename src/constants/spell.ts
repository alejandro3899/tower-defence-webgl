import { ARMOR_TYPES, DAMAGE_TYPES } from ".";

export const SPELLS_INFO = {
    "Throwing Axes": {
        name: "Throwing Axes",
        propertyName: "Throwing_Axes",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/normal/throwingAxes.png",
        cost: 500,
        damageType: DAMAGE_TYPES.Normal,
        attackRange: 900,
        targetType: "single",
        targetPreference: ARMOR_TYPES.Medium,
        attackDamage: 75,
        dps: 75,
        cooldown: 1.0,
    },
    Seeker_Axe: {
        name: "Seeker Axe",
        propertyName: "Seeker_Axe",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/normal/Seeker Axe.png",
        cost: 2000,
        damageType: DAMAGE_TYPES.Normal,
        attackRange: 600,
        targetType: "Bounce(3)",
        BounceCount: 3,
        targetPreference: ARMOR_TYPES.Medium,
        attackDamage: 150,
        dps: 150,
        cooldown: 1.0,
    },
    Rifle: {
        name: "Rifle",
        propertyName: "Rifle",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/normal/Rifle.png",
        cost: 2000,
        damageType: DAMAGE_TYPES.Normal,
        attackRange: 900,
        targetType: "Stun(1.5)",
        stunDuration: 1.5,
        targetPreference: ARMOR_TYPES.Medium,
        attackDamage: 200,
        dps: 200,
        cooldown: 1.0,
    },

    Bow: {
        name: "Bow",
        propertyName: "Bow",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/piercing/bow.png",
        cost: 500,
        damageType: DAMAGE_TYPES.Piercing,
        attackRange: 900,
        targetType: "single",
        targetPreference: ARMOR_TYPES.Light,
        attackDamage: 75,
        dps: 75,
        cooldown: 1.0,
    },
    Frost_Bow: {
        name: "Frost Bow",
        propertyName: "Frost_Bow",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/piercing/Frost Bow.png",
        cost: 2000,
        damageType: DAMAGE_TYPES.Piercing,
        attackRange: 900,
        targetType: "single",
        targetPreference: ARMOR_TYPES.Light,
        attackDamage: 100,
        dps: 200,
        cooldown: 0.5,
        slowTime: 2.0,
    },
    Fire_Bow: {
        name: "Fire Bow",
        propertyName: "Fire_Bow",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/piercing/Fire Bow.png",
        cost: 2000,
        damageType: DAMAGE_TYPES.Piercing,
        attackRange: 900,
        targetType: "single",
        targetPreference: ARMOR_TYPES.Light,
        attackDamage: 75,
        dps: 150,
        cooldown: 0.5,
        duration: 1.0,
    },

    Magic_Missiles: {
        name: "Magic Missiles",
        propertyName: "Magic_Missiles",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/magic/Magic Missiles.png",
        cost: 500,
        damageType: DAMAGE_TYPES.Magic,
        attackRange: 900,
        targetType: "single",
        targetPreference: ARMOR_TYPES.Heavy,
        attackDamage: 75,
        dps: 75,
        cooldown: 1.0,
    },
    Flamecaster: {
        name: "Flamecaster",
        propertyName: "Flamecaster",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/magic/Flamecaster.png",
        cost: 2000,
        damageType: DAMAGE_TYPES.Magic,
        attackRange: 300,
        targetType: "Splash",
        targetPreference: null,
        attackDamage: 60,
        dps: 300,
        cooldown: 0.2,
    },

    Boulder: {
        name: "Boulder",
        propertyName: "Boulder",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/siege/Boulder.png",
        cost: 500,
        damageType: DAMAGE_TYPES.Siege,
        attackRange: 900,
        targetType: "single",
        targetPreference: ARMOR_TYPES.Heavy,
        attackDamage: 75,
        dps: 75,
        cooldown: 1.0,
    },
    Missile_Barrage: {
        name: "Missile Barrage",
        propertyName: "Missile_Barrage",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/siege/Missile Barrage.png",
        cost: 2000,
        damageType: DAMAGE_TYPES.Siege,
        attackRange: 1200,
        targetType: "multiple",
        targetCount: 3,
        targetPreference: ARMOR_TYPES.Fortified,
        attackDamage: 100,
        dps: 100,
        cooldown: 1.0,
    },

    Chaos_Orb: {
        name: "Chaos Orb",
        propertyName: "Chaos_Orb",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/chaos/Chaos Orb.png",
        cost: 500,
        damageType: DAMAGE_TYPES.Chaos,
        attackRange: 900,
        targetType: "single",
        targetPreference: ARMOR_TYPES.Heavy,
        attackDamage: 75,
        dps: 75,
        cooldown: 1.0,
    },
    Chaos_Claw: {
        name: "Chaos Claw",
        propertyName: "Chaos_Claw",
        spellType: "Weapon",
        thumbnail: "/assets/images/spells/chaos/Chaos Claw.png",
        cost: 2000,
        damageType: DAMAGE_TYPES.Chaos,
        attackRange: 600,
        targetType: "Bounce(3)",
        BounceCount: 3,
        targetPreference: null,
        attackDamage: 75,
        dps: 150,
        cooldown: 0.5,
    },

    // Gold Upgrades
    Magic_Coin: {
        name: "Magic Coin",
        propertyName: "Magic_Coin",
        thumbnail: "/assets/images/spells/upgrades/Magic Coin.png",
        spellType: "Upgrade",
        upgradeType: "Gold",
        cost: 500,
        gold: 5,
        description: `Generates 5 gold per second.`,
    },
    Bounty_Hunter: {
        name: "Bounty Hunter",
        propertyName: "Bounty_Hunter",
        thumbnail: "/assets/images/spells/upgrades/Bounty Hunter.png",
        spellType: "Upgrade",
        upgradeType: "Gold",
        cost: 2000,
        effect: 0.5, // 50% additional gold
        description: `All future spawning enemies grant 50% additional gold when killed.`,
    },
    Transmute: {
        name: "Transmute",
        propertyName: "Transmute",
        thumbnail: "/assets/images/spells/upgrades/Transmute.png",
        spellType: "Upgrade",
        upgradeType: "Gold",
        cost: 5000,
        description: `All future spawning enemies grant 50% additional gold when killed. All future spawning enemies have a 5% chance to grant +200% bounty when killed.`,
    },
    "Philosopher's Stone": {
        name: "Philosopher's Stone",
        propertyName: "Philosopher_Stone",
        thumbnail: "/assets/images/spells/upgrades/Philosopher's Stone.png",
        spellType: "Upgrade",
        upgradeType: "Gold",
        cost: 2000,
        sacrifiHealth: 1000,
        gold: 2000,
        description: `Sacrifice 100 health generation to immediately gain 5000 gold.`,
    },
    Cursed_Treasure: {
        name: "Cursed Treasure",
        propertyName: "Cursed_Treasure",
        thumbnail: "/assets/images/spells/upgrades/Cursed Treasure.png",
        spellType: "Upgrade",
        upgradeType: "Gold",
        cost: 5000,
        sacrifiHealth: 100,
        gold: 5000,
        description: `Sacrifice 1000 maximum health to immediately gain 2000 gold.`,
    },
    Underground_Gold_Mine: {
        name: "Underground Gold Mine",
        propertyName: "Underground_Gold_Mine",
        thumbnail: "/assets/images/spells/upgrades/Underground Gold Mine.png",
        spellType: "Upgrade",
        upgradeType: "Gold",
        cost: 2000,
        gold: 10,
        description: `Generates 10 gold per second. Increases all gold generated by Magic Coins, Gold Mines, Philosopher's Stones and Cursed Treasures by 10%.`,
    },
    Gems_of_Power: {
        name: "Gems of Power",
        propertyName: "Gems_of_Power",
        thumbnail: "/assets/images/spells/upgrades/Gems of Power.png",
        spellType: "Upgrade",
        upgradeType: "Gold",
        cost: 2000,
        chargeCount: 3,
        description: `The next 500 Gold (Common) Upgrade you buy is granted 3 additional times. (1 less additional Upgrade per round if you don't use it right away)`,
    },
};