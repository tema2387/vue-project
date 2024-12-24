import { ref, computed } from 'vue';

type TypeAddress = {
  id: string,
  name: string,
  email: string,
  address: string,
  mobile: string,
  card: string,
  location: string,
}

// Выбранный адрес по id
export const selectedAddressId = ref<string>('1');
// Текущий выбранный адрес из массива по id
export const selectedAddress = computed(() => {
  const findAddress = addresses.value.find((el) => el.id === selectedAddressId.value);

  if(findAddress) {
    return findAddress;
  }
})

export const addresses = ref<TypeAddress[]>([
  {id: '1', name: 'John Doe', email: 'john.doe@example.com', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890', card: 'Cash / Card on delivery available', location: 'Home'},
  {id: '2', name: 'Bernard Hunter', email: 'bernard.hunter@example.com', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890', card: 'Cash / Card on delivery available', location: 'Office'},
  {id: '3', name: 'Adrian Stanley', email: 'adrian.stanley@example.com', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890', card: 'Cash / Card on delivery available', location: 'Office'},
]);

// Удаление
export function removeAddress(id: string): void {
  addresses.value = addresses.value.filter((el) => el.id !== id);
}