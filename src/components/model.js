import { writable } from 'svelte/store';

function createModel() {
  const grid = createGrid(4);
  const { subscribe, set, update } = writable(grid);
  return {
		subscribe,
	};
}

function createGrid(size) {
  const grid = [];
  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
}

export const model = createModel();