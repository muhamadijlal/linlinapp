<script setup>
import ListTrailers from '@/components/trailer/ListTrailers.vue';

import { ref } from "vue";

const isHidden = ref(true);

const listsCategory = ["On TV", "For Rent", "In Theaters"];
</script>

<template>
  <div class="bg-[#032541] my-5 h-[350px] w-full">
    <div class="p-5 flex gap-5 items-center">
      <h3 class="font-semibold text-2xl text-white">Latest Trailers</h3>

      <div class="relative z-50">
        <div
          class="color-gradient-light rounded-full"
          @click="isHidden = !isHidden"
        >
          <font-awesome-icon
            :icon="['fas', 'caret-down']"
            class="absolute right-6 top-[10px] text-slate-800 text-sm"
          />
          <div
            class="pl-6 pr-12 py-1 rounded-full appearance-none text-base flex items-center font-bold text-slate-800 outline-none"
          >
            Streaming
          </div>
        </div>

        <div
          class="color-gradient-light w-full absolute top-1/2 -z-10 pt-4 pb-2 rounded-b-2xl"
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

    <div class="relative overflow-x-scroll w-full h-full">
      <div class="flex gap-5 absolute px-5 pt-2">
        <ListTrailers v-for="index in 10" :key="index" />

        <div class="w-1 h-44"></div>
      </div>
    </div>
  </div>
</template>