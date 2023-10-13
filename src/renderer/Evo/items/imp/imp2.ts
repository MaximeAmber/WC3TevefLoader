import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';
import BTNKingArthas from '../../../../icons/evo/BTNKingArthas.png';
import BTNDark from '../../../../icons/evo/BTNDark Repulser.png';
import BTNSpiderFangDH from '../../../../icons/evo/BTNSpiderFangDH.png';

export const imp2Items: { [id:string]: EvoItem } = {
  "Atalanta's Speed": {
    id: "Atalanta's Speed",
    restriction: EvoItemRestictions.ARCHER,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Weapon_Crossbow_10",
    description: "",
    effects: [
      "+4000 Damage",
      "+400 Agility"
    ],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Blaze's Touch": {
    id: "Blaze's Touch",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNCleavingAttack",
    description: "",
    effects: [
      "+4800 Damage",
      "Passive: Deals 40% damage to the enemies around the target."
    ],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Dragon Steel": {
    id: "Dragon Steel",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNAdvancedCreatureCarapace",
    description: "",
    effects: [
      "+1000 Damage",
      "+275 Armor"
    ],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Hannah's Legend": {
    id: "Hannah's Legend",
    restriction: EvoItemRestictions.INT,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNINV_Wand_04",
    description: "",
    effects: [
      "+975 Intelligence",
      "+5000 Mana",
      "+5% Cooldown reduction",
      "Passive: Block a spell. Cooldown 30s."
    ],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Helm of Domination": {
    id: "Helm of Domination",
    restriction: EvoItemRestictions.SWORDSMAN,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNKingArthas",
    description: "",
    effects: [
      "+340 Armor",
    ],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Megaera's Edge": {
    id: "Megaera's Edge",
    restriction: EvoItemRestictions.MELEE,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNSpell_Holy_SealOfFury",
    description: "",
    effects: [
      "+5000 Damage",
      "Passive: Reduce enemy's AS by 8% and deals 8,000 Magic DPS."
    ],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "The Impaler": {
    id: "The Impaler",
    restriction: EvoItemRestictions.MELEE_AGI,
    rarity: EvoRarity.LEGENDARY,
    icon: "BTNDark",
    description: "",
    effects: [
      "+2000 Damage",
      "Passive: Second basic attack deals bonus 5,500 Pure Damage."
    ],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Blessing of Dragon": {
    id: "Blessing of Dragon",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: "BTNdeathwing",
    description: "",
    effects: [],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Dragon Egg": {
    id: "Dragon Egg",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: "BTNSorceressRuby",
    description: "",
    effects: [],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
  "Dragon Tooth": {
    id: "Dragon Tooth",
    restriction: EvoItemRestictions.FORGE,
    rarity: EvoRarity.GODLY,
    icon: "BTNSpiderFangDH",
    description: "",
    effects: [],
    source: "Dragon Fortress",
    sourceShort: "Imp 2",
  },
}
