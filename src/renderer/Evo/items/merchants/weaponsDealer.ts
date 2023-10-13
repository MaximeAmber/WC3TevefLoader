import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const weaponsDealerItems: { [id:string]: EvoItem } = {
  // Weapons dealer
  "Fine Sword": {
    id: "Fine Sword",
    restriction: EvoItemRestictions.SW_THIEF,
    rarity: EvoRarity.COMMON,
    icon: "BTNSteelMelee",
    description: "Fine blade.",
    effects: [
      "+10 Damage"
    ],
    source: "Weapons Dealer",
  },
  "Staff": {
    id: "Staff",
    restriction: EvoItemRestictions.INI_D_ACO,
    rarity: EvoRarity.COMMON,
    icon: "BTNAlleriaFlute",
    description: "Ordinary staff.",
    effects: [
      "+6 Damage"
    ],
    source: "Weapons Dealer",
  },
  "Dull Warp Blade": {
    id: "Dull Warp Blade",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.COMMON,
    icon: "BTNAlleriaFlute",
    description: "This dull warp blade has been reused again and again, finally wearing out its useful life. Still, it is capable of inflicting great damage if its user is skilled.",
    effects: [
      "+16 Damage"
    ],
    source: "Weapons Dealer",
  },
  "Sharpened Glaive": {
    id: "Sharpened Glaive",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.COMMON,
    icon: "BTNUpgradeMoonGlaive",
    description: "This dull warp blade has been reused again and again, finally wearing out its useful life. Still, it is capable of inflicting great damage if its user is skilled.",
    effects: [
      "+35 Damage"
    ],
    source: "Weapons Dealer",
  },
  "Slicer": {
    id: "Slicer",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.COMMON,
    icon: "BTNSteelRanged",
    description: "This weapon is sharp and looks ready to claim the lives of those it pierces.",
    effects: [
      "+40 Damage"
    ],
    source: "Weapons Dealer",
  },
  "Vorpal Blade": {
    id: "Vorpal Blade",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.COMMON,
    icon: "BTNVorpalBlades",
    description: "A wicked weapon used by ninjas and thieves when they hunt their prey.",
    effects: [
      "+50 Damage"
    ],
    source: "Weapons Dealer",
  },
  "Elder Rod": {
    id: "Elder Rod",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNStaffOfSilence",
    description: "This powerful rod was made from the finest wood, and empowered by magic to grant it a seemingly regenerative power.",
    effects: [
      "+400 Mana",
      "+5 Mana Regen"
    ],
    source: "Weapons Dealer",
  },
  "Claws of Striking": {
    id: "Claws of Striking",
    restriction: EvoItemRestictions.SW_THIEF_WH,
    rarity: EvoRarity.UNCOMMON,
    icon: "BTNShamanAdept",
    description: "This clas is crafted in such a way that the wearer can thrust his attacks effectively.",
    effects: [
      "+64 Damage"
    ],
    source: "Weapons Dealer",
  },
}
