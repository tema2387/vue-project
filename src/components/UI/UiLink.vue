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
    class="link"
  >
    <slot></slot>
  </a>
</template>