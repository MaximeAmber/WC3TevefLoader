import { useEffect, useState } from 'react';

export default function Hello() {
  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => window.electron.ipcRenderer.sendMessage('ipc', 'yo')}>click me</button>
    </div>
  );
}
