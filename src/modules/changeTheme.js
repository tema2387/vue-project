import { ref, watch } from 'vue';

const activeDarkTheme = ref(false);
const html = document.querySelector('html');

if (document.cookie.includes('theme=dark')) {
  html.classList.add('dark');
  activeDarkTheme.value = true;
}

watch(activeDarkTheme, (value) => {
  if (value === true) {
    html.classList.add('dark');
    document.cookie = 'theme=dark; max-age=3600';
  } else {
    html.classList.remove('dark');
    document.cookie = 'theme=dark; max-age=-1';
  }
});

export default activeDarkTheme;