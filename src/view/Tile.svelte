<script>
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';

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

<style lang="scss">
  .tail {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    color: #776e65;
    border-radius: 3px;
    font-weight: 800;
    font-size: 50px;
    user-select: none;

    &_value_2 {
      background: #eee4da;
      box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
    }

    &_value_4 {
      background: #ede0c8;
      box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);
    }

    &_value_8 {
      background: #f2b179;
      color: #f9f6f2;
    }

    &_value_16 {
      background: #f59563;
      color: #f9f6f2;
    }

    &_value_32 {
      background: #f67c5f;
      color: #f9f6f2;
    }

    &_value_64 {
      background: #f65e3b;
      color: #f9f6f2;
    }

    &_value_128 {
      background: #edcf72;
      box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286);
      color: #f9f6f2;
      font-size: 45px;
    }

    &_value_256 {
      background: #edcc61;
      box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048);
      color: #f9f6f2;
      font-size: 45px;
    }

    &_value_512 {
      background: #edc850;
      box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381);
      color: #f9f6f2;
      font-size: 45px;
    }

    &_value_1024 {
      background: #edc53f;
      box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571);
      color: #f9f6f2;
      font-size: 35px;
    }

    &_value_2048 {
      background: #edc22e;
      box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);
      color: #f9f6f2;
      font-size: 35px;
    }

    &_value_super {
      background: #3c3a32;
      color: #f9f6f2;
      font-size: 30px;
    }

    &_new {
      animation: appear 200ms ease 200ms;
      animation-fill-mode: backwards;
    }

    &_merged {
      animation: pop 200ms ease 20ms;
      animation-fill-mode: backwards;
    }
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