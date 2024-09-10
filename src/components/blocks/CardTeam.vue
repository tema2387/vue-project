<script setup>
import { computed } from 'vue';
// Icons
import FacebookCircleIcon from '@/components/UI/svg/FacebookCircleIcon.vue';
import TwitterLineIcon from '@/components/UI/svg/TwitterLineIcon.vue';
import LinkedInBoxIcon from '@/components/UI/svg/LinkedInBoxIcon.vue';

// color can be 'primary', 'error', 'success', 'info'
const props = defineProps({
  img: {
    type: String,
    default() {
      return '/public/img/woman-1.png'
    }
  },
  name: {
    type: String,
    default() {
      return 'name';
    }
  },
  job: {
    type: String,
    default() {
      return 'job';
    },
  },
  color: {
    type: String,
    default() {
      return 'primary';
    }
  },
})

const colorBg = computed(() => {
  return props.color === 'error' ? 'bg-error-opacity/[16%]' 
    : props.color === 'success' ? 'bg-success-opacity/[16%]' 
      : props.color === 'info' ? 'bg-info-opacity/[16%]' 
        : 'bg-primary-opacity/[16%]';
})

const colorBorder = computed(() => {
  return props.color === 'error' ? 'hover:border-error-opacity/[16%]' 
    : props.color === 'success' ? 'hover:border-success-opacity/[16%]' 
      : props.color === 'info' ? 'hover:border-info-opacity/[16%]' 
        : 'hover:border-primary-opacity/[16%]';
});

</script>
<template>
  <div 
    class="card group duration-200 rounded-md border border-devider w-[265px]" 
    :class="colorBorder"
  >
    <div 
      class="card__bg rounded-t-md relative h-[189px]" 
      :class="colorBg"
    >
      <img 
        :src="img" 
        class="absolute bottom-0 left-[50%] translate-x-[-50%]" 
        alt="team-photo"
      >
    </div>
    <div class="card__content py-[20px] text-center">
      <h5 class="card__name">{{ name }}</h5>
      <span class="card__job text-text-secondary">{{ job }}</span>
      <div class="card__socials mt-[12px] text-text-primary flex gap-[12px] justify-center">
        <UiLink :type="'outside'">
          <FacebookCircleIcon class="group-hover:text-color-facebook-icon duration-200" />
        </UiLink>
        <UiLink :type="'outside'">
          <TwitterLineIcon class="group-hover:text-color-twitter-icon duration-200" />
        </UiLink>
        <UiLink :type="'outside'">
          <LinkedInBoxIcon class="group-hover:text-color-linkedin-icon duration-200" />
        </UiLink>
      </div>
    </div>
  </div>
</template>