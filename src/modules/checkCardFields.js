import { ref, watch } from 'vue';

export const cardNumber = ref(null);
export const cardName = ref(null);
export const cardDate = ref(null);
export const cardCvv = ref(null);

export const saveCard = ref(false);

export const clearCardFields = () => {
  cardNumber.value = null;
  cardName.value = null;
  cardDate.value = null;
  cardCvv.value = null;
}

watch(saveCard, (newValue) => {
  newValue ? console.log('Lets Save Card!') : console.log('Don`t Save Card!');
})