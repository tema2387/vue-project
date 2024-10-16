<script setup>
import { computed, ref } from 'vue';

// components
import FrontLayout from '@/layouts/FrontLayout.vue';
import CheckoutCart from '@/components/blocks/CheckoutCart.vue';
import CheckoutAddress from '@/components/blocks/CheckoutAddress.vue';
import CheckoutPayment from '@/components/blocks/CheckoutPayment.vue';
import CheckoutConfirmation from '@/components/blocks/CheckoutConfirmation.vue';

// icons
import CheckoutCartIcon from '@/components/UI/svg/CheckoutCartIcon.vue';
import CheckoutAddressIcon from '@/components/UI/svg/CheckoutAddressIcon.vue';
import CheckoutPaymentIcon from '@/components/UI/svg/CheckoutPaymentIcon.vue';
import CheckoutConfirmationIcon from '@/components/UI/svg/CheckoutConfirmationIcon.vue';
import ArrowRightSIcon from '@/components/UI/svg/ArrowRightSIcon.vue';

// component can be 'cart', 'address', 'payment', 'confirmation'
const component = ref('cart');

const currentComponent = computed(() => {
  return component.value === 'cart' ? CheckoutCart 
    : component.value === 'address' ? CheckoutAddress 
      : component.value === 'payment' ? CheckoutPayment 
        : component.value === 'confirmation' ? CheckoutConfirmation 
          : {};
})

function changeComponent(newComponent) {
  component.value = newComponent;
}

const step1 = computed(() => {
  return component.value === 'cart' 
    || component.value === 'address' 
      || component.value === 'payment' 
        || component.value === 'confirmation';
})

const step2 = computed(() => {
  return component.value === 'address' 
    || component.value === 'payment' 
      || component.value === 'confirmation';
})

const step3 = computed(() => {
  return component.value === 'payment' 
    || component.value === 'confirmation';
})

const step4 = computed(() => {
  return component.value === 'confirmation';
})

</script>
<template>
<FrontLayout>
  <div class="checkout-page py-[100px] m-auto bg-body-bg">
    <div class="checkout-page__content bg-paper-bg shadow-md rounded-md container">
      <div class="checkout-page__top py-[20px] justify-center border-b border-devider flex gap-[16px] items-center text-center">
        <div 
          @click="changeComponent('cart')" 
          class="cart py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutCartIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step1 }"
          />
          <div 
            class="mt-[8px] text-text-secondary"
            :class="{ '!text-primary-500': step1 }"
          >
            Cart
          </div>
        </div>
        <ArrowRightSIcon 
          class="opacity-[0.4]" 
          :class="{ 'text-primary-500': step2, '!opacity-100': step2 }" 
        />
        <div 
          @click="changeComponent('address')" 
          class="address py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutAddressIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step2 }"
          />
          <div 
            class="mt-[8px] text-text-secondary"
            :class="{ '!text-primary-500': step2 }"
          >
            Address
          </div>
        </div>
        <ArrowRightSIcon 
          class="opacity-[0.4]" 
          :class="{ 'text-primary-500': step3, '!opacity-100': step3 }" 
        />
        <div 
          @click="changeComponent('payment')" 
          class="payment py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutPaymentIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step3 }"
          />
          <div 
            class="mt-[8px] text-text-secondary"
            :class="{ '!text-primary-500': step3 }"
          >
            Payment
          </div>
        </div>
        <ArrowRightSIcon 
          class="opacity-[0.4]" 
          :class="{ 'text-primary-500': step4, '!opacity-100': step4 }" 
        />
        <div 
          @click="changeComponent('confirmation')" 
          class="confirmation py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutConfirmationIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step4 }"
          />
          <div 
            class="mt-[8px] text-text-secondary"
            :class="{ '!text-primary-500': step4 }"
          >
            Confirmation
          </div>
        </div>
      </div>
      <div class="checkout-page__bottom p-[20px]">
        <KeepAlive>
          <component :is="currentComponent"></component>
        </KeepAlive>
      </div>
    </div>
  </div>
</FrontLayout>
</template>