<script setup>
import FrontLayout from "@/layouts/FrontLayout.vue";

// components
import UiInputText from "@/components/UI/UiInputText.vue";

</script>
<template>
<FrontLayout>
  <div class="help-page">
    <section class="help-search">
      <div class="help-search__content max-w-[476px] py-[100px] m-auto text-center">
        <h4 class="text-primary-500">Hello, how can we help?</h4>
        <UiInputText 
          :id="'help-search'" 
          :searchIcon="true"
          :label="'Ask a question....'"
          :size="'md'"
          class="mt-[30px] w-full"
        >
        </UiInputText>
        <div class="text-text-secondary mt-[16px]">Common troubleshooting topics: eCommerce, Blogging to payment</div>
      </div>
    </section>
  </div>
</FrontLayout>
</template>