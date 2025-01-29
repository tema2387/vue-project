<script lang="ts" setup>
import FrontLayout from "@/layouts/FrontLayout.vue";
// Компоненты
import UiInputText from "@/components/UI/UiInputText.vue";
import BlockCardRead from "@/components/blocks/BlockCardRead.vue";
import BlockCardKnowledge from "@/components/blocks/BlockCardKnowledge.vue";
// Иконки
import RocketIcon from "@/components/UI/svg/RocketIcon.vue";
import GiftIcon from "@/components/UI/svg/GiftIcon.vue";
import KeyboardIcon from "@/components/UI/svg/KeyboardIcon.vue";
import LaptopIcon from "@/components/UI/svg/LaptopIcon.vue";
import LightBulbIcon from "@/components/UI/svg/LightBulbIcon.vue";
import DiscordIcon from "@/components/UI/svg/DiscordIcon.vue";
// Хранилище
import { buying, itemSupport, licenses, templateKits, accountAndPassword, accountSettings } from "@/store/knowledgeBaseStore";
</script>
<template>
<FrontLayout>
  <div class="help-page">
    <section class="help-search bg-search-bg bg-no-repeat bg-[left] bg-cover px-[20px] py-[100px]">
      <div class="help-search__content max-w-[476px] m-auto text-center">
        <h4 class="text-primary-500">Hello, how can we help?</h4>
        <UiInputText
          :type="'outlined'" 
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
    <section class="articles px-[20px] py-[100px]">
      <div class="articles__content container">
        <h4 class="text-center">Popular Articles</h4>
        <div class="articles__list flex flex-wrap gap-[24px] mt-[24px]">
          <BlockCardRead 
            :title="'Getting Started'"
            :subtitle1="'Whether youre new or youre'"
            :subtitle2="'a power user, this article will…'"
          >
            <template v-slot:icon>
              <RocketIcon />
            </template>
          </BlockCardRead>
          <BlockCardRead 
            :title="'First Steps'"
            :subtitle1="'Are you a new customer wondering'"
            :subtitle2="'how to get started?'"
          >
            <template v-slot:icon>
              <GiftIcon />
            </template>
          </BlockCardRead>
          <BlockCardRead 
            :title="'Add External Content'"
            :subtitle1="'This article will show you how to expand the'"
            :subtitle2="'functionality of the App.'"
          >
            <template v-slot:icon>
              <KeyboardIcon />
            </template>
          </BlockCardRead>
        </div>
      </div>
    </section>
    <section class="knowledge-base px-[20px] py-[100px] bg-body-bg">
      <div class="knowledge-base__content container">
        <h4 class="text-center">Knowledge Base</h4>
        <div class="flex flex-wrap gap-[24px] mt-[24px]">
          <BlockCardKnowledge 
            :title="'Buying'"
            :titleIcon="'/icon/cart-icon.svg'"
            :items="buying"
          />
          <BlockCardKnowledge 
            :title="'Item Support'"
            :titleIcon="'/icon/question-icon.svg'"
            :items="itemSupport"
          />
          <BlockCardKnowledge 
            :title="'Licenses'"
            :titleIcon="'/icon/licenses-icon.svg'"
            :items="licenses"
          />
        </div>
        <div class="flex flex-wrap justify-between gap-[24px] mt-[24px]">
          <BlockCardKnowledge 
            :title="'Template Kits'"
            :titleIcon="'/icon/kits-icon.svg'"
            :items="templateKits"
          />
          <BlockCardKnowledge 
            :title="'Account & Password'"
            :titleIcon="'/icon/lock-icon.svg'"
            :items="accountAndPassword"
          />
          <BlockCardKnowledge 
            :title="'Account Settings'"
            :titleIcon="'/icon/account-icon.svg'"
            :items="accountSettings"
          />
        </div>
      </div>
    </section>
    <section class="learning px-[20px] py-[100px]">
      <div class="learning__content container">
        <h4 class="text-center">Keep Learning</h4>
        <div class="learning__list flex flex-wrap gap-[24px] mt-[24px]">
          <BlockCardRead 
            :title="'Blogging'"
            :subtitle1="'Expert tips & tools to improve your website'"
            :subtitle2="'or online store using blog.'"
          >
            <template v-slot:icon>
              <LaptopIcon />
            </template>
          </BlockCardRead>
          <BlockCardRead 
            :title="'Inspiration Center'"
            :subtitle1="'inspiration from experts to help you start and '"
            :subtitle2="'grow your big ideas.'"
          >
            <template v-slot:icon>
              <LightBulbIcon />
            </template>
          </BlockCardRead>
          <BlockCardRead 
            :title="'Community'"
            :subtitle1="'A group of people living in the same place or'"
            :subtitle2="'having a particular.'"
          >
            <template v-slot:icon>
              <DiscordIcon />
            </template>
          </BlockCardRead>
        </div>
      </div>
    </section>
    <section class="steel-help px-[20px] py-[100px] bg-body-bg">
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