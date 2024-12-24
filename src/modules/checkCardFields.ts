import { ref, watch } from 'vue';

export const cardNumber = ref<string | null>(null);
export const cardName = ref<string | null>(null);
export const cardDate = ref<string | null>(null);
export const cardCvv = ref<string | null>(null);

export const saveCard = ref<boolean>(false);

export const clearCardFields = () => {
  cardNumber.value = null;
  cardName.value = null;
  cardDate.value = null;
  cardCvv.value = null;
}

watch(saveCard, (newValue:boolean):void => {
  newValue ? console.log('Lets Save Card!') : console.log('Don`t Save Card!');
})