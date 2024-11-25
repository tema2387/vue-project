import { ref, watch } from 'vue';

// Список нескрытых элементов 
export const navList = ref([
  { name: 'Home', link: '/' },
  { name: 'Order', link: '/order' },
  { name: 'Plans', link: '/plans' },
  { name: 'Help center', link: '/help' },
  { name: 'Checkout', link: '/checkout' },
]);

// Список скрытых элементов в dropdown
export const hiddenNavList = ref([]);

// Установка текущей ширины экрана и элементов меню при перезагрузке страницы
export function loadWindowWidth() {
  dynamicWidth.value = window.innerWidth;
  hideNavItem();
  showNavItem();
}

let dynamicWidth = ref(0);
let point = 1240;

// Слежка за изменяемой шириной
watch(dynamicWidth, (newValue, oldValue) => { 
  // Проверка на расширение или сужение экрана
  if(newValue > oldValue) {
    showNavItem();
  } else {
    hideNavItem();
  }
})

// Установка ширины при событий resize
window.addEventListener('resize', () => {
  dynamicWidth.value = window.innerWidth;
})

// Функция показа элементов меню
function showNavItem() {
  let element;

  while(dynamicWidth.value > point + 100 && hiddenNavList.value.length) {
    element = hiddenNavList.value.pop();
    navList.value.push(element);
    point += 100; 
  }
}

// Функция скрытия элементов меню
function hideNavItem() {
  let element;

  while(dynamicWidth.value < point && navList.value.length) {
    element = navList.value.pop();
    hiddenNavList.value.push(element);
    point -= 100;
  }
}