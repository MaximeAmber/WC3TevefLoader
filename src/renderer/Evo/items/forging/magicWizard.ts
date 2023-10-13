import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const magicWizardItems: { [id:string]: EvoItem } = {
  "Bethrezen's Flame": {
    id: "Bethrezen's Flame",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: "BTNINV_Wand_06",
    description: "When Bethrezen, god of the minions of the damned, was fighting with Gallean, god of the elves, their climatic battle spewed forth a powerful wand, named Bethrezen's Flame because of his fiery power.",
    effects: [
      "+800 Intelligence",
    ],
    crafting: [
      "Ultra Weapon Piece",
      "Ultra Handle Piece",
      "Blood Fragment",
      "Ruby",
      "Cursed Artifact"
    ],
    source: "Magic Wizard",
  },
  "Horadric Staff": {
    id: "Horadric Staff",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: "BTNAdvancedMageStaff",
    description: "The Horadric Staff's most famed exploit was breaking into the Chamber of Tal'Rasha, its power incomprehensible to mere mortals.",
    effects: [
      "+400 Intelligence",
      "+40 HP Regen",
      "+25 MP Regen",
      "Active: Heals target for [6 500 + 5% Max HP] HP",
    ],
    crafting: [
      "Ultra Weapon Piece",
      "Mega Handle Piece",
      "Nature Fragement",
      "Emerald"
    ],
    source: "Magic Wizard",
  },
  "Scepter of Mastery": {
    id: "Scepter of Mastery",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.FORGED,
    icon: "BTNScepterOfMastery",
    description: "The staff used by high clerics to heal wounded warriors during the Demonic Invasion, turning the tides of battle by outliving the evil forces.",
    effects: [
      "+750 Intelligence",
      "+55 HP Regen",
      "+40 MP Regen",
      "+5% Cooldown reduction",
      "Active: Heals target for [9 000 + 7.5% Max HP] HP",
    ],
    crafting: [
      "Horadric Staff",
      "Ultra Weapon Piece",
      "Nature Fragment",
      "Emerald",
      "Sealed Demise",
      "Harbinger's Essence",
    ],
    source: "Magic Wizard",
  },
}
