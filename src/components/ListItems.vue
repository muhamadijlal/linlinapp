<script setup>
import { ref } from "vue";

const circumference = 17 * 2 * Math.PI; // radius * 2 * PI
const percent = ref(50);

function scaleColor() {
  return this.percent.value > 50 ? "text-green-500" : "text-yellow-300";
}
</script>

<template>
  <div class="h-80">
    <div
      class="w-40 h-2/3 bg-cover rounded-md mb-6 relative"
      style="background-image: url('/src/assets/img/carousel.jpg')"
    >
      <div
        class="w-10 h-10 bg-black rounded-full -bottom-5 left-2 absolute flex justify-center items-center"
      >
        <svg class="w-[full] rounded-full h-full -rotate-90">
          <circle
            class="opacity-20"
            :class="scaleColor()"
            stroke-width="2"
            stroke="currentColor"
            fill="transparent"
            r="17"
            cx="20"
            cy="20"
          />
          <circle
            :class="scaleColor()"
            stroke-width="2"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="circumference - (percent / 100) * circumference"
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r="17"
            cx="20"
            cy="20"
          />
        </svg>
        <p class="text-white text-[10px] font-bold absolute">
          {{ percent }}<span class="text-[5px] font-thin align-top">%</span>
        </p>
      </div>

      <div
        class="bg-gray-200 rounded-full absolute right-2 top-2 opacity-50 w-5 h-5 flex items-center justify-center hover:bg-sky-500"
      >
        <font-awesome-icon
          :icon="['fas', 'ellipsis']"
          class="text-lg bg-clip-text"
        />
      </div>
    </div>

    <h5 class="text-base font-bold">No Hard feelings</h5>
    <p class="text-md font-base text-slate-500">Jun 15, 2023</p>
  </div>
</template>
