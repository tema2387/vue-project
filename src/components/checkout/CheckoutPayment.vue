<script lang="ts" setup>
import { ref } from 'vue';
// Компоненты
import UiPopup from '@/components/UI/UiPopup.vue';
import UiInputText from '@/components/UI/UiInputText.vue';
import UiToggle from '@/components/UI/UiToggle.vue';
// Модули
import { cardNumber, cardName, cardDate, cardCvv, clearCardFields, saveCard } from '@/modules/checkCardFields';
// Хранилище
import { useAddressStore } from '@/store/addressStore';

const addressStore = useAddressStore()

const emit = defineEmits<{
  (e: 'changeAddress'): void
}>();

const popupOfferStatus = ref(true);
</script>
<template>
  <div class="checkout-payment flex flex-col gap-[24px] lg:flex-row">
    <div class="checkout-payment__left flex-1">
      <UiPopup 
        v-if="popupOfferStatus" 
        :type="'offer'"
        @close="popupOfferStatus = false"
      />
      <div class="checkout-payment__pay mt-[24px]">
        <div class="checkout-payment__pay-choose flex gap-[4px]">
          <UiButton
            :size="'md'" 
            :text="'md'" 
          >
            Card
          </UiButton>
          <UiButton 
            :size="'md'" 
            :text="'md'" 
            :type="'text'"
          >
            Cash On Delivery
          </UiButton>
          <UiButton 
            :size="'md'"
            :text="'md'"
            :type="'text'"
          >
            Gift Card
          </UiButton>
        </div>
        <div class="checkout-payment__pay-method max-w-[450px] mt-[24px">
          <div class="checkout-payment__inputs mt-[24px]">
            <div class="checkout-payment__inputs-top">
              <UiInputText 
                :id="'card-number'" 
                :size="'md'"
                :label="'Card Number'"
                v-model="cardNumber" 
              />
            </div>
            <div class="checkout-payment__inputs-bottom mt-[20px] flex gap-[20px]">
              <UiInputText 
                :id="'card-name'" 
                :size="'md'"
                :label="'Name'" 
                class="basis-full"
                v-model="cardName"
              />
              <UiInputText 
                :id="'card-date'" 
                :size="'md'"
                :label="'EXP. date'" 
                v-model="cardDate"
              />
              <UiInputText 
                :id="'card-cvv'" 
                :size="'md'"
                :label="'CVV'"
                v-model="cardCvv"
              />
            </div>
          </div>
          <UiToggle 
            :rightTextTrue="'Save card for future billing?'" 
            class="mt-[25px] ml-[7px]"
            v-model="saveCard"
          >
          </UiToggle>
          <div class="flex gap-[16px] mt-[25px]">
            <UiButton 
              :size="'md'" 
              :text="'md'" 
            >
              Save Changes
            </UiButton>
            <UiButton 
              :size="'md'"
              :text="'md'"
              :type="'outline'"
              :color="'secondary'"
              @click="clearCardFields"
            >
              Reset
            </UiButton>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-payment__right">
      <div class="lg:w-[334px] border border-devider rounded-md">
        <div class="price p-[20px] border-b border-devider">
          <div class="price__title text-15-500">Price Details</div>
          <div class="price__list flex flex-col gap-[8px] mt-[16px]">
            <div class="flex justify-between">
              <div>Order Total</div>
              <div class="text-text-secondary">$1198.00</div>
            </div>
            <div class="flex justify-between">
              <div>Delivery to</div>
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
              <div class="text-text-secondary">$1198.00</div>
            </div>
            <div class="flex text-15-500 justify-between items-center">
              <div>Deliver to</div>
              <div 
                v-if="addressStore.selectedAddress?.location === 'Home'" 
                class="px-[12px] py-[2px] bg-primary-opacity/[16%] text-primary-500 rounded-full max-w-max"
              >
                {{ addressStore.selectedAddress.location }}
              </div>
              <div 
                v-else-if="addressStore.selectedAddress?.location === 'Office'"
                class="px-[12px] py-[2px] bg-success-opacity/[16%] text-success-500 rounded-full max-w-max"
              >
                {{ addressStore.selectedAddress.location }}
              </div>
            </div>
          </div>
          <div class="delivery-address mt-[16px]">
            <div>{{ addressStore.selectedAddress?.name }},</div>
            <div class="text-text-secondary">{{ addressStore.selectedAddress?.address }}</div>
            <div class="text-text-secondary">{{ addressStore.selectedAddress?.mobile }}</div>
          </div>
          <UiButton 
            :type="'inline-text'"
            class="mt-[16px] text-primary-500"
            @click="emit('changeAddress')"
          >
            Change address
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>