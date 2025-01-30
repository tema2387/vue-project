<script lang="ts" setup>
import AuthLayout from '@/layouts/AuthLayout.vue';
</script>
<template>
  <AuthLayout>
    <div class="under-maintenance-page">
      <div class="under-maintenance-page__title text-center flex flex-col items-center gap-[8px]">
        <h4>Under Maintenance! 🚧</h4>
        <div class="text-text-secondary">Sorry for the inconvenience but we're performing some maintenance at the moment</div>
      </div>
      <UiImage :src="'/img/under-maintenance-img.png'" :alt="'under-maintenance-img'" class="mt-[40px] w-[818px] aspect-[4/2.57]"></UiImage>
      <UiLink :src="'/'">
        <UiButton class="max-w-max mt-[40px] m-auto">Back Home</UiButton>
      </UiLink>
    </div>
  </AuthLayout>
</template>