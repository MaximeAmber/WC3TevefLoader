import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { grey } from '@mui/material/colors';
import { evoItems } from './items';
import ItemCard from './ItemCard';
import { iconFromId } from '../../icons/icons';

export const EvoItemRenderer: FC<{id?: string}> = ({ id }) => {
  if (!id) {
    return (
      <Avatar sx={{ bgcolor: grey[800] }} variant="rounded">
        {" "}
      </Avatar>
    )
  }
  if (!evoItems.hasOwnProperty(id)) {
    return (
      <Tooltip sx={{ boxShadow: 3 }} title={id} placement="right-start">
        <Avatar
          sx={{ bgcolor: grey[500] }}
          variant="rounded">
          {id[0]}
        </Avatar>
      </Tooltip>
    )
  }
  return (
    <Tooltip sx={{ boxShadow: 3 }} title={<ItemCard item={evoItems[id]}/>} placement="right-start">
      <Avatar
        variant="rounded"
        src={iconFromId(evoItems[id].icon)}
      />
    </Tooltip>
  )
}
