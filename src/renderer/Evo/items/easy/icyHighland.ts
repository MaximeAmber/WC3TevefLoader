import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const icyHighlandItems: { [id:string]: EvoItem } = {
  // Icy Highland
  "Sharp Claw": {
    id: "Sharp Claw",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.COMMON,
    icon: "BTNClawsOfAttack",
    description: "",
    effects: [
      "+15 Damage"
    ],
    source: "Icy Highland",
  },
  "Blackpowder Musket": {
    id: "Blackpowder Musket",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNHumanMissileUpOne",
    description: "",
    effects: [
      "+22 Damage"
    ],
    source: "Icy Highland",
  },
  "Crystal Wand": {
    id: "Crystal Wand",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNPriestAdept",
    description: "",
    effects: [
      "+10 Damage",
      "+15 Intelligence"
    ],
    source: "Icy Highland",
  },
  "Elderwood Bow": {
    id: "Elderwood Bow",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNImprovedBows",
    description: "",
    effects: [
      "+15 Damage",
      "+6 Agility"
    ],
    source: "Icy Highland",
  },
  "Moon Armor": {
    id: "Moon Armor",
    restriction: EvoItemRestictions.ALL_EXCEPT_INITIATE,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNMoonArmor",
    description: "",
    effects: [
      "+11 Armor"
    ],
    source: "Icy Highland",
  },
  "Superior Wand": {
    id: "Superior Wand",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNWitchDoctorAdept",
    description: "",
    effects: [
      "+6 Damage",
      "+200 Mana"
    ],
    source: "Icy Highland",
  },
  "Frostfang": {
    id: "Frostfang",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.RARE,
    icon: "BTNThoriumMelee",
    description: "",
    effects: [
      "+40 Damage",
      "Passive: Frost attack. Slows the target by 15%."
    ],
    source: "Icy Highland",
  },
  "Frost Shield": {
    id: "Frost Shield",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: "BTNThoriumArmor",
    description: "",
    effects: [
      "+20 Armor"
    ],
    source: "Icy Highland",
  },
}
