import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const centaurItems: { [id:string]: EvoItem } = {
  "Celestial Orb": {
    id: "Celestial Orb",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNUsedSoulGem",
    description: "",
    effects: [
      "+35 All stats",
      "+5 HP regen"
    ],
    source: "Centaur mountain",
  },
  "Enchanted Axe": {
    id: "Enchanted Axe",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNOrcMeleeUpTwo",
    description: "",
    effects: [
      "+100 Damage"
    ],
    source: "Centaur mountain",
  },
  "Cunning Edge": {
    id: "Cunning Edge",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: "BTNThoriumRanged",
    description: "",
    effects: [
      "+110 Damage"
    ],
    source: "Centaur mountain",
  },
  "Long Rifle": {
    id: "Long Rifle",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.RARE,
    icon: "BTNHumanMissileUpTwo",
    description: "",
    effects: [
      "+150 Damage"
    ],
    source: "Centaur mountain",
  },
  "Shield of the Avenger": {
    id: "Shield of the Avenger",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.RARE,
    icon: "BTNHumanArmorUpTwo",
    description: "",
    effects: [
      "+38 Armor"
    ],
    source: "Centaur mountain",
  },
  "Warchief's Pride": {
    id: "Warchief's Pride",
    restriction: EvoItemRestictions.ALL_EXCEPT_INITIATE,
    rarity: EvoRarity.RARE,
    icon: "BTNSpiritWalkerAdeptTraining",
    description: "",
    effects: [
      "+76 Damage"
    ],
    source: "Centaur mountain",
  },
  "Mythpowder Rifle": {
    id: "Mythpowder Rifle",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.EPIC,
    icon: "BTNHumanMissileUpThree",
    description: "",
    effects: [
      "+135 Damage",
      "+30 Agility",
    ],
    source: "Centaur mountain",
  },
"Sword of Blessed Flame": {
    id: "Sword of Blessed Flame",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.EPIC,
    icon: "BTNSpell_Holy_RetributionAura",
    description: "",
    effects: [
      "+200 Damage"
    ],
    source: "Centaur mountain",
  },
}
