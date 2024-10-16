<script setup>
import CloseLineIcon from "@/components/UI/svg/CloseLineIcon.vue";

const emit = defineEmits(['close'])

</script>
<template>
  <div class="popup flex gap-[16px] items-start p-[20px] rounded-md bg-success-opacity/[16%]">
    <img src="/public/img/percent-line.png" class="p-[4px] rounded-md bg-success-500" alt="popup-icon" />
    <div class="text-success-500 flex-1">
      <h5>Available Offer</h5>
      <div>- 0% Instant Discount on Bank of America Corp Bank Debit and Credit cards</div>
      <div>- 50% Cutback Voucher of up to $60 on first ever PayPal transaction. TCA</div>
    </div>
    <CloseLineIcon 
      @click="emit('close')" 
      class="text-success-500 cursor-pointer" 
    />
  </div>
</template>