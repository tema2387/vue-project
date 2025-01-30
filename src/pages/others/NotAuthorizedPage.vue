<script lang="ts" setup>
import AuthLayout from '@/layouts/AuthLayout.vue';
</script>
<template>
  <AuthLayout>
    <div class="not-found-page">
      <div class="not-found-page__title text-center flex flex-col items-center gap-[8px]">
        <div class="text-error-number">401</div>
        <h2>You are not authorized! 🔐</h2>
        <div class="text-text-secondary">You don’t have permission to access this page. Go Home!</div>
      </div>
      <UiImage :src="'/img/not-authorized-img.png'" :alt="'error-img'" class="mt-[40px] w-[784px] aspect-[4/2.68]"></UiImage>
      <UiLink :src="'/'">
        <UiButton class="max-w-max mt-[40px] m-auto">Back Home</UiButton>
      </UiLink>
    </div>
  </AuthLayout>
</template>