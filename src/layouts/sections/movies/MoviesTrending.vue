<script setup>
import ListMovies from "@/components/movies/ListMovies.vue";
import SkeletonListMovies from "@/components/movies/SkeletonListMovies.vue";
import axios from "axios";
import { ref, reactive } from "vue";

defineProps({
  categoryName: { default: "Today", type: String },
  listsCategory: { default: "This Week", type: Array },
});

const partial = ref({
  isHidden: true,
  isLoading: false,
});

const movies = reactive({
  results: [],
});

const URL = import.meta.env.VITE_BASEURL_API + "/3/trending/all/day";
const config = {
  params: {
    language: "en-US",
  },
  headers: {
    Authorization: "Bearer " + import.meta.env.VITE_KEY_API,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

async function fetchTrending() {
  partial.value.isLoading = true;
  await axios
    .get(URL, config)
    .then((response) => {
      return (movies.results = response.data.results);
    })
    .catch((response) => console.log("error " + response))
    .finally(() => (partial.value.isLoading = false));
}

// When created fetch data trending
fetchTrending();
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
        <div
          class="bg-slate-800 rounded-full"
          @click="partial.isHidden = !partial.isHidden"
        >
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
          :class="{ hidden: partial.isHidden }"
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
        <SkeletonListMovies
          v-if="partial.isLoading"
          v-for="(index, items) in 10"
          :key="index"
        />
        <ListMovies
          v-else
          v-for="list in movies.results"
          :movie="list"
          :key="list.index"
        />
      </div>
    </div>
  </div>
</template>
