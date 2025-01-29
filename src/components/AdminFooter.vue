<template>
  <div class="admin-footer flex flex-col py-[16px] text-center gap-[8px] lg:text-left lg:flex-row justify-end items-center">
    <div class="admin-footer__right flex gap-y-[8px] gap-x-[16px] justify-center flex-wrap text-primary-500">
      <UiLink 
        :type="'outside'" 
        :link="'#'"
      >
        License
      </UiLink>
      <UiLink 
        :type="'outside'" 
        :link="'#'"
      >
        More Themes
      </UiLink>
      <UiLink 
        :type="'outside'" 
        :link="'#'"
      >
        Documentation
      </UiLink>
      <UiLink 
        :type="'outside'" 
        :link="'#'"
      >
        Support
      </UiLink>
    </div>
  </div>
</template>