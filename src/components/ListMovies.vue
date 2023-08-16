<script setup>
import ListItems from "@/components/ListItems.vue";
import { ref } from "vue";

const isHidden = ref(true);

defineProps({
  categoryName: { default: "Today", type: String },
  listsCategory: { default: "This Week", type: Array },
});
</script>

<template>
  <div
    class="py-5 bg-no-repeat bg-center bg-contain"
    style="background-image: url('/src/assets/img/bg-grafik.svg')"
  >
    <div class="flex gap-1 items-center pb-10">
      <h3 class="font-semibold text-2xl px-5">
        <slot />
      </h3>
      <div class="relative z-50">
        <div class="bg-slate-800 rounded-full" @click="isHidden = !isHidden">
          <font-awesome-icon
            :icon="['fas', 'caret-down']"
            class="absolute right-6 top-[10px] text-cyan-500 text-sm"
          />
          <div
            class="pl-6 pr-12 py-1 rounded-full appearance-none text-base flex items-center font-bold text-gradient outline-none"
          >
            {{ categoryName }}
          </div>
        </div>

        <div
          class="color-gradient w-full absolute top-1/2 -z-10 border border-slate-900 pt-4 pb-2 rounded-b-2xl"
          :class="{ hidden: isHidden }"
        >
          <div
            class="font-bold text-slate-800 flex flex-col items-start ml-[23px]"
            v-for="(item, index) in listsCategory"
            :key="index"
          >
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- slider -->
    <div class="w-full relative h-80 overflow-x-scroll">
      <div class="flex gap-5 px-5 absolute">
        <ListItems v-for="index in 10" :key="index" />
      </div>
    </div>
  </div>
</template>
