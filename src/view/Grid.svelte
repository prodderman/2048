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

<style lang="scss">
  .grid {
    display: flex;
    flex-direction: column;

    &__row {
      display: flex;
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__cell {
      margin-right: 12px;
      width: 100px;
      height: 100px;
      border-radius: 3px;
      background: rgba(238, 228, 218, 0.35);

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>