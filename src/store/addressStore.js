import { ref, watch } from 'vue';

// selected address by id
export const selectedAddress = ref(1);

export const addresses = ref([
  {id: 1, name: 'John Doe', email: 'john.doe@example.com', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890', card: 'Cash / Card on delivery available', location: 'Home'},
  {id: 2, name: 'Bernard Hunter', email: 'bernard.hunter@example.com', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890', card: 'Cash / Card on delivery available', location: 'Office'},
  {id: 3, name: 'Adrian Stanley', email: 'adrian.stanley@example.com', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890', card: 'Cash / Card on delivery available', location: 'Office'},
]);

// filter addresses by selectedAddress id 
export const address = ref(addresses.value.find((el) => el.id === selectedAddress.value));

// observe on change selectedAddress and change address
watch(selectedAddress, (newValue) => {
  address.value = addresses.value.find((el) => el.id === newValue);
})

// remove address from addresses array
export function removeAddress(id) {
  addresses.value = addresses.value.filter((el) => el.id !== id);
}