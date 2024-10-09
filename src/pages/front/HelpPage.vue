<script setup>
import FrontLayout from "@/layouts/FrontLayout.vue";

// components
import UiInputText from "@/components/UI/UiInputText.vue";
import CardRead from "@/components/blocks/CardRead.vue";
import CardKnowledge from "@/components/blocks/CardKnowledge.vue";

// icons
import RocketIcon from "@/components/UI/svg/RocketIcon.vue";
import GiftIcon from "@/components/UI/svg/GiftIcon.vue";
import KeyboardIcon from "@/components/UI/svg/KeyboardIcon.vue";
import LaptopIcon from "@/components/UI/svg/LaptopIcon.vue";
import LightBulbIcon from "@/components/UI/svg/LightBulbIcon.vue";
import DiscordIcon from "@/components/UI/svg/DiscordIcon.vue";

// store
import { buying, itemSupport, licenses, templateKits, accountAndPassword, accountSettings } from "@/store/knowledgeBaseStore.js";


</script>
<template>
<FrontLayout>
  <div class="help-page">
    <section class="help-search py-[100px]">
      <div class="help-search__content max-w-[476px] m-auto text-center">
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
    <section class="articles py-[100px]">
      <div class="articles__content container">
        <h4 class="text-center">Popular Articles</h4>
        <div class="articles__list flex gap-[24px] mt-[24px]">
          <CardRead 
            :img="RocketIcon"
            :title="'Getting Started'"
            :subtitle1="'Whether youre new or youre'"
            :subtitle2="'a power user, this article will…'"
          />
          <CardRead 
            :img="GiftIcon"
            :title="'First Steps'"
            :subtitle1="'Are you a new customer wondering'"
            :subtitle2="'how to get started?'"
          />
          <CardRead 
            :img="KeyboardIcon"
            :title="'Add External Content'"
            :subtitle1="'This article will show you how to expand the'"
            :subtitle2="'functionality of the App.'"
          />
        </div>
      </div>
    </section>
    <section class="knowledge-base py-[100px] bg-body-bg">
      <div class="knowledge-base__content container">
        <h4 class="text-center">Knowledge Base</h4>
        <div class="flex gap-[24px] mt-[24px]">
          <CardKnowledge 
            :title="'Buying'"
            :titleIcon="'/public/icon/cart-icon.svg'"
            :items="buying"
          />
          <CardKnowledge 
            :title="'Item Support'"
            :titleIcon="'/public/icon/question-icon.svg'"
            :items="itemSupport"
          />
          <CardKnowledge 
            :title="'Licenses'"
            :titleIcon="'/public/icon/licenses-icon.svg'"
            :items="licenses"
          />
        </div>
        <div class="flex gap-[24px] mt-[24px]">
          <CardKnowledge 
            :title="'Template Kits'"
            :titleIcon="'/public/icon/kits-icon.svg'"
            :items="templateKits"
          />
          <CardKnowledge 
            :title="'Account & Password'"
            :titleIcon="'/public/icon/lock-icon.svg'"
            :items="accountAndPassword"
          />
          <CardKnowledge 
            :title="'Account Settings'"
            :titleIcon="'/public/icon/account-icon.svg'"
            :items="accountSettings"
          />
        </div>
      </div>
    </section>
    <section class="learning py-[100px]">
      <div class="learning__content container">
        <h4 class="text-center">Keep Learning</h4>
        <div class="learning__list flex gap-[24px] mt-[24px]">
          <CardRead 
            :img="LaptopIcon"
            :title="'Blogging'"
            :subtitle1="'Expert tips & tools to improve your website'"
            :subtitle2="'or online store using blog.'"
          />
          <CardRead 
            :img="LightBulbIcon"
            :title="'Inspiration Center'"
            :subtitle1="'inspiration from experts to help you start and '"
            :subtitle2="'grow your big ideas.'"
          />
          <CardRead 
            :img="DiscordIcon"
            :title="'Community'"
            :subtitle1="'A group of people living in the same place or'"
            :subtitle2="'having a particular.'"
          />
        </div>
      </div>
    </section>
    <section class="steel-help py-[100px] bg-body-bg">
      <div class="help-search__content flex flex-col gap-[16px] items-center text-center">
        <h4>Still need help?</h4>
        <div class="text-text-secondary">
          <div>Our specialists are always happy to help.</div>
          <div>Contact us during standard business hours or email us 24/7, and we'll get back to you.</div>
        </div>
        <div class="flex gap-[16px]">
          <UiButton 
            :size="'md'" 
            :text="'md'"
          >
            Visit our community
          </UiButton>
          <UiButton 
            :size="'md'" 
            :text="'md'"
          >
            Contact Us
          </UiButton>
        </div>
      </div>
    </section>
  </div>
</FrontLayout>
</template>