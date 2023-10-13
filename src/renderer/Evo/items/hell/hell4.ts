import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const hell4Items: { [id:string]: EvoItem } = {
  // Hell 4
  "Black Hades": {
    id: "Black Hades",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNLeatherUpgradeThree",
    description: "The Black Hades is a powerful chaos armor forged by Hades himself, hence the name.",
    effects: [
      "+250 Armor"
    ],
    source: "Tristram",
    sourceShort: "h4",
  },
  "Doombringer": {
    id: "Doombringer",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNArcaniteRanged",
    description: "",
    effects: [
      "+3400 Damage",
      "+5000 Health"
    ],
    source: "Tristram",
    sourceShort: "h4",
  },
  "Eagle Eye": {
    id: "Eagle Eye",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Weapon_Bow_09",
    description: "",
    effects: [
      "+4200 Damage",
    ],
    source: "Tristram",
    sourceShort: "h4",
  },
  "Energy Wand": {
    id: "Energy Wand",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Wand_08",
    description: "",
    effects: [
      "+550 Intelligence",
      "Active: Restores 10% of Max Mana. Cooldown 15s."
    ],
    source: "Tristram",
    sourceShort: "h4",
  },
  "Hellmouth": {
    id: "Hellmouth",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNGhoulFrenzy",
    description: "",
    effects: [
      "+200 Armor",
      "+4400 Health"
    ],
    source: "Tristram",
    sourceShort: "h4",
  },
  "Phantom Dancer": {
    id: "Phantom Dancer",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNAAA_PhantomDancer",
    description: "",
    effects: [
      "+200 Armor",
      "+4400 Health"
    ],
    source: "Tristram",
    sourceShort: "h4",
  },
  "The Ark Royal": {
    id: "The Ark Royal",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNSoulSword",
    description: "",
    effects: [
      "+4000 Damage"
    ],
    source: "Tristram",
    sourceShort: "h4",
  },
  "Harbinger's Essence": {
    id: "Harbinger's Essence",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNEssenceDrain4",
    description: "Possessed by Doomsday himself, he is able to crush everyone with the power imbued in this essence.",
    effects: [],
    source: "Tristram",
    sourceShort: "h4",
  },
}
