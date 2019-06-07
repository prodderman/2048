<script>
	import { model } from '../model/model.js';
  import Board from '../view/Board.svelte';
</script>

<div>
  <Board grid={model.grid} />
</div>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html), :global(body) {
    font-size: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>