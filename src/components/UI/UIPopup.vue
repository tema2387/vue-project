<script setup>
import { computed } from 'vue';

// icons
import CloseLineIcon from '@/components/UI/svg/CloseLineIcon.vue';

const props = defineProps({
  type: {
    type: String,
    default() {
      return '';
    },
  },
  title: {
    type: [Number, String],
    default() {
      return 'Popup!';
    }
  },
  color: {
    type: String,
    default() {
      return 'success';
    }
  },
});

const successColor = 'text-success-500';
const successBg = 'bg-success-opacity/[16%]';

const errorColor = 'text-error-500';
const errorBg = 'bg-error-opacity/[16%]';

const setColor = computed(() => {
  return props.color === 'error' ? errorColor : successColor;
})

const setBg = computed(() => {
  return props.color === 'error' ? errorBg : successBg;
})

const emit = defineEmits(['close']);
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
      class="flex-1"
      :class="setColor"
    >
      <h5>{{ title }}</h5>
    </div>
    <CloseLineIcon 
      @click="emit('close')"
      class="cursor-pointer" 
      :class="setColor"
    />
  </div>
</template>