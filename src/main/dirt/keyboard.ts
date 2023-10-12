import { Key, keyboard } from '@nut-tree/nut-js';

export const executeCommand = async (command: string) => {
  keyboard.config.autoDelayMs = 2;
  await keyboard.pressKey(Key.Enter);
  await keyboard.releaseKey(Key.Enter);
  await keyboard.type(command);
  await keyboard.pressKey(Key.Enter);
  await keyboard.releaseKey(Key.Enter);
};
