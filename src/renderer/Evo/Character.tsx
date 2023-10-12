import { Class } from '../../main/maps/evo/load';
import { FC } from 'react';

export const Character: FC<{character: Class | null}> = ({ character }) => {
  if (character == null) return null;

  return (
    <div>
      <h2>{character.hero}</h2>
      {character.level ?? <h3>{character.level}</h3>}
    </div>
  );
}
