
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const hell2Items: { [id:string]: EvoItem } = {
  // Hell 3
  "Duriel's Shell": {
    id: "Duriel's Shell",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: "BTNAdvancedReinforcedHides",
    description: "",
    effects: [
      "150 Armor",
    ],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
  "Megaton Blade": {
    id: "Megaton Blade",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.EPIC,
    icon: "BTNNagaWeaponUp2",
    description: "",
    effects: [
      "+2350 Damage",
      "Passive: 60% chance to deal 3x Physical Damage."
    ],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
  "Tome of the Unlife": {
    id: "Tome of the Unlife",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.EPIC,
    icon: "BTNBookOfTheDead",
    description: "",
    effects: [
      "+500 Intelligence",
      "+2500 Mana",
    ],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
  "Angel's Sanctuary": {
    id: "Angel's Sanctuary",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNArcaneShield",
    description: "",
    effects: [
      "150 Armor",
      "+1100 Health"
    ],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
  "Athena's Aim": {
    id: "Athena's Aim",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Weapon_Rifle_05",
    description: "",
    effects: [
      "+2600 Damage",
    ],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
  "Brightstar": {
    id: "Brightstar",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNShuriken3",
    description: "",
    effects: [
      "+525 Agility",
      "+5% Cooldown reduction"
    ],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
  "Dawn's Legacy": {
    id: "Dawn's Legacy",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNTimeSabres",
    description: "",
    effects: [
      "+2400 Damage",
      "+4400 Health"
    ],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
  "Cursed Artifact": {
    id: "Cursed Artifact",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNBoneChimes",
    description: "",
    effects: [],
    source: "Abyssal Labyrinth",
    sourceShort: "h2",
  },
}
