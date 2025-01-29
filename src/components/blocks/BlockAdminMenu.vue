<script lang="ts" setup>
// Компоненты
import BlockAdminMenuLink from '@/components/blocks/BlockAdminMenuLink.vue';
import BlockAdminMenuDropdown from '@/components/blocks/BlockAdminMenuDropdown.vue';
// Типы
import { TypeMenuList } from '@/types/typesAdminMenu'

type TypeProps = {
  title: string,
  link?: string, 
  list?: TypeMenuList[],
}

const props = defineProps<TypeProps>()
</script>
<template>
  <BlockAdminMenuLink 
    v-if="link"
    :title="title"
    :link="link"
    :level="1"
  >
    <template v-slot:icon>
      <slot name="icon"></slot>
    </template>
  </BlockAdminMenuLink>
  <BlockAdminMenuDropdown 
    v-if="list"
    :title="title"
    :list="list"
    :level="1"
  >
    <template v-slot:icon>
      <slot name="icon"></slot>
    </template>
  </BlockAdminMenuDropdown>
</template>