// Типизация для библиотеки 'vue-toggles'
declare module 'vue-toggles' {
  import { DefineComponent } from 'vue';

  export interface VueTogglesProps {
    value: boolean;
    disabled?: boolean;
    reverse?: boolean;
    height?: string | number;
    width?: string | number;
    dotColor?: string;
    uncheckedBg?: string;
    checkedBg?: string;
    uncheckedTextColor?: string;
    checkedTextColor?: string;
    uncheckedText?: string;
    checkedText?: string;
    fontSize?: string;
    fontWeight?: string;
  }

  const VueToggles: DefineComponent<VueTogglesProps>;
  export default VueToggles;
}