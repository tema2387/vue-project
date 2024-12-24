<script lang="ts" setup>
import { ref, computed, onMounted, inject} from 'vue';
// Иконки
import ArrowRightSIcon from '@/components/UI/svg/ArrowRightSIcon.vue';
import CircleIcon from '@/components/UI/svg/CircleIcon.vue';
// Компоненты
import BlockAdminNav from '@/components/blocks/BlockAdminNav.vue';

type TypeProps = {
  title: string,
  link?: string, 
  list?: TypeProps[],
  level?: number,
}

const props = withDefaults(defineProps<TypeProps>(), {
  level: 1,
})

const menuHidden = inject('menuHidden');

const menuOpened = ref<boolean>(true);
const menuList = ref<HTMLElement | null>(null);
const paddingLevel = ref<number>(22);

onMounted((): void => {
  menuOpened.value = false;
})

const menuListHeight = computed(() => {
  if(menuList.value) {
    return menuList.value.scrollHeight;
  }
})

for(let i = 3; i <= props.level; i++) {
  paddingLevel.value += 10;
}

function toggleMenu(): void {
  menuOpened.value = !menuOpened.value;
}
</script>
<template>
  <UiLink 
    v-if="link"
    :link="link"
    class="admin-nav-link flex min-h-[38px] max-w-[264px] pr-[14px] mr-[16px] py-[8px] items-center hover:bg-action-selected gap-[8px] rounded-br-full rounded-tr-full"
    :class="{ '!mr-[0px]': menuHidden }"
    :style="{ 'padding-left': `${paddingLevel + 'px'}` }"
  >
    <div class="admin-nav-link__icon">
        <slot name="icon"></slot>
    </div>
    <div v-if="!menuHidden" class="admin-nav-link__title flex-grow truncate">{{ title  }}</div>
  </UiLink>
  <div v-else class="admin-nav-menu">
    <div
      @click="toggleMenu" 
      class="admin-nav-menu__open flex pr-[14px] mr-[16px] max-w-[264px] min-h-[38px] py-[8px] hover:bg-action-selected items-center gap-[8px] cursor-pointer rounded-br-full rounded-tr-full"
      :class="{ 'bg-action-selected': menuOpened, '!mr-[0px]': menuHidden }"
      :style="{ 'padding-left': `${paddingLevel + 'px'}` }"
    >
      <div class="admin-nav-menu__icon">
        <slot name="icon"></slot>
      </div>
      <div v-if="!menuHidden" class="admin-nav-menu__title flex-grow truncate">{{ title  }}</div>
      <ArrowRightSIcon 
        v-if="list && !menuHidden"
        class="flex-shrink-0"
        :class="{ 'rotate-90': menuOpened }"
      />
    </div>
    <Transition name="admin-menu">
      <ul
        ref="menuList"
        :style="{ 'max-height': `${menuListHeight + 'px'}` }"
        v-show="menuOpened && !menuHidden" 
        class="admin-nav-menu__list overflow-hidden flex flex-col gap-[8px]"
      >
        <li 
          v-for="(item, index) in list"
          :key="index" 
          class="admin-nav-menu__item"
          :class="{ 'mt-[8px]': index === 0 }"
        >
          <BlockAdminNav
            :title="item.title"
            :list="item.list"
            :link="item.link" 
            :level="level + 1"
          > 
            <template v-slot:icon>
              <CircleIcon />
            </template>
          </BlockAdminNav>
        </li>
      </ul>
    </Transition>
  </div>
</template>