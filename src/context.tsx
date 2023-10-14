import { Class } from './main/maps/evo/load';
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface CharacterContext {
  allClasses: Class[];
  setAllClasses: (classes: Class[]) => void;
  onLoadClick: (character: Class) => void;
  loadClasses: () => void;
  getCharacterById: (id?: string) => Class | undefined;
}
export const CharacterContext = createContext({} as CharacterContext);
export const CharacterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [allClasses, setAllClasses] = useState<Class[]>([]);

  const loadClasses = () => {
    window.electron.ipcRenderer.sendMessage('ipc');
  }
  const getCharacterById = (id?: string) => {
    if (!id) {
      return undefined;
    }
    return allClasses.find((character) => character.hero === id);
  }
  const onLoadClick = (character: Class) => {
    if (character && character.code) {
      window.electron.ipcRenderer.sendMessage(
        'load',
        [
          '-rp',
          '-lc',
          character.code.slice(0, character.code.length / 2),
          character.code.slice(character.code.length / 2, character.code.length),
          '-le',
          '-woff',
          '-c',
          'MONKE TOGETHER STRONK'
        ]);
    }
  }
  const value = { allClasses, setAllClasses, onLoadClick, loadClasses, getCharacterById };
  useEffect(() => {
    window.electron.ipcRenderer.on('ipc', (arg) => {
      // @ts-ignore
      setAllClasses(arg);
    });
  }, []);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}
export const useCharacterContext = () => useContext(CharacterContext);
