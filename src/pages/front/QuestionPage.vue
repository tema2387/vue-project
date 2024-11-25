<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
  <div>Вопрос с ID: {{ route.params.id }}</div>
</template>