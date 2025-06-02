<script lang="ts" setup>
import { ref } from "vue";
// Компоненты
import FrontLayout from "@/layouts/FrontLayout.vue";
import BlockPricingPlan from "@/components/blocks/BlockPricingPlan.vue";
import UiToggle from "@/components/UI/UiToggle.vue";
import UiAccordion from "@/components/UI/UiAccordion.vue";
import BlockBestPlan from "@/components/blocks/BlockBestPlan.vue";
// Иконки
import ArrowDownSaveIcon from "@/components/UI/svg/ArrowDownSaveIcon.vue";
import ApproveTableIcon from "@/components/UI/svg/ApproveTableIcon.vue";
import CancelTableIcon from "@/components/UI/svg/CancelTableIcon.vue";
// Хранилище
import { bestPlans } from "@/store/bestPlansStore";

const activeAccordion = ref<number>(2);
const annuallyPayCheckbox = ref<boolean>(false);

function setAnnuallyPayValue(value: boolean): void {
  annuallyPayCheckbox.value = value;
}
 
function changeAccordion(id: number): void {
  activeAccordion.value = id;
}
</script>
<template>
  <FrontLayout>
    <div class="plans-page">
      <section class="main px-[20px] py-[100px] bg-paper-bg">
        <div class="main__content container">
          <div class="main__top flex flex-col items-center">
            <h2 class="main__title">Pricing Plans</h2>
            <div class="main__desc mt-[8px] text-center">
              <p class="text-text-secondary">All plans include 40+ advanced tools and features to boost your product.</p>
              <p class="text-text-secondary">Choose the best plan to fit your needs.</p>
            </div>
            <div class="main__save mt-[15px] translate-x-[-10%] sm:translate-x-[80%] flex items-center">
              <span class="text-primary-500 rounded-full self-start py-[2px] px-[12px] bg-primary-opacity/[16%] block sm:hidden">Save up to 10%</span>
              <ArrowDownSaveIcon class="text-text-disabled mt-[11px] max-sm:ml-[9px] sm:mr-[9px] -scale-x-100 sm:scale-x-100 " />
              <span class="text-primary-500 rounded-full self-start py-[2px] px-[12px] bg-primary-opacity/[16%] hidden sm:block">Save up to 10%</span>
            </div>
            <UiToggle 
              :leftTextFalse="'Monthly'"
              :rightTextTrue="'Annually'"
              @valueToggle="setAnnuallyPayValue"
              class="mt-[20px]"
            />
          </div>
          <div class="main__bottom mt-[32px] flex flex-wrap gap-[24px]">
            <BlockPricingPlan
              :alreadyActivePlan="true"
              :title="'Basic'"
              :subtitle="'A simple start for everyone'"
              :wallet="'$'"
              :price="'0'"
              :possibilities="['100 responses a month', 'Unlimited forms and surveys', 'Unlimited fields', 'Basic form creation tools', 'Up to 2 subdomains']"
              :img="'/img/tree-1-image.png'"
            />
            <BlockPricingPlan
              :title="'Standard'"
              :subtitle="'For small to medium businesses'"
              :wallet="'$'"
              :price="'49'"
              :priceYearActive="annuallyPayCheckbox"
              :priceYear="'480'"
              :popular="true"
              :possibilities="['Unlimited responses', 'Unlimited forms and surveys', 'Instagram profile page', 'Google Docs integration', 'Custom “Thank you” page']"
              :img="'/img/tree-2-image.png'"
            />
            <BlockPricingPlan
              :title="'Enterprise'"
              :subtitle="'Solution for big organizations'"
              :wallet="'$'"
              :price="'99'"
              :priceYearActive="annuallyPayCheckbox"
              :priceYear="'960'"
              :possibilities="['PayPal payments', 'Logic Jumps', 'File upload with 5GB storage', 'Custom domain support', 'Stripe integration']"
              :img="'/img/tree-3-image.png'"
            />
          </div>
        </div>
      </section>
      <section class="free-trials px-[20px] pt-[50px] pb-[38px] bg-primary-opacity/[16%]">
        <div class="free-trials__content relative container">
          <div class="free-trials__left flex text-center flex-col items-center lg:items-start">
            <h4 class="free-trials__title text-primary-500">Still not convinced? Start with a 14-day FREE trial!</h4>
            <p class="free-trials__desc mt-[8px] text-text-secondary">You will get full access to with all the features for 14 days.</p>
            <UiButton class="mt-[44px] max-w-max">Start 14-day free trial</UiButton>
          </div>
          <UiImage :src="'/img/image-for-section-free-trials.png'" :alt="'free-trials-image'" class="hidden lg:block absolute right-0 w-[248px] aspect-[1] bottom-[-38px]"></UiImage>
        </div>
      </section>
      <section class="best-plan py-[100px] px-[20px]">
        <div class="best-plan__container container">
          <h4 class="best-plan__title text-center">Pick a plan that works best for you</h4>
          <p class="best-plan__subtitle text-center mt-[8px]">Stay cool, we have a 48-hour money back guarantee!</p>
          <div class="flex justify-center max-sm:hidden">
            <table class="best-plan__table mt-[24px] w-full outline rounded-md outline-devider">
              <thead>
                <tr class="text-table-header">
                  <th class="px-[20px] text-table-header w-1/4 py-[16px] text-start">TIME</th>
                  <th class="px-[20px] text-table-header w-1/4 py-[16px]">
                    <div>STARTER</div>
                    <div class="text-13 text-text-secondary">Free</div>
                  </th>
                  <th class="px-[20px] text-table-header w-1/4 py-[16px]">
                    <div class="flex justify-center">
                      <div class="self-center">PRO</div>
                      <img src="/icon/star-table-icon.svg" alt="star-icon" class="ml-[8px] mb-[8px]" />
                    </div>
                    <div class="text-13 text-text-secondary">$7.5/Month</div>
                  </th>
                  <th class="px-[20px] text-table-header w-1/4 py-[16px]">
                    <div>ENTERPRISE</div>
                    <div class="text-13 text-text-secondary">$16/Month</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">14-days free trial</th>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-t bg-action-hover border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">No user limit</th>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-t border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">Product Support</th>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-tb bg-action-hover border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">Email Support</th>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><div class="text-primary-500 text-chip rounded-full self-start py-[2px] px-[12px] bg-primary-opacity/[16%] mx-auto w-max">Add-On-Available</div></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-t border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">Integrations</th>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-t bg-action-hover border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">Removal of Front branding</th>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><div class="text-primary-500 text-chip rounded-full self-start py-[2px] px-[12px] bg-primary-opacity/[16%] mx-auto w-max">Add-On-Available</div></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-t border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">Active maintenance & support</th>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-t bg-action-hover border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start">Data storage for 365 days</th>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><CancelTableIcon class="mx-auto text-text-secondary" /></td>
                  <td class="px-[20px] py-[16px]"><ApproveTableIcon class="mx-auto text-primary-500" /></td>
                </tr>
                <tr class="border-t text-center border-b border-devider">
                  <th class="px-[20px] py-[16px] text-start"></th>
                  <td class="px-[20px] py-[16px]">
                    <UiButton 
                      :type="'outline'" 
                      :text="'md'" 
                      :size="'md'" 
                      class="max-w-max mx-auto"
                    >
                      Choose Plan
                    </UiButton>
                  </td>
                  <td class="px-[20px] py-[16px]">
                    <UiButton 
                      :type="'outline'" 
                      :text="'md'" 
                      :size="'md'" 
                      class="max-w-max mx-auto"
                    >
                      Choose Plan
                    </UiButton>
                  </td>
                  <td class="px-[20px] py-[16px]">
                    <UiButton 
                      :type="'outline'" 
                      :text="'md'" 
                      :size="'md'" 
                      class="max-w-max mx-auto"
                    >
                      Choose Plan
                    </UiButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sm:hidden mt-[32px] flex flex-col gap-[24px]">
            <BlockBestPlan 
              v-for="plan in bestPlans"
              :title="plan.title"
              :price="plan.price"
              :possibilities="plan.poss"
            >
            </BlockBestPlan>
          </div>
        </div>
      </section>
      <section class="faq px-[20px] bg-body-bg py-[100px]">
        <div class="faq__content container">
          <h4 class="faq__title text-center">FAQ’s</h4>
          <p class="faq__subtitle text-center mt-[8px]">Let us help answer the most common questions.</p>
          <div class="faq__accordion flex flex-col gap-[8px] mt-[24px]">
            <UiAccordion 
              :title="'What counts towards the 100 responses limit?'"
              :text="'Done placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'"
              :status="activeAccordion === 1"
              @show="changeAccordion(1)"
            />
            <UiAccordion 
              :title="'How do you process payments?'"
              :text="'Done placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'"
              :status="activeAccordion === 2"
              @show="changeAccordion(2)"
            />
            <UiAccordion 
              :title="'Do you have a money-back guarantee?'"
              :text="'Done placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'"
              :status="activeAccordion === 3"
              @show="changeAccordion(3)"
            />
            <UiAccordion 
              :title="'I have more questions. Where can I get help?'"
              :text="'Done placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'"
              :status="activeAccordion === 4"
              @show="changeAccordion(4)"
            />
          </div>
        </div>
      </section>
    </div>
  </FrontLayout>
</template>