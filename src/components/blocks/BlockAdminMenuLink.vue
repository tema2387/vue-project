<script lang="ts" setup>
import { ref, inject } from 'vue';
import { useRoute } from 'vue-router';

type TypeProps = {
  title: string,
  link: string, 
  level: number,
}

const props = defineProps<TypeProps>();
const route = useRoute();

const paddingLevel = ref<number>(22);

for(let i = 3; i <= props.level; i++) {
  paddingLevel.value += 10;
}

const menuHidden = inject('menuHidden');
</script>
<template>
  <UiLink 
    :link="link"
    class="admin-menu-link flex min-h-[38px] max-w-[264px] pr-[14px] py-[8px] items-center hover:bg-action-selected gap-[8px] rounded-br-full rounded-tr-full"
    :class="[menuHidden ? 'mr-[0px]' : 'mr-[16px]', { 'bg-link-active hover:bg-link-active': link === route.path }]"
    :style="{ 'padding-left': `${paddingLevel + 'px'}` }"
  >
    <div 
      class="admin-menu-link__icon"
      :class="{ 'text-white': link === route.path }"
      >
        <slot name="icon"></slot>
    </div>
    <div 
      v-show="!menuHidden" 
      class="admin-menu-link__title flex-grow truncate"
      :class="{ 'text-white': link === route.path }"
    >
        {{ title }}
      </div>
  </UiLink>
</template>