<script>
  import { onMount } from 'svelte';
  import { tweened, spring } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let value = 2;
  export let position;
  export let prevPosition;
  export let merged = false;

  const TAIL_OFFSET = 112;
  const ANIMATION_OPTIONS = {
		stiffness: 0.55,
		damping: 0.8,
  };

  const X = position.x * TAIL_OFFSET;
  const Y = position.y * TAIL_OFFSET;
  const prevX = prevPosition ? prevPosition.x * TAIL_OFFSET : X;
  const prevY = prevPosition ? prevPosition.y * TAIL_OFFSET : Y;

  const moveX = spring(prevX, ANIMATION_OPTIONS);
  const moveY = spring(prevY, ANIMATION_OPTIONS);

  onMount(() => {
    moveX.set(X);
    moveY.set(Y);
  });
</script>

<div
  style=" top: {$moveY}px; left: {$moveX}px;"
  class="tail tail_value_{value} {
    (!prevPosition && !merged) ? 'tail_new' : ''
    } {
    merged ? 'tail_merged' : ''
  }"
>
  {value}
</div>

<style>
  .tail {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    color: #f8ffe5;
    font-weight: 800;
    font-size: 50px;
    user-select: none;
  }

  .tail_value_2 {
    background-color: #ffc43d;
  }

  .tail_value_4 {
    background: #ef476f;
  }

  .tail_value_8 {
    background: #1b9aaa;
  }

  .tail_value_16 {
    background: #06d6a0;
  }

  .tail_value_32 {
    background: #f37694;
  }

  .tail_value_64 {
    background: #22c2d6;
  }

  .tail_value_128 {
    background: #17f8be;
  }

  .tail_value_256 {
    background: #ffd470;
  }

  .tail_value_512 {
    background: #eb184a;
  }

  .tail_value_1024 {
    background: #14727e;
  }

  .tail_value_2048 {
    background: #05a47b;
  }

  .tail_new {
    animation: appear 200ms ease 200ms;
    animation-fill-mode: backwards;
  }

  .tail_merged {
    animation: pop 200ms ease 20ms;
    animation-fill-mode: backwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pop {
    0% {
      transform: scale(0);
    }

    70% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

</style>