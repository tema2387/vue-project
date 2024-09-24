import { ref } from "vue";

export default function loadingImage() {
  const loaded = ref(undefined);

  function loading(url) {
    const img = new Image();
    img.src = url;
  
    img.onload = () => {
      loaded.value = img.src;
    };
    img.onerror = () => console.error("Error Img load");
  }

  return { loaded, loading };
}