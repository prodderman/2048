<script>
  import Tile from './Tile.svelte';
  import Grid from './Grid.svelte';
  export let tiles;
  export let gridSize;
</script>

<div class="board">
  <Grid {gridSize}/>
  <div class="tails">
    {#each $tiles as tile (tile)}
      {#if tile.mergedFrom}
        {#each tile.mergedFrom as mergedTile}
          <Tile
            value={mergedTile.value}
            position={mergedTile.position}
            prevPosition={mergedTile.prevPosition}
          />
        {/each}
        <Tile
          value={tile.value}
          position={tile.position}
          prevPosition={tile.prevPosition}
          merged
        />
      {:else}
        <Tile
          value={tile.value}
          position={tile.position}
          prevPosition={tile.prevPosition}
        />
      {/if}
    {/each}
  </div>
</div>

<style>
  .board {
    position: relative;
    padding: 12px;
    border-radius: 6px;
    background: #bbada0;
    touch-action: none;
  }

  .tails {
    position: absolute;
    top: 12px;
    right: 12px;
    bottom: 12px;
    left: 12px;
  }
</style>