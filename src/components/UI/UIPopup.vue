<script lang="ts" setup>
import { computed } from 'vue';
// Иконки
import CloseLineIcon from '@/components/UI/svg/CloseLineIcon.vue';

type TypeProps = {
  type?: string,
  title?: string,
  color?: string,
}

const props = withDefaults(defineProps<TypeProps>(), {
  title: 'title',
});

const emit = defineEmits<{
  (e: 'close'): void,
}>();

const successColor: string = 'text-success-500';
const successBg: string = 'bg-success-opacity/[16%]';

const errorColor: string = 'text-error-500';
const errorBg: string = 'bg-error-opacity/[16%]';

const setColor = computed<string>(() => {
  return props.color === 'error' ? errorColor : successColor;
})

const setBg = computed<string>(() => {
  return props.color === 'error' ? errorBg : successBg;
})
</script>
<template>
  <div 
    v-if="type === 'offer'" 
    class="popup flex gap-[16px] items-start p-[20px] rounded-md"
    :class="setBg"
  >
    <img 
      src="/img/percent-line.png" 
      class="p-[4px] rounded-md" 
      :class="color === 'error' ? 'bg-error-500' : 'bg-success-500'"
      alt="popup-icon" 
    />
    <div 
      class="flex-1"
      :class="setColor"
    >
      <h5>Available Offer</h5>
      <div>- 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards</div>
      <div>- 50% Cutback Voucher of up to $60 on first ever PayPal transaction. TCA</div>
    </div>
    <CloseLineIcon 
      @click="emit('close')" 
      class="cursor-pointer"
      :class="setColor"
    />
  </div>
  <div 
    v-else 
    class="popup flex gap-[16px] items-center px-[20px] py-[10px] rounded-md"
    :class="setBg"
  >
    <div 
      class="popup__title flex-1"
      :class="setColor"
    >
      <h5>{{ title }}</h5>
    </div>
    <CloseLineIcon 
      @click="emit('close')"
      class="popup__icon cursor-pointer" 
      :class="setColor"
    />
  </div>
</template>