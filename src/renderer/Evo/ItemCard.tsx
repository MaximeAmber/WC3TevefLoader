import { FC } from 'react';
import { EvoItem } from './items';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { evoRarity } from './rarity';
import { lightBlue } from '@mui/material/colors';
import { evoItemRestrictions } from './restrictions';

const ItemCard: FC<{item: EvoItem}> = (props) => {
  const { item } = props;
  const color = evoRarity[item.rarity].color;
  return (
    <>
      <Typography variant="subtitle2" color={color}>
        {item.id}
      </Typography>
      <Divider />
      <Typography variant="subtitle1" color={lightBlue[300]}>
        {evoItemRestrictions[item.restriction]}
      </Typography>
      {item.description && (
        <Typography variant="body2">
          {item.description}
        </Typography>
      )}
      {item.description && item.effects.length > 0 && <Divider />}
      {
        item.effects.map((effect, index) => (
          <Typography key={effect + index} variant="body1">
            {effect}
          </Typography>
        ))
      }
    </>
  );
};

export default ItemCard;
