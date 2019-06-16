<svelte:window on:keydown={handleKeydown}/>
<script>
  export let move;

  const keyCodesMap = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
  }

  function handleKeydown(event) {
    const modifiers = 
      event.altKey || 
      event.ctrlKey || 
      event.metaKey ||
      event.shiftKey;

    const key = keyCodesMap[event.keyCode];

    if (!modifiers && key) {
      move(key);
    }
  }
</script>

