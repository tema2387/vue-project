<script setup>
import { ref } from 'vue';

// components
import UiInputText from '@/components/UI/UiInputText.vue';
import ProductCart from '@/components/blocks/ProductCart.vue';
import UIPopup from '@/components/UI/UIPopup.vue';

// icons 
import ArrowRightIcon from '@/components/UI/svg/ArrowRightIcon.vue';

// js
const popupStatus = ref(true);

// border for product-cart
const borderAloneElement = 'border rounded-md';
const borderTwoElements = ['border rounded-t-md', 'border-x border-b rounded-b-md']
const borderMoreTwo = ['border-x border-t rounded-t-md', 'border-x border-t', 'border rounded-b-md']

import { products } from '@/store/productsStore.js';
</script>
<template>
  <div class="checkout-cart flex">
    <div class="checkout-cart__left flex flex-col gap-[16px] flex-1 mr-[24px]">
      <UIPopup 
        v-if="popupStatus" 
        @close="popupStatus = false"
      />
      <h5>My Shopping Bag {{ products.length ? `(${products.length} items)` : '' }}</h5>
      <div 
        v-if="products.length" 
        class="checkout-cart__products"
      >
        <ProductCart 
          v-for="product in products" 
          :key="product.id" 
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
      <UiLink class="flex justify-between items-center text-primary-500 px-[18px] py-[8px] border rounded-md border-devider">
        <div>Add more product from Wishlist</div>
        <ArrowRightIcon />
      </UiLink>
    </div>
    <div class="checkout-cart__right max-w-[334px]">
      <div class="border border-devider rounded-md">
        <div class="offer p-[20px]">
          <div class="text-15-500">Offer</div>
          <div class="checkout-cart__promo mt-[16px] flex gap-[16px]">
            <UiInputText 
              :id="'promo'"
              :size="'sm'" 
              :label="'Enter Promo Code'"
              class="flex-1 max-w-[200px]" 
            />
            <UiButton 
              :type="'outline'" 
              :size="'sm'" 
              :text="'md'"
            >
              Apply
            </UiButton>
          </div>
          <div class="gift mt-[16px] bg-action-hover rounded-md p-[20px]">
            <div class="gift__title">Buying gift for a loved one?</div>
            <p class="gift__desc mt-[8px] text-text-secondary">Gift wrap and personalized message on card, Only for $2.</p>
            <UiButton
              :type="'inline-text'"
              class="mt-[8px] text-primary-500 inline-block"
            >
              Add a gift wrap
            </UiButton>
          </div>
        </div>
        <div class="price p-[20px] border-t border-b border-devider">
          <div class="price__title text-15-500">Price Details</div>
          <div class="price__list flex flex-col gap-[8px] mt-[16px]">
            <div class="flex justify-between">
              <div>Bag Total</div>
              <div class="text-text-secondary">$1198.00</div>
            </div>
            <div class="flex justify-between">
              <div>Coupon Discount</div>
              <div>
                <UiButton 
                  :type="'inline-text'"
                  class="text-primary-500"
                >
                  Apply Coupon
                </UiButton>
              </div>
            </div>
            <div class="flex justify-between">
              <div>Order Total</div>
              <div class="text-text-secondary">$1198.00</div>
            </div>
            <div class="flex justify-between">
              <div>Delivery Charges</div>
              <div class="text-text-disabled">$5.00</div>
            </div>
          </div>
        </div>
        <div class="total p-[20px]">
          <div class="flex text-15-500 justify-between">
            <div>Total</div>
            <div>$1198.00</div>
          </div>
        </div>
      </div>
      <UiButton 
        :size="'md'" 
        :text="'md'" 
        class="mt-[16px]"
      >
        Place Order
      </UiButton>
    </div>
  </div>
</template>