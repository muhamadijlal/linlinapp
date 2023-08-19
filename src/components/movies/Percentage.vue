<script setup>
import { ref } from "vue";

const circumference = 17 * 2 * Math.PI; // radius * 2 * PI
const percent = ref(50);

function scaleColor() {
  return this.percent.value > 50 ? "text-green-500" : "text-yellow-300";
}
</script>

<template>
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
</template>