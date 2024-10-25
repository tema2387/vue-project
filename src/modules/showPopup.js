import { ref } from 'vue';

// color can be 'success' and 'error'
export const popupStatus = ref(false);
export const popupText = ref('');
export const popupColor = ref('success');

let timeout;

export function activatePopup(text, color) {
  if(popupStatus.value === false) {
    popupText.value = text;
    popupColor.value = color;
    popupStatus.value = true;

    timeout = setTimeout(() => {
      popupStatus.value = false;
    }, 4000)
  }
}

export function closePopup() {
  popupStatus.value = false;
  clearTimeout(timeout);
}