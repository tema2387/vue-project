import { ref, Ref } from 'vue';
// Секции
export const home = ref<HTMLElement | null>(null);
export const features = ref<HTMLElement | null>(null);
export const team = ref<HTMLElement | null>(null);
export const faq = ref<HTMLElement | null>(null);
export const contact = ref<HTMLElement | null>(null);
// Секция в области видимости
export const visibleSection = ref<IntersectionObserverEntry | null>(null);

export function setObserver(...sections:Ref[]):void {
  const callback:IntersectionObserverCallback = (entries:IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        visibleSection.value = entry;
      }
    });
  };

  const options:IntersectionObserverInit = {
    root: null,
    threshold: 0.5,
  }

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((el) => {
    if(el.value) {
      observer.observe(el.value);
    }
  });
}