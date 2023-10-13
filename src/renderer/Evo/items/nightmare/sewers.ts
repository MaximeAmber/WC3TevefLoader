import { EvoItemRestictions } from '../../restrictions';
import { EvoRarity } from '../../rarity';
import { EvoItem } from '../index';

export const sewersItems: { [id:string]: EvoItem } = {
  "Golden Arrows": {
    id: "Golden Arrows",
      restriction: EvoItemRestictions.ARCHER,
      rarity: EvoRarity.RARE,
      icon: "BTNHumanMissileUpOne",
      description: "",
      effects: [
      "+22 Damage"
    ],
      source: "Icy Highland",
  },
}
