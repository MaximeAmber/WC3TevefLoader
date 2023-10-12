import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider, Button, Paper, CssBaseline } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { SxProps, Theme } from '@mui/system';
import Grid from '@mui/material/Grid';
import Hello from './Hello';
import { useEffect, useState } from 'react';
import { Character } from './Evo/Character';
import { Class } from '../main/maps/evo/load';

const styles: Record<string, SxProps<Theme>> = {
  paper: {
    paddingTop: '10px',
    height: '100vh',
  }
}

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
          '-le'
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
      <CssBaseline/>
      <Router>
        <Paper elevation={0} sx={styles.paper}>
        <Grid container>
          <Grid>
            <Grid container>
              <Grid>
                <Button variant="outlined" onClick={loadClasses}>Load</Button>
              </Grid>
              <Grid>
                <Button variant="outlined">Settings</Button>
              </Grid>
            </Grid>
            <MenuList>
              {allClasses.map((el) => (
                <MenuItem onClick={() => classSelect(el.hero)} key={el.hero.split(" ").join("_")}>
                  <ListItemText>{el.hero}</ListItemText>
                </MenuItem>
              ))}
            </MenuList>
          </Grid>
          <Grid>
            <Routes>
              <Route path="/settings" element={<Hello />} />
              <Route path="/" element={<Character character={currentCharacter}/>}/>
            </Routes>
            <Button onClick={onLoadClick}>Load character</Button>
          </Grid>
        </Grid>
        </Paper>
      </Router>
    </ThemeProvider>
  );
}
