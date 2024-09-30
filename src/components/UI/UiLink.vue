<script setup>
const props = defineProps({
  href: {
    type: [String, Object],
    default() {
      return '/';
    }
  }
})

</script>
<template>
  <a
    :href="href"
    class="link duration-200 hover:opacity-70"
  >
    <slot></slot>
  </a>
</template>