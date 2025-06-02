<script lang="ts" setup>
import { useRoute } from 'vue-router';
// Компоненты
import AdminLayout from '@/layouts/AdminLayout.vue';
// Блоки страниц админки
import AdminMain from '@/components/admin/AdminMain.vue';
import AdminUsers from '@/components/admin/AdminUsers.vue';

const route = useRoute();

type TypeBlocks = {
  [key: string]: unknown,
}

const blocksAdminPage: TypeBlocks = {
  '/': AdminMain,
  '/users': AdminUsers,
}

</script>
<template>
  <AdminLayout>
    <component :is="blocksAdminPage[route.path]"></component>
  </AdminLayout>
</template>