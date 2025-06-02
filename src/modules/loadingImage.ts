import { ref } from "vue";

export default function loadingImage() {
  const loaded = ref<string | null>(null);

  function loading(url: string): void {
    const img = new Image();
    img.src = url;
  
    img.onload = () => {
      loaded.value = img.src;
    };
    img.onerror = () => console.error(loaded.value, "Error Img load");
  }

  return { loaded, loading };
}