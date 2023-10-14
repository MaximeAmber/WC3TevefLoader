
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const hell1Items: { [id:string]: EvoItem } = {
  // Hell 1
  "Atma's Ring": {
    id: "Atma's Ring",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: "BTNINV_Jewelry_Ring_10",
    description: "",
    effects: [
      "+25% Spell resist",
    ],
    source: "Oblivion",
    sourceShort: "h1",
  },
  "Battle Gauntlets": {
    id: "Battle Gauntlets",
    restriction: EvoItemRestictions.ALL_EXCEPT_INITIATE,
    rarity: EvoRarity.EPIC,
    icon: "BTNGauntletsOfOgrePower",
    description: "",
    effects: [
      "+800 Damage",
      "+75 Armor"
    ],
    source: "Oblivion",
    sourceShort: "h1",
  },
  "Infernostride": {
    id: "Infernostride",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: "BTNWirtsLeg",
    description: "",
    effects: [
      "+140 All stats",
      "+70 Move speed",
    ],
    source: "Oblivion",
    sourceShort: "h1",
  },
  "The Pendant of Nagre": {
    id: "The Pendant of Nagre",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.EPIC,
    icon: "BTNPendantOfMana",
    description: "",
    effects: [
      "+400 Intelligence",
      "+1650 Mana"
    ],
    source: "Oblivion",
    sourceShort: "h1",
  },
  "Double-barrel Rifle": {
    id: "Double-barrel Rifle",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Weapon_Rifle_08",
    description: "",
    effects: [
      "+2600 Damage",
    ],
    source: "Oblivion",
    sourceShort: "h1",
  },
  "The Heart of Evo": {
    id: "The Heart of Evo",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNHeartOfAszune",
    description: "",
    effects: [
      "+5500 Health",
      "+4125 Mana"
    ],
    source: "Oblivion",
    sourceShort: "h1",
  },
  "The Psionic Razor": {
    id: "The Psionic Razor",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNNagaWeaponUp3",
    description: "",
    effects: [
      "+2000 Damage",
    ],
    source: "Oblivion",
    sourceShort: "h1",
  },
  "Diabolic Orb": {
    id: "Diabolic Orb",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNOrbofSlowness",
    description: "",
    effects: [],
    source: "Oblivion",
    sourceShort: "h1",
  },
}
