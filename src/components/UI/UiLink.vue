<script setup>
// type can be 'outside' and 'inside'
const props = defineProps({
  type: {
    type: String,
    default() {
      return 'inside';
    }
  },
  href: {
    type: [String, Object],
    default() {
      return '/';
    }
  }
})
</script>
<template>
  <div class="link duration-200 hover:opacity-70">
    <router-link 
      v-if="type === 'inside'"  
      :to="href"
    >
      <slot></slot>
    </router-link>
    <a 
      v-if="type === 'outside'"
      :href="href"
    >
      <slot></slot>
    </a>
  </div>
</template>