<script>
  export let gridSize;
  const board = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(null));
</script>

<div class="grid">
  {#each board as row}
    <div class="grid__row">
      {#each row as cell}
        <div class="grid__cell"/>
      {/each}
    </div>
  {/each}
</div>

<style>
  .grid {
    display: flex;
    flex-direction: column;
  }

  .grid__row {
    display: flex;
    margin-bottom: 12px;
  }

  .grid__row:last-child {
    margin-bottom: 0;
  }

  .grid__cell {
    width: 100px;
    height: 100px;
    margin-right: 12px;
    background: rgba(238, 228, 218, 0.35);
  }

  .grid__cell:last-child {
    margin-right: 0;
  }
</style>