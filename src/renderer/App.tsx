import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider, Button, CssBaseline } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';

import Hello from './Hello';
import { useEffect, useState } from 'react';
import { Character } from './Evo/Character';
import { Class } from '../main/maps/evo/load';


export default function App() {
  const [allClasses, setAllClasses] = useState<Class[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Class | null>(null);

  const loadClasses = () => {
    window.electron.ipcRenderer.sendMessage('ipc');
  }
  const classSelect = (hero: string) => {
    const cl = allClasses.find(el => el.hero == hero);
    if (cl) {
      setCurrentCharacter(cl);
    }
  }

  const onLoadClick = () => {
    if (currentCharacter && currentCharacter.code) {
      window.electron.ipcRenderer.sendMessage(
        'load',
        [
          '-rp',
          '-lc',
          currentCharacter.code.slice(0, currentCharacter.code.length / 2),
          currentCharacter.code.slice(currentCharacter.code.length / 2, currentCharacter.code.length),
          '-le',
          '-woff',
          '-c',
          'MONKE TOGETHER STRONK'
        ]);
    }
  }

  useEffect(() => {
    window.electron.ipcRenderer.on('ipc', (arg) => {
      // @ts-ignore
      setAllClasses(arg);
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <Box component="div"
             sx={{
               width: 200
             }}>
          <Button variant="outlined" onClick={loadClasses}>Load</Button>
          <Button variant="outlined">Settings</Button>
          <MenuList>
            {allClasses.map((el) => (
              <MenuItem onClick={() => classSelect(el.hero)} key={el.hero.split(" ").join("_")}>
                <ListItemText>{el.hero}</ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
        <Box component="main"
             sx={{
                backgroundColor: theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                paddingLeft: '20px'
             }}
          >
          <Router>
            <Routes>
              <Route path="/settings" element={<Hello />} />
              <Route path="/" element={<Character character={currentCharacter}/>}/>
            </Routes>
            {currentCharacter && (<Button onClick={onLoadClick}>Load character</Button>)}
          </Router>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
