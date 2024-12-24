<script lang="ts" setup>
import { ref } from 'vue';
// Компоненты
import BlockProductCardDelivery from '@/components/blocks/BlockProductCardDelivery.vue';
import UiRadioCustom from '@/components/UI/UiRadioCustom.vue';
// Иконки
import UserStandardIcon from '@/components/UI/svg/UserStandardIcon.vue';
import StarSmileIcon from '@/components/UI/svg/StarSmileIcon.vue';
import VipCrownIcon from '@/components/UI/svg/VipCrownIcon.vue';
// Хранилище
import { products } from '@/store/productsStore';
import { addresses, removeAddress, selectedAddressId} from '@/store/addressStore';
import { deliveries } from '@/store/deliverySpeedStore';

const modelDelivery = ref<string>('Standard');
</script>
<template>
  <div class="checkout-address flex flex-col gap-[24px] lg:flex-row">
    <div class="checkout-address__left flex-1">
      <div class="checkout-address__select">
        <div class="text-15-500">Select your preferable address</div>
        <div class="radio-addresses flex flex-wrap gap-[20px] mt-[16px]">
          <UiRadioCustom 
            v-for="address in addresses"
            :key="address.id"
            :name="'radio-addresses'"
            :id="address.id"
            v-model="selectedAddressId"
            class="max-w-[361px]"
          >
            <template v-slot:title>
              <div class="flex items-center flex-1">
                <div class="flex-1">{{ address.name }}</div>
                <div 
                  v-if="address.location === 'Home'" 
                  class="px-[12px] py-[2px] bg-primary-opacity/[16%] text-primary-500 rounded-full max-w-max"
                >
                  {{ address.location }}
                </div>
                <div 
                  v-else-if="address.location === 'Office'"
                  class="px-[12px] py-[2px] bg-success-opacity/[16%] text-success-500 rounded-full max-w-max"
                >
                  {{ address.location }}
                </div>
              </div>
            </template>
            <template v-slot:content>
              <div class="mt-[8px] ml-[38px] max-w-[281px]">
                <div class="text-13 mb-[12px] text-text-secondary">
                  <div>{{ address.address }}</div>
                  <div>{{ address.mobile }}</div>
                </div>
                <div class="flex border-t border-devider gap-[16px] pt-[8px] pb-[6px]">
                  <UiButton 
                    :type="'inline-text'" 
                    class="text-primary-500"
                  >
                    Edit
                  </UiButton>
                  <UiButton 
                    :type="'inline-text'" 
                    class="text-primary-500"
                    @click.native="removeAddress(address.id)"
                  >
                    Remove
                  </UiButton>
                </div>
              </div>
            </template>
          </UiRadioCustom>
        </div>
      </div>
      <div class="checkout-address__deliveries mt-[24px]">
        <div class="text-15-500">Choose Delivery Speed</div>
        <div class="radio-deliveries flex flex-wrap gap-[24px] mt-[16px]">
          <UiRadioCustom 
            v-for="(delivery, index) in deliveries"
            :key="index"
            :id="delivery.name"
            :type="'icon'"
            :name="'radio-deliveries'"
            class="max-w-[231px]"
            v-model="modelDelivery"
          >
            <div class="flex flex-col items-center gap-[8px] mb-[8px] relative">
              <div 
                v-if="delivery.price === 'Free'" 
                class="absolute top-[-12px] right-0 text-chip px-[12px] py-[2px] text-success-500 bg-success-opacity/[16%] rounded-full"
              >
                {{ delivery.price }}
              </div>
              <div 
                v-else
                class="absolute top-[-12px] right-0 text-chip px-[12px] py-[2px] text-secondary-500 bg-secondary-opacity/[16%] rounded-full"
              >
                {{ delivery.price }}
              </div>
              <UserStandardIcon v-if="delivery.name === 'Standard'" />
              <StarSmileIcon v-else-if="delivery.name === 'Express'" />
              <VipCrownIcon v-else-if="delivery.name === 'Overnight'" />
              <div class="text-15-500">{{ delivery.name }}</div>
              <div class="text-13 text-text-secondary">{{ delivery.desc }}</div>
            </div>
          </UiRadioCustom>
        </div>
      </div>
    </div>
    <div class="checkout-address__right lg:w-[334px]">
      <div class="border border-devider rounded-md">
        <div class="delivery p-[20px]">
          <div class="text-15-500">Estimated Delivery Date</div>
          <div class="delivery-list flex flex-col gap-[16px] mt-[16px]">
            <BlockProductCardDelivery
              v-for="product in products"
              :key="product.id"
              :img="product.img"
              :name="product.name"
            />
          </div>
        </div>
        <div class="price p-[20px] border-t border-b border-devider">
          <div class="price__title text-15-500">Price Details</div>
          <div class="price__list flex flex-col gap-[8px] mt-[16px]">
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