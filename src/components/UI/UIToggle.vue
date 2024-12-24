<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { VueToggles } from 'vue-toggles';

type TypeProps = {
  leftTextFalse?: string,
  rightTextTrue?: string
}

const props = defineProps<TypeProps>();

let vueToggleDot: HTMLElement | null;

const valueToggle = ref<boolean>(false);

const emit = defineEmits<{
  (e: 'valueToggle', valueToggle: boolean): void,
}>()

onMounted((): void => {
  vueToggleDot = document.querySelector('.vue-toggles__dot');
})

function toggle() {
  valueToggle.value = !valueToggle.value;
  emit('valueToggle', valueToggle.value);
}

watch(valueToggle, (newValue: boolean) => {
  if(vueToggleDot) {
    newValue ? vueToggleDot.classList.add('vue-toggles__dot-active') 
      : vueToggleDot.classList.remove('vue-toggles__dot-active');
  }
})
</script>
<template>
  <div class="toggle flex items-center gap-[13px]">
    <div 
      v-if="props.leftTextFalse" 
      class="toggle-text__false"
    >
      {{ leftTextFalse }}
    </div>
    <VueToggles 
      :width="30"
      :height="18"
      :value="valueToggle"
      :checkedBg="'var(--primary-500)'"
      :uncheckedBg="'var(--action-focus)'"
      @click="toggle"
    />
    <div 
      v-if="props.rightTextTrue" 
      class="toggle-text__true"
    >
      {{ rightTextTrue }}
    </div>
  </div>
</template>