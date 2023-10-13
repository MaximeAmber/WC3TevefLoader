import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const imp1Items: { [id:string]: EvoItem } = {
  "Atlantean's Tome": {
    id: "Atlantean's Tome",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNSpellBookBLS",
    description: "",
    effects: [
      "+900 Intelligence",
      "+5000 Mana"
    ],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "Demonic Aggression": {
    id: "Demonic Aggression",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNDemonicBoots2",
    description: "",
    effects: [
      "+300 All stats",
      "+20% Attack speed",
      "+90 Move speed",
      "Active: Teleport to any Inn. Cooldown 30s."
    ],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "Faith": {
    id: "Faith",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Weapon_Bow_08",
    description: "",
    effects: [
      "+4000 Damage",
      "+15% Attack speed",
    ],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "Neptune's Eye": {
    id: "Neptune's Eye",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTN_CR_wGem",
    description: "",
    effects: [
      "+11 000 Health",
      "+8250 Mana",
    ],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "The Grandfather": {
    id: "The Grandfather",
    restriction: EvoItemRestictions.SWORDSMAN,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Weapon_Halberd_10",
    description: "",
    effects: [
      "+1600 Damage",
      "+200 Armor",
    ],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "The Patriarch": {
    id: "The Patriarch",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Sword_25",
    description: "",
    effects: [
      "+4000 Damage",
      "Passive: 70% chance to deal 3x Physical Damage."
    ],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "Winter's Heart": {
    id: "Winter's Heart",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNheartofwinterGS",
    description: "",
    effects: [
      "+900 Intelligence",
      "+90 Mana Regen"
    ],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "Blessing of Darkness": {
    id: "Blessing of Darkness",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: "BTNAstral_Blessing",
    description: "The blessing of the corrupted Doppelganger.",
    effects: [],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
  "Mantle of Darkness": {
    id: "Mantle of Darkness",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: "BTNNazgulRider",
    description: "The mantle of Nazgul the Rider. It was infamous because of its unique mysterious characteristics that enables the wielder to blend with the shadow.",
    effects: [],
    source: "City of Illusions",
    sourceShort: "Imp 1",
  },
}
