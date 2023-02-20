export type Vowel = 'a' | 'e' | 'i' | 'o' | 'u';
export type Consonant =
  | 'b'
  | 'c'
  | 'd'
  | 'f'
  | 'g'
  | 'h'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

export type Letter = {
  isInUse: boolean;
  letter: Consonant | Vowel;
};

export type GameState =
  | 'game-setup'
  | 'game-starting-soon'
  | 'game-in-progress'
  | 'game-ended';

export const vowels: Vowel[] = [
  ...Array(15).fill('a'),
  ...Array(21).fill('e'),
  ...Array(13).fill('i'),
  ...Array(13).fill('o'),
  ...Array(5).fill('u'),
];

export const consonants: Consonant[] = [
  ...Array(2).fill('b'),
  ...Array(3).fill('c'),
  ...Array(6).fill('d'),
  ...Array(2).fill('f'),
  ...Array(4).fill('g'),
  ...Array(2).fill('h'),
  ...Array(1).fill('j'),
  ...Array(1).fill('k'),
  ...Array(5).fill('l'),
  ...Array(4).fill('m'),
  ...Array(7).fill('n'),
  ...Array(4).fill('p'),
  ...Array(1).fill('q'),
  ...Array(9).fill('r'),
  ...Array(9).fill('s'),
  ...Array(9).fill('t'),
  ...Array(2).fill('v'),
  ...Array(2).fill('w'),
  ...Array(1).fill('x'),
  ...Array(1).fill('y'),
  ...Array(1).fill('z'),
];
