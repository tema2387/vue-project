<script lang="ts" setup>
import { ref } from 'vue';
// Компоненты
import UiInputText from '@/components/UI/UiInputText.vue';
import BlockProductCard from '@/components/blocks/BlockProductCard.vue';
import UiPopup from '@/components/UI/UiPopup.vue';
// Иконки
import ArrowRightIcon from '@/components/UI/svg/ArrowRightIcon.vue';
// Хранилище
import { products, removeProduct } from '@/store/productsStore';
// Модули
import { activatePopup } from '@/modules/togglePopup';

// border для product-cart
const borderAloneElement: string = 'border rounded-md';
const borderTwoElements: string[] = ['border rounded-t-md', 'border-x border-b rounded-b-md']
const borderMoreTwo: string[] = ['border-x border-t rounded-t-md', 'border-x border-t', 'border rounded-b-md']

const popupOfferStatus = ref<boolean>(true);
const promo = ref<string>('test');

function activatePromo(): void {
  const statusPromo = checkValidPromo(promo.value);
  statusPromo ? activatePopup('Promocode activated', 'success') : activatePopup('Promocode not found', 'error');
}

function checkValidPromo(promo: string): boolean {
  if(promo === 'test') {
    return true;
  }
  return false;
}
</script>
<template>
  <div class="checkout-cart flex flex-col gap-[24px] lg:flex-row">
    <div class="checkout-cart__left flex flex-col gap-[16px] flex-1">
      <UiPopup 
        v-if="popupOfferStatus" 
        :type="'offer'"
        @close="popupOfferStatus = false"
      />
      <h5>My Shopping Bag {{ products.length ? `(${products.length} items)` : '' }}</h5>
      <div 
        v-if="products.length" 
        class="checkout-cart__products"
      >
        <BlockProductCard 
          v-for="product in products" 
          :key="product.id" 
          :id="product.id.toString()"
          :img="product.img"
          :name="product.name"
          :rating="product.rating"
          :brand="product.brand"
          :price="product.price"
          :oldPrice="product.oldPrice"
          :count="product.count"
          @remove="removeProduct(product.id)"
          :class="products.length < 2 ? borderAloneElement 
            : products.length === 2 ? borderTwoElements[products.indexOf(product)] 
              : products.length > 2 ? borderMoreTwo[products.indexOf(product) === 0 ? 0 
                                        : products.indexOf(product) === products.indexOf(products[products.length - 1]) ? 2 
                                          : 1] 
                : ''"
        />
      </div>
      <UiLink 
        :link="'#'" 
        class="flex justify-between items-center text-primary-500 px-[18px] py-[8px] border rounded-md border-devider"
      >
        <div>Add more product from Wishlist</div>
        <ArrowRightIcon />
      </UiLink>
    </div>
    <div class="checkout-cart__right lg:w-[334px]">
      <div class="border border-devider rounded-md">
        <div class="offer p-[20px]">
          <div class="text-15-500">Offer</div>
          <div class="checkout-cart__promo mt-[16px] flex gap-[16px]">
            <UiInputText 
              :id="'promo'"
              :size="'sm'" 
              :label="'Enter Promo Code'"
              class="flex-1 max-w-[200px]"
              v-model="promo" 
            />
            <UiButton 
              :type="'outline'" 
              :size="'sm'" 
              :text="'md'"
              @click="activatePromo"
            >
              Apply
            </UiButton>
          </div>
          <div class="gift mt-[16px] bg-action-hover rounded-md p-[20px]">
            <div class="gift__title">Buying gift for a loved one?</div>
            <p class="gift__desc mt-[8px] text-text-secondary">Gift wrap and personalized message on card, Only for $2.</p>
            <UiButton
              :type="'inline-text'"
              class="mt-[8px] text-primary-500"
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
              <div class="text-text-disabled flex items-center gap-[8px]">
                <span>$5.00</span>
                <span class="bg-success-opacity/[16%] text-success-500 px-[12px] py-[2px] rounded-full text-chip">FREE</span>
              </div>
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