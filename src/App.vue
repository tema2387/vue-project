<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentComponent = computed(() => {
  return route.matched[0]?.components.default;
});

</script>
<template>
  <div class="app flex flex-col min-h-screen bg-paper-bg overflow-hidden text-text-primary text-15 relative">
    <component :is="currentComponent"></component>
  </div>
</template>