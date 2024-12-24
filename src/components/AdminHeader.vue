<script lang="ts" setup>
// Компонент
import UiInputText from '@/components/UI/UiInputText.vue';
// Иконки
import MoonClearIcon from '@/components/UI/svg/MoonClearIcon.vue';
import SunIcon from '@/components/UI/svg/SunIcon.vue';
// Модули
import { activeDarkTheme, changeTheme } from '@/modules/changeTheme';

const emit = defineEmits<{
  (e: 'clickOnBurger'):void
}>();
</script>
<template>
  <div class="admin-header h-[64px] gap-[20px] flex items-center">
    <div 
      @click.stop="emit('clickOnBurger');" 
      class="burger flex-shrink-0 cursor-pointer w-[20px] h-[16px] flex flex-col justify-between lg:hidden"
    >
        <span class="h-[2px] bg-text-primary rounded-md"></span>
        <span class="h-[2px] bg-text-primary rounded-md"></span>
        <span class="h-[2px] bg-text-primary rounded-md"></span>
    </div>
    <UiInputText
      :type="'outlined'" 
      :id="'admin-search'"
      :searchIcon="true" 
      :size="'md'"
      :label="'Search'"
      class="flex-grow"
    />
    <div class="admin-header__right">
      <UiButton 
        :type="'inline-text'" 
        class="flex items-center"
        @click="changeTheme"
      >
        <MoonClearIcon v-if="activeDarkTheme" />
        <SunIcon v-else />
      </UiButton>
    </div>
  </div>
</template>