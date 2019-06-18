<script>
	import Game from '../game';
  import Board from '../view/Board.svelte';
  import KeyboardManager from '../view/KeyboardManager.svelte';

  const gridSize = 4;
  const game = new Game(gridSize);
  const { tiles, move } = game;
</script>

<div>
  <Board {tiles} {gridSize} />
</div>

<KeyboardManager {move} />

<style>
  :global(html),
  :global(body) {
    height: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>