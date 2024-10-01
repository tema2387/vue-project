<script setup>
const props = defineProps({
  href: {
    type: String,
    default() {
      return '/';
    }
  }
})

</script>
<template>
  <a
    :href="props.href"
    class="link duration-200 hover:opacity-70"
  >
    <slot></slot>
  </a>
</template>