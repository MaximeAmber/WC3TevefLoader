import { EvoItemRestictions } from '../restrictions';
import { EvoRarity } from '../rarity';
import { Icon } from '../../../icons/icons';
import { weaponsMasterItems } from './forging/weaponsMaster';
import { armorsmithItems } from './merchants/armorsmith';
import { icyHighlandItems } from './easy/icyHighland';
import { hell4Items } from './hell/hell4';
import { imp1Items } from './imp/imp1';
import { angelCloudsItems } from './forging/angelClouds';
import { weaponsDealerItems } from './merchants/weaponsDealer';
import { imp2Items } from './imp/imp2';
import { magicWizardItems } from './forging/magicWizard';
import { ancientSoulItems } from './forging/ancientSoul';
import { bobBuilderItems } from './forging/bobBuilder';
import { hell3Items } from './hell/hell3';
import { hell2Items } from './hell/hell2';
import { hell1Items } from './hell/hell1';

export interface EvoItem {
  id: string;
  restriction: EvoItemRestictions;
  rarity: EvoRarity;
  icon: Icon;
  description?: string;
  effects: string[];
  source: string;
  sourceShort?: string;
  crafting?: string[];
}

export const evoItems = Object.assign(
  {},
  // vendors
  weaponsDealerItems,
  armorsmithItems,

  weaponsMasterItems,
  ancientSoulItems,
  bobBuilderItems,
  magicWizardItems,
  angelCloudsItems,
  //
  icyHighlandItems,
  hell1Items,
  hell2Items,
  hell3Items,
  hell4Items,
  imp1Items,
  imp2Items,
);
