<template>
  <div class="auth-layout bg-body-bg flex flex-col min-h-screen">
    <div class="auth-layout__page-content p-[20px] grow flex items-center justify-center">
      <slot></slot>
    </div>
    <div class="center-layout-bottom-images relative">
      <div class="center-layout-bottom-figure bg-action-hover h-[170px] "></div>
      <div class="absolute bottom-[60px] left-[60px] flex items-end">
        <img src="/img/tree-img-layout-1.png" />
        <img src="/img/tree-img-layout-3.png" />
      </div>
      <img src="/img/tree-img-layout-2.png" class="absolute bottom-[60px] right-[60px]">
    </div>
  </div>
</template>