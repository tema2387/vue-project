<script lang="ts" setup>
import { computed, ref } from 'vue';
// Компоненты
import FrontLayout from '@/layouts/FrontLayout.vue';
import CheckoutCart from '@/components/checkout/CheckoutCart.vue';
import CheckoutAddress from '@/components/checkout/CheckoutAddress.vue';
import CheckoutPayment from '@/components/checkout/CheckoutPayment.vue';
import CheckoutConfirmation from '@/components/checkout/CheckoutConfirmation.vue';
// Иконки
import CheckoutCartIcon from '@/components/UI/svg/CheckoutCartIcon.vue';
import CheckoutAddressIcon from '@/components/UI/svg/CheckoutAddressIcon.vue';
import CheckoutPaymentIcon from '@/components/UI/svg/CheckoutPaymentIcon.vue';
import CheckoutConfirmationIcon from '@/components/UI/svg/CheckoutConfirmationIcon.vue';
import ArrowRightSIcon from '@/components/UI/svg/ArrowRightSIcon.vue';

// Пременная componentName может быть 'cart', 'address', 'payment', 'confirmation'
const componentName = ref<string>('cart');

const currentComponent = computed(() => {
  return componentName.value === 'cart' ? CheckoutCart 
    : componentName.value === 'address' ? CheckoutAddress 
      : componentName.value === 'payment' ? CheckoutPayment 
        : componentName.value === 'confirmation' ? CheckoutConfirmation 
          : {};
})

function changeComponentName(newComponent: string): void {
  componentName.value = newComponent;
}

const changeComponentsOnAddress = (): void => {
  componentName.value = 'address';
}

const step1 = computed<boolean>(() => {
  return componentName.value === 'cart' 
    || componentName.value === 'address' 
      || componentName.value === 'payment' 
        || componentName.value === 'confirmation';
})

const step2 = computed<boolean>(() => {
  return componentName.value === 'address' 
    || componentName.value === 'payment' 
      || componentName.value === 'confirmation';
})

const step3 = computed<boolean>(() => {
  return componentName.value === 'payment' 
    || componentName.value === 'confirmation';
})

const step4 = computed<boolean>(() => {
  return componentName.value === 'confirmation';
})
</script>
<template>
<FrontLayout>
  <div class="checkout-page px-[20px] py-[100px] m-auto bg-body-bg">
    <div class="checkout-page__content bg-paper-bg shadow-md rounded-md container">
      <div class="checkout-page__top hidden md:flex py-[20px] justify-center border-b border-devider gap-[16px] items-center text-center">
        <div 
          @click="changeComponentName('cart')" 
          class="cart py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutCartIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step1 }"
          />
          <div 
            class="mt-[8px]"
            :class="[step1 ? 'text-primary-500' : 'text-text-secondary']"
          >
            Cart
          </div>
        </div>
        <ArrowRightSIcon 
          class="flex-shrink-0" 
          :class="[step2 ? 'text-primary-500 opacity-100' : 'opacity-[0.4]']" 
        />
        <div 
          @click="changeComponentName('address')" 
          class="address py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutAddressIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step2 }"
          />
          <div 
            class="mt-[8px]"
            :class="[step2 ? 'text-primary-500' : 'text-text-secondary']"
          >
            Address
          </div>
        </div>
        <ArrowRightSIcon 
          class="flex-shrink-0" 
          :class="[step3 ? 'text-primary-500 opacity-100' : 'opacity-[0.4]']" 
        />
        <div 
          @click="changeComponentName('payment')" 
          class="payment py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutPaymentIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step3 }"
          />
          <div 
            class="mt-[8px]"
            :class="[step3 ? 'text-primary-500' : 'text-text-secondary']"
          >
            Payment
          </div>
        </div>
        <ArrowRightSIcon 
          class="flex-shrink-0" 
          :class="[step4 ? 'text-primary-500 opacity-100' : 'opacity-[0.4]']" 
        />
        <div 
          @click="changeComponentName('confirmation')" 
          class="confirmation py-[20px] px-[45px] cursor-pointer"
        >
          <CheckoutConfirmationIcon 
            class="m-auto" 
            :class="{ 'text-primary-500': step4 }"
          />
          <div 
            class="mt-[8px]"
            :class="[step4 ? 'text-primary-500' : 'text-text-secondary']"
          >
            Confirmation
          </div>
        </div>
      </div>
      <div class="checkout-page__bottom p-[20px]">
        <KeepAlive>
          <component 
            @changeAddress="changeComponentsOnAddress" 
            :is="currentComponent"
          >
          </component>
        </KeepAlive>
      </div>
    </div>
  </div>
</FrontLayout>
</template>