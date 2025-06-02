<script lang="ts" setup>
import { ref, inject} from 'vue';
// Иконки
import ArrowRightSIcon from '@/components/UI/svg/ArrowRightSIcon.vue';
import CircleIcon from '@/components/UI/svg/CircleIcon.vue';
// Компоненты
import BlockAdminMenuLink from '@/components/blocks/BlockAdminMenuLink.vue';
import BlockAdminMenuDropdown from '@/components/blocks/BlockAdminMenuDropdown.vue';
// Типы
import { TypeMenuList } from '@/types/typesAdminMenu'

type TypeProps = {
  title: string,
  list: TypeMenuList[],
  level: number,
}

const props = defineProps<TypeProps>()

const menuHidden = inject('menuHidden');

const menuOpened = ref<boolean>(false);
const menuList = ref<HTMLElement | null>(null);
const paddingLevel = ref<number>(22);

for(let i = 3; i <= props.level; i++) {
  paddingLevel.value += 10;
}

function toggleMenu(): void {
  menuOpened.value = !menuOpened.value;
}
</script>
<template>
  <div class="admin-menu-dropdown">
    <div
      @click="toggleMenu" 
      class="admin-menu-dropdown flex pr-[14px] max-w-[264px] max-sm:max-w-full min-h-[38px] hover:bg-action-selected items-center gap-[8px] cursor-pointer rounded-br-full rounded-tr-full"
      :class="[menuHidden ? 'mr-[0px]' : 'mr-[16px]', { 'bg-action-selected': menuOpened }]"
      :style="{ 'padding-left': `${paddingLevel + 'px'}` }"
    >
      <div class="admin-menu-dropdown__icon">
        <slot name="icon"></slot>
      </div>
      <div v-show="!menuHidden" class="admin-menu-dropdown__title flex-grow truncate">{{ title }}</div>
      <ArrowRightSIcon 
        v-show="list && !menuHidden"
        class="flex-shrink-0"
        :class="{ 'rotate-90': menuOpened }"
      />
    </div>
    <div
      class="duration-200 ease-in-out overflow-hidden grid"
      :class="[ menuOpened && !menuHidden ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]' ]"
    >
      <ul
        ref="menuList"
        class="admin-nav-menu__list flex flex-col gap-[8px] overflow-hidden"
      >
        <li 
          v-for="(item, index) in list"
          :key="index" 
          class="admin-nav-menu__item"
          :class="{ 'mt-[8px]': index === 0 }"
        >
          <BlockAdminMenuLink 
            v-if="item.link"
            :title="item.title"
            :link="item.link"
            :level="level + 1"
          >
            <template v-slot:icon>
              <CircleIcon />
            </template>
          </BlockAdminMenuLink>
          <BlockAdminMenuDropdown
            v-if="item.list" 
            :title="item.title"
            :list="item.list"
            :level="level + 1"
          >
            <template v-slot:icon>
              <CircleIcon />
            </template>
          </BlockAdminMenuDropdown>
        </li>
      </ul>
    </div>
  </div>
</template>