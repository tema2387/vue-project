<script setup>
// components
import ProductCard from '@/components/blocks/ProductCard.vue';

// icons
import TimeClockIcon from '@/components/UI/svg/TimeClockIcon.vue';
import MapPinIcon from '@/components/UI/svg/MapPinIcon.vue';
import BankCardIcon from '@/components/UI/svg/BankCardIcon.vue';
import Ship2Icon from '@/components/UI/svg/Ship2Icon.vue';


// js
import { address } from '@/store/addressStore.js';
import { products } from '@/store/productsStore.js';

// border for product-card
const borderAloneElement = 'border rounded-md';
const borderTwoElements = ['border rounded-t-md', 'border-x border-b rounded-b-md']
const borderMoreTwo = ['border-x border-t rounded-t-md', 'border-x border-t', 'border rounded-b-md']
</script>
<template>
  <div class="checkout-confirmation">
    <div class="checkout-confirmation__thanks flex flex-col items-center gap-[16px]">
      <h4>Thank You! 😇</h4>
      <div class="text-text-secondary">Your order <span class="text-text-primary">#1536548131</span> has been placed!</div>
      <div class="text-text-secondary">We sent an email to <span class="text-text-primary">{{ address.email }}</span> with your order confirmation and receipt.</div>
      <div class="text-text-secondary">If the email hasn't arrived within two minutes, please check your spam folder to see if the email was routed there.</div>
      <div class="flex gap-[8px]">
        <TimeClockIcon />
        <div class="text-text-secondary">Time placed: 25/05/2020 13:35pm</div>
      </div>
    </div>
    <div class="checkout-confirmation__list mt-[20px] flex">
      <div class="checkout-confirmation__item p-[20px] flex flex-col gap-[16px] rounded-l-md border-l border-t border-b border-devider">
        <div class="flex gap-[8px] items-center">
          <MapPinIcon />
          <div>Shipping</div>
        </div>
        <div>{{ address.address }}</div>
        <div>{{ address.mobile }}</div>
      </div>
      <div class="checkout-confirmation__item p-[20px] flex flex-col gap-[16px] border border-devider">
        <div class="flex gap-[8px] items-center">
          <BankCardIcon />
          <div>Billing Address</div>
        </div>
        <div>{{ address.address }}</div>
        <div>{{ address.mobile }}</div>
      </div>
      <div class="checkout-confirmation__item p-[20px] flex flex-col gap-[16px] rounded-r-md border-r border-t border-b border-devider">
        <div class="flex gap-[8px] items-center">
          <Ship2Icon />
          <div></div>
        </div>
        <div>{{ address.address }}</div>
        <div>{{ address.mobile }}</div>
      </div>
    </div>
    <div class="checkout-confirmation__sum mt-[20px]">
      <div class="flex gap-[24px]">
        <div 
          v-if="products.length" 
          class="checkout-confirmation__products flex-1"
        >
          <ProductCard 
            v-for="product in products" 
            :key="product.id"
            :type="'confirm'"
            :id="product.id"
            :img="product.img"
            :name="product.name"
            :rating="product.rating"
            :brand="product.brand"
            :price="product.price"
            :oldPrice="product.oldPrice"
            :count="product.count"
            :class="products.length < 2 ? borderAloneElement 
              : products.length === 2 ? borderTwoElements[products.indexOf(product)] 
                : products.length > 2 ? borderMoreTwo[products.indexOf(product) === 0 ? 0 
                                          : products.indexOf(product) === products.indexOf(products[products.length - 1]) ? 2 
                                            : 1] 
                  : ''"
        />
        </div>
        <div class="checkout-confirmation__right">
          <div class="w-[290px] border border-devider rounded-md">
            <div class="price p-[20px] border-b border-devider">
              <div class="price__title text-15-500">Price Details</div>
              <div class="price__list flex flex-col gap-[16px] mt-[16px]">
                <div class="flex justify-between">
                  <div>Order Total</div>
                <div class="text-text-secondary">$1198.00</div>
                </div>
                <div class="flex justify-between">
                  <div>Charges</div>
                  <div class="text-text-disabled flex items-center gap-[8px]">
                    <span>$5.00</span>
                    <span class="bg-success-opacity/[16%] text-success-500 px-[12px] py-[2px] rounded-full text-chip">FREE</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="total p-[20px]">
              <div class="total-sum flex flex-col gap-[8px]">
                <div class="flex text-15-500 justify-between">
                  <div>Total</div>
                  <div>$1198.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>