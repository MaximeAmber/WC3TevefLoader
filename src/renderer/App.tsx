import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider, Button, CssBaseline } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import CachedIcon from '@mui/icons-material/Cached';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Hello from './Hello';
import { Character } from './Evo/Character';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useCharacterContext } from '../context';


export default function App() {
  const { allClasses, loadClasses,} = useCharacterContext();

  return (
    <Router initialEntries={['/settings']}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline/>
          <Box component="div"
               sx={{
                 justifyContent: 'space-between',
                 flexDirection: 'column',
                 display: 'flex',
                 width: 220,
                 height: '100vh'
               }}>
            <Box>
              <Box sx={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography>EvoLoader alpha</Typography>
                <IconButton
                  onClick={loadClasses}>
                  <CachedIcon />
                </IconButton >
              </Box>
              <MenuList>
                {allClasses.map((el) => (
                  <MenuItem component={Link} to={`/character/${el.hero}`}  key={el.hero.split(" ").join("_")}>
                    <ListItemText>{el.hero}</ListItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </Box>
            <Box sx={{
              width: '100%',
            }}>
              <Divider />
              <MenuItem component={Link} to="/settings">
                Settings
              </MenuItem>
            </Box>
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
            <Routes>
              <Route path="/settings" element={<Hello />} />
              <Route path="/character/:id" element={<Character />}/>
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
