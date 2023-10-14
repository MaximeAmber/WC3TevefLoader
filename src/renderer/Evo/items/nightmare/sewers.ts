import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const sewersItems: { [id:string]: EvoItem } = {
  "Golden Arrows": {
    id: "Golden Arrows",
      restriction: EvoItemRestictions.ARCHER,
      rarity: EvoRarity.RARE,
      icon: "BTNAbility_Hunter_AimedShot",
      description: "",
      effects: [
      "+1400 Damage"
    ],
      source: "Forgotten Sewers",
  },
  "Necklace of Seven Souls": {
    id: "Necklace of Seven Souls",
      restriction: EvoItemRestictions.INT,
      rarity: EvoRarity.RARE,
      icon: "BTNNecklace",
      description: "",
      effects: [
        "+275 Intelligence",
        "+20 Mana regen"
    ],
      source: "Forgotten Sewers",
  },
  "Hexfire's Edge": {
    id: "Hexfire's Edge",
      restriction: EvoItemRestictions.MELEE_AGI,
      rarity: EvoRarity.EPIC,
      icon: "BTNAbility_BackStab",
      description: "",
      effects: [
        "+1400 Damage",
        "Passive: 40% chance to deal 3x Physical Damage."
    ],
      source: "Forgotten Sewers",
  },
  "Icecrown's Visage": {
    id: "Icecrown's Visage",
      restriction: EvoItemRestictions.MELEE,
      rarity: EvoRarity.EPIC,
      icon: "BTNRevenant",
      description: "",
      effects: [
        "+75 Armor",
        "+1100 Health"
    ],
      source: "Forgotten Sewers",
  },
  "Phoenix Stone": {
    id: "Phoenix Stone",
      restriction: EvoItemRestictions.ALL_CLASSES,
      rarity: EvoRarity.EPIC,
      icon: "BTNGMExchange",
      description: "",
      effects: [
        "+140 All stats"
    ],
      source: "Forgotten Sewers",
  },
  "Shield of Unending Flame": {
    id: "Shield of Unending Flame",
      restriction: EvoItemRestictions.SW_THIEF_WH,
      rarity: EvoRarity.EPIC,
      icon: "BTNSpell_Holy_BlessingOfProtection",
      description: "",
      effects: [
        "+140 All stats"
    ],
      source: "Forgotten Sewers",
  },
  "Staff of the Ages": {
    id: "Staff of the Ages",
      restriction: EvoItemRestictions.INT,
      rarity: EvoRarity.EPIC,
      icon: "BTNWandOfManaSteal",
      description: "",
      effects: [
        "+350 Intelligence"
    ],
      source: "Forgotten Sewers",
  },
    "Stone of Vsmir": {
    id: "Stone of Vsmir",
      restriction: EvoItemRestictions.MELEE_AGI,
      rarity: EvoRarity.EPIC,
      icon: "BTNPeriapt",
      description: "",
      effects: [
        "+1000 Damage",
        "+100 Agility"
    ],
      source: "Forgotten Sewers",
  },
    "Black Soul": {
    id: "Black Soul",
      restriction: EvoItemRestictions.FORGE,
      rarity: EvoRarity.EPIC,
      icon: "BTNOrbOfDarkness",
      description: "",
      effects: [],
      source: "Forgotten Sewers",
  },

}
