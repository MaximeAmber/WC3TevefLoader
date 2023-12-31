import { Class } from '../../main/maps/evo/load';
import { FC } from 'react';
import { EvoStash } from './Stash';
import Grid from '@mui/material/Grid';
import { useLocation, useParams } from 'react-router-dom';
import { useCharacterContext } from '../../context';

export const Character: FC = ()  => {
  const { getCharacterById } = useCharacterContext();
  const { id } = useParams();

  const character = getCharacterById(id);
  if (!character) {
    return null;
  }

  return (
    <div>
      <h3>{character.hero} {character.level && ` - ${character.level} level`}</h3>
      <h5>Gold: {character.gold}</h5>
      <h5>PowerShards: {character.powerShards}</h5>
      <Grid container>
        <Grid item>
          <EvoStash itemIds={character.inventory} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[0]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[1]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[2]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[3]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[4]} />
        </Grid>
        <Grid item>
          <EvoStash itemIds={character.stashes[5]} />
        </Grid>
      </Grid>
    </div>
  );
}
