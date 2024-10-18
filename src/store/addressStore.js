import { ref } from 'vue';

export const addresses = ref([
  {id: 1, name: 'John Doe (Default)', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890 Cash / Card on delivery available', location: 'Home'},
  {id: 2, name: 'John Doe (Default)', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890 Cash / Card on delivery available', location: 'Office'},
  {id: 3, name: 'John Doe (Default)', address: '4135 Parkway Street, Los Angeles, CA, 90017.', mobile: 'Mobile : 1234567890 Cash / Card on delivery available', location: 'Office'},
]);

export function removeAddress(id) {
  addresses.value = addresses.value.filter((el) => el.id !== id);
}