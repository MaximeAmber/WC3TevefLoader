import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const nagaItems: { [id:string]: EvoItem } = {
  "Death Reaver": {
    id: "Death Reaver",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: "BTNOrcMeleeUpThree",
    description: "",
    effects: [
      "+600 Damage",
      "+100 Strength"
    ],
    source: "Naga Ruins",
  },
  "Ghost Armor": {
    id: "Necklace of Seven Souls",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: "BTNCloakOfFlames",
    description: "",
    effects: [
     "+65 Armor"
    ],
    source: "Naga Ruins",
  },
  "Homunculus": {
    id: "Homunculus",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: "BTNBrilliance",
    description: "",
    effects: [
      "+250 Intelligence",
    ],
    source: "Naga Ruins",
  },
  "Silver Arrows": {
    id: "Silver Arrows",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.RARE,
    icon: "BTNMoonArrow",
    description: "",
    effects: [
      "+1000 Damage"
    ],
    source: "Naga Ruins",
  },
  "Staff of the Naga": {
    id: "Staff of the Naga",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: "BTNINV_Wand_09",
    description: "",
    effects: [
      "+200 Intelligence",
      "+1100 Health"
    ],
    source: "Naga Ruins",
  },
  "Synergy Blade": {
    id: "Synergy Blade",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.RARE,
    icon: "BTNMoonStone",
    description: "",
    effects: [
      "+700 Damage",
      "+75 Agility"
    ],
    source: "Naga Ruins",
  },
  "Frostbrand": {
    id: "Frostbrand",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.EPIC,
    icon: "BTNFrostSword",
    description: "",
    effects: [
      "+400 Damage",
      "Passive: Slows the target by 15%."
    ],
    source: "Naga Ruins",
  },
  "The Spirit Shroud": {
    id: "The Spirit Shroud",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: "BTNWindsCloak",
    description: "",
    effects: [
      "+50 All stats",
      "+20% Spell resist"
    ],
    source: "Naga Ruins",
  },
  "Hydra's Bane": {
    id: "Hydra's Bane",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.EPIC,
    icon: "BTNHydraWarStomp",
    description: "",
    effects: [],
    source: "Naga Ruins",
  },

}
