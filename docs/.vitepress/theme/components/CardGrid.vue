<script setup lang="ts">
defineProps<{
  cols: number;
}>();
</script>

<template>
  <div :class="`grid gap-6 my-6 grid-cols-1 md:grid-cols-${cols}`">
    <slot />
  </div>
</template>
