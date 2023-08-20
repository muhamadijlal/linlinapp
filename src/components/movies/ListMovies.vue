<script setup>
import Percentage from "@/components/movies/Percentage.vue";
import moment from "moment";

defineProps({
  movie: Object,
});
</script>

<template>
  <div class="h-80">
    <div
      class="w-40 h-2/3 bg-cover rounded-md mb-6 relative"
      :style="{
        'background-image':
          'url(https://image.tmdb.org/t/p/w220_and_h330_face' +
          movie.poster_path +
          ')',
      }"
    >
      <Percentage :percent="100" />

      <div
        class="bg-gray-200 rounded-full absolute right-2 top-2 opacity-50 w-5 h-5 flex items-center justify-center hover:bg-sky-500"
      >
        <font-awesome-icon
          :icon="['fas', 'ellipsis']"
          class="text-lg bg-clip-text"
        />
      </div>
    </div>

    <h5 class="text-base font-bold">{{ movie.original_title }}</h5>
    <p class="text-md font-base text-slate-500">
      {{ moment(movie.release_date).format("LL") }}
    </p>
  </div>
</template>
