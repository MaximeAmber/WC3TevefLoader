import { EvoItem } from '../index';
import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';

export const imp3Items: { [id:string]: EvoItem } = {
  "Demon Chanter": {
    id: "Demon Chanter",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: "DemonChanterIcon",
    description: "A mysterious relic used by succubi to summon demons of the past.",
    effects: [
      "+1200 Intelligence",
      "+5% Cooldown reduction",
      "Passive: Increase Magic Damage by 6.66%.",
    ],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
  "Devil Bow": {
    id: "Devil Bow",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: "DevilBowIcon",
    description: "Crafted by the demons of hell, this hellish relic is used by Satanic Archers to protect the Gate of Hell.",
    effects: [
      "+5200 Damage",
      "+20% BD",
    ],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
  "Smite": {
    id: "Smite",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "SmiteIcon",
    description: "A weapon from the depths of hell, purified by guardian angels to destroy all enemies at will.",
    effects: [
      "+5200 Damage",
      "Passive: Third basic attack unleashes a light nova that deals 6,000 Pure Damage to nearby enemies."
    ],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
  "Sun Orb": {
    id: "Sun Orb",
    restriction: EvoItemRestictions.ALL_CLASSES,
    rarity: EvoRarity.LEGENDARY,
    icon: "SunOrbIcon",
    description: "The orb which retains the power of the sun to grant the vitality for the wielder.",
    effects: [
      "+18 500 Health",
      "+9 250 Mana"
    ],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
  "Swiftblade": {
    id: "Swiftblade",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "SwiftbladeIcon",
    description: "Forged using the power of Eurus, the god of wind, the Swiftblade is infused with the flow of wind that allows the wielder to gain swiftness.",
    effects: [
      "+4500 Damage",
      "+25% Attack speed"
    ],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
"Wings of Hell": {
    id: "Wings of Hell",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "WingsOfHellIcon",
    description: "Cut from a devil gargorlye, these wings grant unmatched speed.",
    effects: [
      "+450 All stats",
      "+25% Attack speed",
      "+100 Movement speed",
      "Active: Teleport to any Inn. Cooldown 30s.",
    ],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
  "Fire Demon": {
    id: "Fire Demon",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.GODLY,
    icon: "FireDemonIcon",
    description: "Fiery Imp.",
    effects: [],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
  "Fire Lotus": {
    id: "Fire Lotus",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.GODLY,
    icon: "FireLotusIcon",
    description: "Burning Flower.",
    effects: [],
    source: "Punishment Chamber",
    sourceShort: "Imp 3",
  },
}
