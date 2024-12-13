import { ref } from 'vue';
// Секции
export const home = ref(null);
export const features = ref(null);
export const team = ref(null);
export const faq = ref(null);
export const contact = ref(null);
// Секция в области видимости
export const visibleSection = ref(null);

export function setObserver(...sections) {
  const callback = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        visibleSection.value = entry;
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  })
  
  sections.forEach((el) => {
    if(el.value) {
      observer.observe(el.value);
    }
  });
}