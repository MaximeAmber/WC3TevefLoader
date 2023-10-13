import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const armorsmithItems: { [id:string]: EvoItem } = {
  // Armorsmith
  "Leather Armor": {
    id: "Leather Armor",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.COMMON,
    icon: "BTNLeatherUpgradeOne",
    description: "This cheap leather armor was made for all kinds of people; mainly townsfolk who seek protection from muggers. Its protection is minimal at best.",
    effects: [
      "+4 Armor"
    ],
    source: "Armorsmith",
  },
  "Lucky Amulet": {
    id: "Lucky Amulet",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.COMMON,
    icon: "BTNAmulet",
    description: "This amulet is like a good-luck non-clover charm, able to grant its user lots and lots of good luck... actually it doesn't.",
    effects: [
      "+150 Health"
    ],
    source: "Armorsmith",
  },
  "Plated Shield": {
    id: "Plated Shield",
    restriction: EvoItemRestictions.SWORDSMAN,
    rarity: EvoRarity.COMMON,
    icon: "BTNHumanArmorUpOne",
    description: "This basic plated shield is a must for soldiers.",
    effects: [
      "+9 Armor"
    ],
    source: "Armorsmith",
  },
  "Stout Shield": {
    id: "Stout Shield",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.COMMON,
    icon: "BTNSteelArmor",
    description: "This stout shield provides minimal defence against attacks, but at least everyone can use it.",
    effects: [
      "+8 Armor"
    ],
    source: "Armorsmith",
  },
  "Circlet of Nobility": {
    id: "Circlet of Nobility",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.COMMON,
    icon: "BTNCirclet",
    description: "This circlet grants the wearer an increase in inner strength, as well as plain protection.",
    effects: [
      "+4 Armor",
      "+200 Health",
      "+200 Mana",
    ],
    source: "Armorsmith",
  },
  "Elven Armor": {
    id: "Elven Armor",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.COMMON,
    icon: "BTNMoonArmor",
    description: "This armor is designed for wealthy folks who to afford good defense without the know-how.",
    effects: [
      "+16 Armor"
    ],
    source: "Armorsmith",
  },
  "Superior Vizima Gauntlets": {
    id: "Superior Vizima Gauntlets",
    restriction: EvoItemRestictions.ALL_EXCEPT_INITIATE,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNGlove",
    description: "These gauntlets are very steady and well made, allowing for superior protection as well as easier thrusting of attacks.",
    effects: [
      "+30 Damage",
      "+15 Armor"
    ],
    source: "Armorsmith",
  },
  "Arcane Amulet": {
    id: "Arcane Amulet",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNSpellShieldAmulet",
    description: "This amulet only allows those with arcane knowledge to wear it, because those without might put their life at risk.",
    effects: [
      "+15 Intelligence",
      "+250 Mana",
      "+5 Mana Regen"
    ],
    source: "Armorsmith",
  },
}
