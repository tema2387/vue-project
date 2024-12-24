import { ref, watch } from 'vue';

export const activeDarkTheme = ref<boolean>(false);
const html = document.querySelector('html');

export function changeTheme():void {
  activeDarkTheme.value = !activeDarkTheme.value;
}

if (document.cookie.includes('theme=dark')) {
  (html as HTMLHtmlElement).classList.add('dark');
  activeDarkTheme.value = true;
}

watch(activeDarkTheme, (newValue:boolean):void => {
  if (newValue) {
    (html as HTMLHtmlElement).classList.add('dark');
    document.cookie = 'theme=dark; max-age=3600';
  } else {
    (html as HTMLHtmlElement).classList.remove('dark');
    document.cookie = 'theme=dark; max-age=-1';
  }
});