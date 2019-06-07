<script>
  import Cell from './Cell.svelte';
  export let grid;
</script>

<div class="board">
  {#each grid as i}
		<div class="row">
      {#each grid as j}
        <div class="cell"/>
      {/each}
    </div>
	{/each}
</div>

<style>
  .board {
    display: flex;
    flex-direction: column;
    touch-action: none;
    background: #bbada0;
    border-radius: 6px;
    padding: 12px;
  }

  .row {
    display: flex;
    margin-bottom: 12px;
  }

  .row:last-child {
    margin-bottom: 0;
  }

  .cell {
    width: 97px;
    height: 97px;
    margin-right: 12px;
    background: rgba(238, 228, 218, 0.35);
  }

  .cell:last-child {
    margin-right: 0;
  }
</style>