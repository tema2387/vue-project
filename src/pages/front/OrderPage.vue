<script setup>
import { ref } from 'vue';
// components
import FrontLayout from "@/layouts/FrontLayout.vue";
import UiInputText from "@/components/UI/UiInputText.vue";
import UiRadioCustom from "@/components/UI/UiRadioCustom.vue";
import UiSelect from "@/components/UI/UiSelect.vue";

// store
import { planPrice } from '@/store/plansStore.js';

const modelRadio = ref('radio-pay-visa');
</script>
<template>
  <FrontLayout :header="'fixed'">
    <div class="order-page bg-body-bg pt-[162px] pb-[100px]">
      <div class="order-page__content container flex rounded-md shadow-sm bg-paper-bg">
        <div class="order-page__left flex-1 p-[32px] border-r border-devider">
          <div class="order-page__checkout">
            <h4 class="order-page__title">Checkout</h4>
            <p class="order-page__subtitle text-text-secondary mt-[8px]">All plans include 40+ advanced tools and features to boost your product.</p>
            <p class="order-page__subtitle text-text-secondary">Choose the best plan to fit your needs.</p>
            <div class="order-page__inputs flex gap-[20px] mt-[32px]">
              <UiRadioCustom 
                :name="'pay-checkout-plan'" 
                :id="'radio-pay-visa'" 
                v-model="modelRadio" 
              >
                <UiImage 
                  :src="'/public/icon/visa-icon.svg'" 
                  :alt="'visa-icon'" 
                  :loaderSize="20"
                  class="p-[11px] bg-action-hover w-[58px] h-[34px] rounded-md" 
                />
                <div>Credit card</div>
              </UiRadioCustom>
              <UiRadioCustom 
                :name="'pay-checkout-plan'" 
                :id="'radio-pay-paypal'" 
                v-model="modelRadio" 
              >
                <img src="/public/icon/paypal-icon.svg" alt="paypal-icon" class="py-[7px] px-[21px] w-[58px] h-[34px] bg-action-hover rounded-md" />
                <div>Paypal</div>
              </UiRadioCustom>
            </div>
          </div>
          <div class="order-page__details mt-[32px]">
            <h4 class="order-page__title">Billing Details</h4>
            <div class="order-page__inputs mt-[24px]">
              <div class="order-page__inputs-top flex gap-[20px]">
                <UiInputText 
                  :id="'order-email'" 
                  :label="'Email Address'"
                  class="flex-1"
                />
                <UiInputText 
                  :id="'order-password'" 
                  :label="'Password'"
                  class="flex-1"
                />
              </div>
              <div class="order-page__inputs-bottom mt-[20px] flex gap-[20px]">
                <UiSelect 
                  :id="'select-1'" 
                  :label="'Billing Country'"
                  :selects="['aboba1', 'aboba2', 'aboba3', 'aboba4']"
                  class="flex-1"
                />
                <UiSelect 
                  :id="'select-2'" 
                  :label="'Billing Zip / Postal Code'" 
                  :selects="['aboba1', 'aboba2', 'aboba3', 'aboba4']"
                  class="flex-1"
                />
              </div>
            </div>
          </div>
          <div class="order-page__card mt-[32px]">
            <h4 class="order-page__title">Credit Card Info</h4>
            <div class="order-page__inputs mt-[24px]">
              <div class="order-page__inputs-top">
                <UiInputText 
                  :id="'card-number'" 
                  :label="'Card Number'" 
                  class="flex-1"
                />
              </div>
              <div class="order-page__inputs-bottom mt-[20px] flex gap-[20px]">
                <UiInputText 
                  :id="'card-holder'" 
                  :label="'Card Holder'" 
                  class="flex-1"
                />
                <UiInputText 
                  :id="'card-date'" 
                  :label="'EXP. date'" 
                  class="max-w-[150px]" 
                />
                <UiInputText 
                  :id="'card-cvv'" 
                  :label="'CVV'" 
                  class="max-w-[150px]" 
                />
              </div>
            </div>
          </div>
        </div>
        <div class="order-page__summary max-w-[452px] p-[32px]">
          <h4 class="order-page__title">Order Summary</h4>
          <p class="order-page__subtitle text-text-secondary mt-[8px]">All plans include 40+ advanced tools and features to boost your product.</p>
          <div class="order-page__plan rounded-md p-[24px] mt-[32px] bg-body-bg">
            <p class="text-text-secondary">A simple start for everyone</p>
            <h1 class="mt-[16px]">
              {{ planPrice }}<span class="text-15-500 text-text-secondary"> /month</span>
            </h1>
            <UiLink 
              class="mt-[16px]" 
              :type="'inside'"
              :href="'/#section-plans-list'"
            >
              <UiButton 
                :type="'outline'"
                :text="'md'"
              >
                Change Plan
              </UiButton>
            </UiLink>
          </div>
          <div class="order-page__price mt-[20px] pb-[16px] border-b border-devider">
            <div class="order-page__subscription flex justify-between">
              <div class="text-text-secondary">Subscription</div>
              <div class="order-page__subscription-price text-15-500">$10</div>
            </div>
            <div class="order-page__tax flex justify-between">
              <div class="text-text-secondary">Tax</div>
              <div class="order-page__tax-price text-15-500">$10</div>
            </div>
          </div>
          <div class="order-page__total flex justify-between mt-[16px]">
            <div class="text-text-secondary">Total</div>
            <div class="order-page__total-price text-15-500">$10</div>
          </div>
          <UiLink 
            class="mt-[20px]" 
            :type="'inside'"
          >
            <UiButton 
              :type="'default'"
              :color="'success'"
              :text="'md'"
              :rightIcon="true"
              class="mt-[20px]"
            >
              Proceed with payment
            </UiButton>
          </UiLink>
          <p class="order-page__notice mt-[32px] text-text-secondary">By continuing, you accept to our Terms of Services and Privacy Policy. Please note that payments are non-refundable.</p>
        </div>
      </div>
    </div>
  </FrontLayout>
</template>