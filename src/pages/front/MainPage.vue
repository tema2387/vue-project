<script setup>
import { ref } from 'vue';
// Swiper slider
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components
import FrontLayout from '@/layouts/FrontLayout.vue';
import SectionWrapper from '@/components/blocks/SectionWrapper.vue';
import SlideReview from '@/components/blocks/SlideReview.vue';
import CardTeam from '@/components/blocks/CardTeam.vue';
import UiInputRange from '@/components/UI/UiInputRange.vue';
import Plan from '@/components/blocks/Plan.vue';
import UiAccordion from '@/components/UI/UiAccordion.vue';
import UiInputText from '@/components/UI/UiInputText.vue';
import UiButton from '@/components/UI/UiButton.vue';
import UiTextarea from '@/components/UI/UiTextarea.vue';

// Icons
import LaptopChargingIcon from '@/components/UI/svg/LaptopChargingIcon.vue';
import TransitionUpIcon from '@/components/UI/svg/TransitionUpIcon.vue';
import EditIcon from '@/components/UI/svg/EditIcon.vue';
import SelectSolidIcon from '@/components/UI/svg/SelectSolidIcon.vue';
import LifebeltIcon from '@/components/UI/svg/LifebeltIcon.vue';
import GoogleDocsIcon from '@/components/UI/svg/GoogleDocsIcon.vue';
import LevisIcon from '@/components/UI/svg/LevisIcon.vue';
import EckerdIcon from '@/components/UI/svg/EckerdIcon.vue';
import AirBnbIcon from '@/components/UI/svg/AirBnbIcon.vue';
import DribbbleIcon from '@/components/UI/svg/DribbbleIcon.vue';
import ContinentalsIcon from '@/components/UI/svg/ContinentalsIcon.vue';
import SectionStarIcon from '@/components/UI/svg/SectionStarIcon.vue';
import SectionCheckIcon from '@/components/UI/svg/SectionCheckIcon.vue';

const activeAccordion = ref(2);

function changeAccordion(activeIndex) {
  activeAccordion.value = activeIndex;
}

 // JS modules
import activeDarkTheme from '@/modules/changeTheme.js';
</script>

<template>
  <FrontLayout>
    <div class="front-main-page">
      <section class="start relative">
        <img src="/public/img/front-bg-image.png" class="start__background" alt="start-bg">
        <div class="start__content absolute translate-x-[-50%] left-[50%] top-[126px]">
          <div class="start__top flex flex-col items-center text-center">
            <h2 class="start__title text-primary-500">All in one sass application<br>for your business</h2>
            <p class="start__desc mt-[16px]">No coding required to make customizations.<br>The live customizer has everything your marketing need.</p>
            <UiButton class="mt-[32px]">Get early access</UiButton>
          </div>
          <div class="start__bottom">
            <img v-if="activeDarkTheme" src="/public/img/hero-image-dark.png" alt="hero-img" />
            <img v-else src="/public/img/hero-image-light.png" alt="hero-img" />
          </div>
        </div>
      </section>
      <section class="features py-[100px]">
        <div class="features__content container">
          <SectionWrapper 
            :title="'USEFUL FEATURES'"
            :subtitleSmall="'to start your next project'"
            :subtitleBold="'Everything you need'"
            :desc="'Not just a set of tools, the package includes ready-to-deploy conceptual application.'"
          >
            <ul class="features__list flex justify-between flex-wrap gap-x-[24px] gap-y-[48px] mt-[48px]">
              <li class="features__item max-w-[364px] flex flex-col items-center group text-center">
                <div class="features__icon duration-200 bg-transparent p-[20px] border-2 border-primary-opacity/[32%] group-hover:bg-primary-opacity/[16%] rounded-[50%] text-primary-500">
                  <LaptopChargingIcon />
                </div>
                <h5 class="features__item-title mt-[16px]">
                  Quality Code
                </h5>
                <p class="features__item-subtitle mt-[8px] text-text-secondary">
                  Code structure that all developers will easily understand and fall in love with.
                </p>
              </li>
              <li class="features__item max-w-[364px] flex flex-col items-center group text-center">
                <div class="features__icon duration-200 bg-transparent p-[20px] border-2 border-primary-opacity/[32%] group-hover:bg-primary-opacity/[16%] rounded-[50%] text-primary-500">               
                  <TransitionUpIcon />
                </div>
                <h5 class="features__item-title mt-[16px]">
                  Continuous Updates
                </h5>
                <p class="features__item-subtitle mt-[8px] text-text-secondary">
                  Free updates for the next 12 months, including new demos and features.
                </p>
              </li>
              <li class="features__item max-w-[364px] flex flex-col items-center group text-center">
                <div class="features__icon duration-200 bg-transparent p-[20px] border-2 border-primary-opacity/[32%] group-hover:bg-primary-opacity/[16%] rounded-[50%] text-primary-500">
                  <EditIcon />
                </div>
                <h5 class="features__item-title mt-[16px]">
                  Stater-Kit
                </h5>
                <p class="features__item-subtitle mt-[8px] text-text-secondary">
                  Start your project quickly without having to remove unnecessary features.
                </p>
              </li>
              <li class="features__item max-w-[364px] flex flex-col items-center group text-center">
                <div class="features__icon duration-200 bg-transparent p-[20px] border-2 border-primary-opacity/[32%] group-hover:bg-primary-opacity/[16%] rounded-[50%] text-primary-500">
                  <SelectSolidIcon />
                </div>
                <h5 class="features__item-title mt-[16px]">
                  API Ready
                </h5>
                <p class="features__item-subtitle mt-[8px] text-text-secondary">
                  Just change the endpoint and see your own data loaded within seconds.
                </p>
              </li>
              <li class="features__item max-w-[364px] flex flex-col items-center group text-center">
                <div class="features__icon duration-200 bg-transparent p-[20px] border-2 border-primary-opacity/[32%] group-hover:bg-primary-opacity/[16%] rounded-[50%] text-primary-500">
                  <LifebeltIcon />
                </div>
                <h5 class="features__item-title mt-[16px]">
                  Excellent Support
                </h5>
                <p class="features__item-subtitle mt-[8px] text-text-secondary">
                  An easy-to-follow doc with lots of references and code examples.
                </p>
              </li>
              <li class="features__item max-w-[364px] flex flex-col items-center group text-center">
                <div class="features__icon duration-200 bg-transparent p-[20px] border-2 border-primary-opacity/[32%] group-hover:bg-primary-opacity/[16%] rounded-[50%] text-primary-500">
                  <GoogleDocsIcon />
                </div>
                <h5 class="features__item-title mt-[16px]">
                  Well Documented
                </h5>
                <p class="features__item-subtitle mt-[8px] text-text-secondary">
                  An easy-to-follow doc with lots of references and code examples.
                </p>
              </li>
            </ul>
          </SectionWrapper>
        </div>
      </section>
      <section class="reviews bg-body-bg py-[100px]">
        <div class="reviews__content">
          <SectionWrapper
            :title="'REAL CUSTOMERS REVIEWS'"
            :subtitleSmall="'from clients'"
            :subtitleBold="'Success stories'"
            :desc="'See what our customers have to say about their experience.'"
          >
            <div class="reviews__slider mt-[64px]">
              <Swiper 
                :slidesPerView="'auto'"
                :centeredSlides="true"
                :initialSlide="2"
                :spaceBetween="24"
                :slideToClickedSlide="true"
                :pagination="{
                  clickable: true,
                }"
                :modules="[Pagination]"
                >
                <SwiperSlide v-slot="{ isActive }">
                  <SlideReview
                      :src="'/public/img/logos/eckerd-logo.png'"
                      :desc="'“Ive never used a theme as versatile and flexible as Vuexy. Its my go to for building dashboard sites on almost any project.”'"
                      :authorName="'Eugenia Moore'"
                      :authorJob="'Founder of HubSpot'"
                      :active="isActive"
                    >
                  </SlideReview>
                </SwiperSlide>
                <SwiperSlide v-slot="{ isActive }">
                  <SlideReview
                      :src="'/public/img/logos/levis-logo.png'"
                      :desc="'Materio is awesome, and I particularly enjoy knowing that if I get stuck on something.'"
                      :authorName="'Tommy Hoffman'"
                      :authorJob="'Founder of Levis'"
                      :active="isActive"
                    >
                  </SlideReview>
                </SwiperSlide>
                <SwiperSlide v-slot="{ isActive }">
                  <SlideReview
                      :src="'/public/img/logos/airbnb-logo.png'"
                      :desc="'This template is superior in so many ways. The code, the design, the regular updates, the support.. It’s the whole package. Excellent Work.'"
                      :authorName="'Eugenia Moore'"
                      :authorJob="'CTO of Airbnb'"
                      :active="isActive"
                    >
                  </SlideReview>
                </SwiperSlide>
                <SwiperSlide v-slot="{ isActive }">
                  <SlideReview
                      :src="'/public/img/logos/continentals-logo.png'"
                      :desc="'All the requirements for developers have been taken into consideration, so I’m able to build any interface I want.'"
                      :authorName="'Sara Smith'"
                      :authorJob="'Founder of Continental'"
                      :active="isActive"
                    >
                  </SlideReview>
                </SwiperSlide>
                <SwiperSlide v-slot="{ isActive }">
                  <SlideReview
                      :src="'/public/img/logos/dribbble-logo.png'"
                      :desc="'“Ive never used a theme as versatile and flexible as Vuexy. Its my go to for building dashboard sites on almost any project.”'"
                      :authorName="'Eugenia Moore'"
                      :authorJob="'Founder of HubSpot'"
                      :active="isActive"
                    >
                  </SlideReview>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="reviews__logos mt-[98px] flex gap-[64px] justify-center">
              <LevisIcon />
              <ContinentalsIcon />
              <AirBnbIcon />
              <EckerdIcon />
              <DribbbleIcon />
            </div>
          </SectionWrapper>
        </div>
      </section>
      <section class="team py-[100px]">
        <div class="team__content relative container">
          <SectionStarIcon class="absolute right-0 top-0" />
          <SectionWrapper
            :title="'OUR GREAT TEAM'"
            :subtitleSmall="'by Real People'"
            :subtitleBold="'Supported'"
            :desc="'Who is behind these great-looking interfaces?'"
          >
            <div class="team__list flex gap-[24px] mt-[100px]">
              <CardTeam 
                :img="'/public/img/woman-1.png'" 
                :color="'primary'" 
                :name="'Sophie Gilbert'" 
                :job="'Project Manager'"
              />
              <CardTeam 
                :img="'/public/img/man-1.png'" 
                :color="'error'" 
                :name="'Nannie Ford'" 
                :job="'Development Lead'"
              />
              <CardTeam 
                :img="'/public/img/woman-2.png'" 
                :color="'success'" 
                :name="'Chris Watkins'" 
                :job="'Marketing Manager'"
              />
              <CardTeam 
                :img="'/public/img/man-2.png'" 
                :color="'info'" 
                :name="'Paul Miles'" 
                :job="'UI Designer'"
              />
            </div>
          </SectionWrapper>
        </div>
      </section>
      <section class="plans bg-body-bg py-[100px]">
        <div class="plans__content container relative">
          <SectionCheckIcon class="absolute left-0 top-0" />
          <SectionWrapper
            :title="'PRICING PLANS'"
            :subtitleSmall="'designed for you'"
            :subtitleBold="'Tailored pricing plans'"
            :desc="'All plans include 40+ advanced tools and features to boost your product.'"
            :descTwo="'Choose the best plan to fit your needs.'"
          >
            <div class="plans__range-slider mt-[64px]">
              <UiInputRange />
            </div>
            <div id="section-plans-list" class="plans__list flex gap-[24px] mt-[64px]">
              <Plan
                :id="1"
                :plan="'Basic Plan'"
                :wallet="'$'"
                :price="'20'"
                :possibilities="['Timeline', 'Basic search', 'Live chat widget', 'Email marketing', 'Custom Forms', 'Traffic analytics']"
                :supportPlan="'Basic Support'"
                :supportHow="'Only Email'"
                :supportTime="'AVG. Time: 24h'"
              />
              <Plan
                :id="2"
                :plan="'Favorit Plan'"
                :wallet="'$'"
                :price="'51'"
                :possibilities="['Everything in basic', 'Timeline with database', 'Advanced search', 'Marketing automation', 'Advanced chatbot', 'Campaign management']"
                :supportPlan="'Standard Support'"
                :supportHow="'Email & Chat'"
                :supportTime="'AVG. Time: 6h'"
              />
              <Plan
                :id="3"
                :plan="'Standard Plan'"
                :wallet="'$'"
                :price="'99'"
                :possibilities="['Everything in premium', 'Timeline with database', 'Fuzzy search', 'A/B testing sandbox', 'Custom permissions', 'Social media automation']"
                :supportPlan="'Exclusive Support'"
                :supportHow="'Email, Chat & Google Meet'"
                :supportTime="'Live Support'"
              />
            </div>
          </SectionWrapper>
        </div>
      </section>
      <section class="count py-[84px]">
        <div class="count__content container">
          <ul class="count__list flex gap-[24px]">
            <li class="count__item flex flex-col items-center w-[267px]">
              <img src="/public/icon/layout-line.svg" alt="count-img" class="max-w-max p-[25px] rounded-full bg-primary-opacity/[16%]" />
              <div class="count__item-title mt-[24px] text-center">
                <div class="text-count-bold">137+</div>
                <div class="text-15-500 text-text-secondary">Completed Sites</div>
              </div>
            </li>
            <li class="count__item flex flex-col items-center w-[267px]">
              <img src="/public/icon/time-line.svg" alt="count-img" class="max-w-max p-[25px] rounded-full bg-success-opacity/[16%]" />
              <div class="count__item-title mt-[24px] text-center">
                <div class="text-count-bold">1100+</div>
                <div class="text-15-500 text-text-secondary">Working Hourse</div>
              </div>
            </li>
            <li class="count__item flex flex-col items-center w-[267px]">
              <img src="/public/icon/user-smile-line.svg" alt="count-img" class="max-w-max p-[25px] rounded-full bg-warning-500" />
              <div class="count__item-title mt-[24px] text-center">
                <div class="text-count-bold">137+</div>
                <div class="text-15-500 text-text-secondary">Happy Customers</div>
              </div>
            </li>
            <li class="count__item flex flex-col items-center w-[267px]">
              <img src="/public/icon/award-line.svg" alt="count-img" class="max-w-max p-[25px] rounded-full bg-info-opacity/[16%]" />
              <div class="count__item-title mt-[24px] text-center">
                <div class="text-count-bold">23+</div>
                <div class="text-15-500 text-text-secondary">Awards Winning</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="faq bg-body-bg py-[100px]">
        <div class="faq__content container relative">
          <SectionStarIcon class="absolute right-0 top-0" />
          <SectionWrapper
            :title="'FAQ'"
            :subtitleSmall="'Frequently asked'"
            :subtitleBold="'questions'"
            :desc="'Browse through these FAQs to find answers to commonly asked questions.'"
            :subtitleBoldOnRight="true"
          >
            <div class="faq__section-content flex gap-[100px] mt-[64px]">
              <img src="/public/img/Illustration-faq-section.png" alt="faq-img" class="object-contain ml-[200px]">
              <div class="faq__accordion flex flex-1 flex-col gap-[8px]"> 
                <UiAccordion 
                  :title="'Do you charge for each upgrade?'"
                  :text="'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description.'"
                  :status="activeAccordion === 1"
                  @show="changeAccordion(1)"
                />
                <UiAccordion 
                  :title="'What is regular license?'"
                  :text="'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description.'"
                  :status="activeAccordion === 2"
                  @show="changeAccordion(2)"
                />
                <UiAccordion 
                  :title="'What is extended license?'"
                  :text="'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description.'"
                  :status="activeAccordion === 3"
                  @show="changeAccordion(3)"
                />
                <UiAccordion 
                  :title="'Which license is applicable for SASS application?'"
                  :text="'Regular license can be used for end products that do not charge users for access or service(access is free and there will be no monthly subscription fee). Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains(unique setup). For more info on regular license you can check official description.'"
                  :status="activeAccordion === 4"
                  @show="changeAccordion(4)"
                />
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
      <section class="ready py-[81px]">
        <div class="ready__content container relative">
          <img src="/public/img/section-ready-image.png" alt="ready-img" class="absolute right-0 bottom-[-115px]" />
          <div class="ready__left">
            <div class="ready__title text-primary-500 text-title-ready-bold">Ready to Get Started?</div>
            <p class="ready__subtitle text-text-secondary mt-[4px] text-15-500">Start your project with a 14-day free trial</p>
            <UiButton 
              :size="'md'"
              :text="'md'"
              :rightIcon="true" 
              class="max-w-max mt-[32px]"
            >
              Get Started
            </UiButton>
          </div>
        </div>
      </section>
      <section class="contact py-[100px] bg-body-bg">
        <div class="contact__content container">
          <SectionWrapper
            :title="'CONTACT US'"
            :subtitleSmall="'together'"
            :subtitleBold="'Lets work'"
            :desc="'Any question or remark? Just write us a message'"
          >
            <div class="contact__section-content mt-[60px] flex gap-[24px]">
              <div class="contact__left max-w-[450px] text-bg-white p-[32px] bg-primary-500 rounded-md">
                <div class="contact text-15-500">Let’s contact with us</div>
                <h4 class="contact__title mt-[6px]">Share your ideas or requirement with our experts.</h4>
                <div class="contact__line-one mt-[30px] flex items-center gap-[16px]">
                  <img src="/public/img/man-circle-1.png" alt="man-img" />
                  <div class="h-[38px] w-full rounded-full   bg-primary-400"></div>
                  <img src="/public/img/woman-circle-2.png" alt="woman-img" />
                </div>
                <div class="contact__line-two mt-[16px] flex items-center gap-[16px]">
                  <div class="h-[38px] w-[100px] rounded-full bg-primary-400"></div>
                  <img src="/public/img/woman-circle-3.png" alt="woman-img" />
                  <div class="h-[38px] w-[208px] rounded-full bg-primary-400"></div>
                </div>
                <p class="contact__desc mt-[20px]">Looking for more customization, more features, and more anything? Don’t worry, We’ve provided you with an entire team of experienced professionals.</p>
              </div>
              <div class="contact__form w-full p-[20px] bg-paper-bg rounded-md">
                <h5 class="contact__form-title">Share your ideas</h5>
                <form class="mt-[20px]">
                  <div class="flex gap-[20px]">
                    <UiInputText 
                      :id="'form-name'"
                      :size="'md'"
                      :label="'Full name'"
                      class="w-full" 
                    />
                    <UiInputText 
                      :id="'form-address'"
                      :size="'md'"
                      :label="'Email address'"
                      class="w-full"  
                    />
                  </div>
                  <UiTextarea 
                    :id="'form-textarea'"
                    :label="'Full name'"
                    :size="'md'"
                    class="h-[186px] mt-[20px]"
                  />
                  <UiButton 
                    :size="'md'" 
                    :text="'md'" 
                    class="max-w-max mt-[20px]"
                  >
                    Send inquiry
                  </UiButton>
                </form>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  </FrontLayout>
</template>