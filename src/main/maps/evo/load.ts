import fs from 'fs/promises';
import classesList from "./classes.json";

export const loadTevefData = async (path: string) => {
  const potentialClasses = await fs.readdir(path);
  const classes = potentialClasses.filter(el => classesList.includes(el));

  const data = await Promise.all(classes.map(cl => loadClass(path + "\\" + cl)));

  return data;
}

const loadClass = async (path: string) => {
  const classDir = await fs.readdir(path);
  if (classDir.length == 0 || classDir[classDir.length - 1].indexOf("Level") == -1) {
    return null;
  }

  const classFile = await fs.readFile(path + "\\" + classDir[classDir.length - 1], 'utf-8');

  return parseClassFile(classFile);
}

interface Class {
  hero: string;
  gold: string;
  level?: string;
  powerShards: string;
  inventory?: Loadout;
  stashes?: Loadout[];
  code: string;
}

type Loadout = string[];

const parseClassFile = (str: string): Class => {
  return {
    hero: extractKey(str,"Hero: ", "\""),
    gold: extractKey(str,"Gold: ", "\""),
    powerShards: extractKey(str,"Shard: ", "\""),
    code: extractKey(str,"\"-l ", "\""),
    inventory: [...Array(6)].map((_, index) => {
      return extractItem(str, `"Item ${index + 1}: `).trim()
    }),
    stashes: [...Array(6)].map((_, stashIndex) => {
      return [...Array(6)].map((_, index) => {
        return extractItem(str, `"Stash${stashIndex + 1} Item ${index + 1}: `).trim()
      })
    })
  }
}

const extractKey = (str: string, key: string, end = "\""): string => {
  if (str.indexOf(key) == -1 || str.indexOf(end) == -1) {
    return "";
  }
  return str.slice(str.indexOf(key) + key.length, str.indexOf(end, str.indexOf(key) + 1));
}

const extractItem = (str: string, key: string, end = "\" )"): string => {
  if (str.indexOf(key) == -1 || str.indexOf(end) == -1) {
    return "";
  }
  const item = str.slice(str.indexOf(key) + key.length + 10, str.indexOf(end, str.indexOf(key) + 1)).trim();

  if (item.endsWith("|r")) {
    return item.slice(0, item.length - 2);
  }

  return item;
}
