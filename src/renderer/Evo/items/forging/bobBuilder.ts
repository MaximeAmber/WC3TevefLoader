import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const bobBuilderItems: { [id:string]: EvoItem } = {
  "Ocean Cuirass": {
    id: "Ocean Cuirass",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.FORGED,
    icon: "BTNSea_Heavy_Armor",
    description: "",
    effects: [
      "+50 Armor",
      "+1650 Health",
      "+1250 Mana"
    ],
    crafting: [
      "Lunar Cuirass",
      "Rare Armor Piece",
      "Ocean Fragment",
    ],
    source: "Bob the Builder",
  },
  "Hades's Artifact": {
    id: "Hades's Artifact",
    restriction: EvoItemRestictions.ALL_EXCEPT_INITIATE,
    rarity: EvoRarity.FORGED,
    icon: "BTNArcaniteArmor",
    description: "",
    effects: [
      "+280 All stats"
    ],
    crafting: [
      "Ultra Armor Piece",
      "Mega Armor Piece",
      "Rare Armor Piece",
      "Dull Armor Piece",
      "Ruby",
    ],
    source: "Bob the Builder",
  },
  "Tremor": {
    id: "Tremor",
    restriction: EvoItemRestictions.INQUISITOR,
    rarity: EvoRarity.FORGED,
    icon: "BTNStoneShield",
    description: "",
    effects: [
      "+150 Armor",
      "+3300 Mana",
      "+10% Cooldown reduction",
      "Passive: Provides 25 Armor to all allies within 1000 AOE",
    ],
    crafting: [
      "Mega Armor Piece",
      "Ultra Armor Piece",
      "Duriel's Shell",
      "Diabolic Orb",
      "Sealed Demise",
      "Diamond",
    ],
    source: "Bob the Builder",
  },
}
