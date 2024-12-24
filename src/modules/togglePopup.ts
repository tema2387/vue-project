import { ref } from 'vue';

export const popupStatus = ref<boolean>(false);
export const popupText = ref<string>('');
export const popupColor = ref<string>('success');

type TypeTimeout = ReturnType<typeof setTimeout>;

let timeout: TypeTimeout;

export function activatePopup(text:string, color:string):void {
  if(popupStatus.value === false) {
    popupText.value = text;
    popupColor.value = color;
    popupStatus.value = true;

    timeout = setTimeout(() => {
      popupStatus.value = false;
    }, 4000)
  }
}

export function closePopup():void {
  popupStatus.value = false;
  clearTimeout(timeout);
}