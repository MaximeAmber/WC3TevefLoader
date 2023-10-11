import { Key, keyboard } from '@nut-tree/nut-js';

export const executeCommand = async () => {
  keyboard.config.autoDelayMs = 0;
  await keyboard.pressKey(Key.Enter);
  await keyboard.releaseKey(Key.Enter);
  await keyboard.type('hello');
  await keyboard.pressKey(Key.Enter);
  await keyboard.releaseKey(Key.Enter);
};
