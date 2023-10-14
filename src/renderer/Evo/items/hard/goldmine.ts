
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const goldmineItems: { [id:string]: EvoItem } = {
  "Belt of Endurance": {
    id: "Belt of Endurance",
    restriction: EvoItemRestictions.SWORDSMAN,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNBelt",
    description: "",
    effects: [
      "+20 String",
    ],
    source: "Gold Mine",
  },
  "Boots of the Eagle": {
    id: "Boots of the Eagle",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNBoots",
    description: "",
    effects: [
     "+54 Agility"
    ],
    source: "Gold Mine",
  },
  "Bracer of the Bear": {
    id: "Bracer of the Bear",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNRunedBracers",
    description: "",
    effects: [
      "+10 Strength",
      "+12 Armor",
      "+300 Health",
    ],
    source: "Gold Mine",
  },
  "Firebrand": {
    id: "Firebrand",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.RARE,
    icon: "BTNAdvancedUnholyStrength",
    description: "",
    effects: [
      "+20 Armor",
      "+15 All stats"
    ],
    source: "Gold Mine",
  },
  "Helm of Valor": {
    id: "Helm of Valor",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: "BTNHelmutPurple",
    description: "",
    effects: [
      "+35 All stats",
      "+200 Health"
    ],
    source: "Gold Mine",

  },
  "Soul Wand": {
    id: "Soul Wand",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.RARE,
    icon: "BTNWandOfCyclone",
    description: "",
    effects: [
      "+55 Intelligence",
      "+15 Mana regen"
    ],
    source: "Gold Mine",

  },
  "VanCliffe's Armor": {
    id: "VanCliffe's Armor",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.RARE,
    icon: "BTNArmorGolem",
    description: "",
    effects: [
      "+38 Armor",
    ],
    source: "Gold Mine",

  },
  "Blood Diamond": {
    id: "Blood Diamond",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.EPIC,
    icon: "BTNPhilosophersStone",
    description: "",
    effects: [
      "+40 All stats"
    ],
    source: "Gold Mine",

  },
}
