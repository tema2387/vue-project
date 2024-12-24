<script lang="ts" setup>
type TypeProps = {
  link?: string,
  type?: string,
}

const props = withDefaults(defineProps<TypeProps>(), {
  link: '/',
});
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