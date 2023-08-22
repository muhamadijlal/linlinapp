<script setup>
import ListMovies from "@/components/movies/ListMovies.vue";
import SkeletonListMovies from "@/components/movies/SkeletonListMovies.vue";
import { ref } from "vue";

defineProps({
  movies: Array,
  isLoading: Boolean,
  categoryName: String,
  listsCategory: Array,
  data: Object,
});

const isHidden = ref(true);
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
    <div class="w-full relative h-[350px] overflow-x-scroll">
      <div class="flex gap-5 px-5 absolute">
        <SkeletonListMovies
          v-if="isLoading"
          v-for="(index, items) in 10"
          :key="index"
        />
        <ListMovies
          v-else
          v-for="list in movies"
          :movie="list"
          :key="list.index"
        />
      </div>
    </div>
  </div>
</template>
