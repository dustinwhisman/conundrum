export type BigNumber = 25 | 50 | 75 | 100;
export type SmallNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type GameState =
  | 'game-setup'
  | 'game-setting-target'
  | 'game-starting-soon'
  | 'game-in-progress'
  | 'game-ended';

export const bigNumbers: BigNumber[] = [25, 50, 75, 100];

export const smallNumbers: SmallNumber[] = [
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
];
