import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

window.electron.ipcRenderer.on('ipc', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});

