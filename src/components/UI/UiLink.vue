<script setup>
const props = defineProps({
  type: {
    type: String,
    default() {
      return 'inside';
    }
  },
  link: {
    type: String,
    default() {
      return '/';
    }
  },
})

</script>
<template>
  <a
    v-if="type === 'outside'"
    :href="props.link"
    class="link"
  >
    <slot></slot>
  </a>
  <RouterLink
    v-else 
    :to="props.link"
    class="link"
  >
    <slot></slot>
  </RouterLink>
</template>