import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const puzzleItems: { [id:string]: EvoItem } = {
  "Boots of Speed": {
    id: "Boots of Speed",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNBootsOfSpeed",
    description: "",
    effects: [
      "+5 All stats",
      "+50 Movement speed",
    ],
    source: "Puzzle sanctuary",
  },
  "Nature Staff": {
    id: "Nature Staff",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: "BTNHornOfCenarius",
    description: "",
    effects: [
      "+150 Intelligence",
    ],
    source: "Puzzle sanctuary",
  },
  "Lunar Cuirass": {
    id: "Lunar Cuirass",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.RARE,
    icon: "BTNAdvancedMoonArmor",
    description: "",
    effects: [
      "+30 Armor",
      "+300 Health",
      "+300 Mana",
    ],
    source: "Puzzle sanctuary",
  },
  "Scroll of the Lich": {
    id: "Scroll of the Lich",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.RARE,
    icon: "BTNBansheeMaster",
    description: "",
    effects: [
      "+140 Intelligence",
      "+5 Mana regen",
    ],
    source: "Puzzle sanctuary",
  },
  "Sniper Rifle": {
    id: "Sniper Rifle",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.RARE,
    icon: "BTNDwarvenLongRifle",
    description: "",
    effects: [
      "+240 Damage",
    ],
    source: "Puzzle sanctuary",
  },
  "Chillrend": {
    id: "Chillrend",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.EPIC,
    icon: "BTNSpell_Holy_RighteousnessAura",
    description: "",
    effects: [
      "+250 Damage",
      "Passive: Slows the target by 15%.",
    ],
    source: "Puzzle sanctuary",
  },
  "Dusk's Legacy": {
    id: "Dusk's Legacy",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: "BTNStaffOfNegation",
    description: "",
    effects: [
      "+30 Armor",
      "+1000 Health",
    ],
    source: "Puzzle sanctuary",
  },
  "Ring of Melitele": {
    id: "Ring of Melitele",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: "BTNRingJadeFalcon",
    description: "",
    effects: [
      "+50 All stats",
      "+20 HP regen",
    ],
    source: "Puzzle sanctuary",
  },
}
