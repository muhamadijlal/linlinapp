<script setup>
import Trailers from "@/layouts/sections/Trailers.vue";
import SectionHero from "@/layouts/sections/Hero.vue";
import MoviesCategory from "@/layouts/sections/Movies/MoviesCategory.vue";
import Join from "@/layouts/sections/Join.vue";
import LeaderBoard from "@/layouts/sections/LeaderBoard.vue";
import { reactive, ref } from "vue";
import axios from "axios";

const isLoading = ref(false);
const movieCategories = reactive({
  trending: Object,
  popular: Object,
  watch: Object,
});

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

async function getTrending() {
  await axios
    .get(import.meta.env.VITE_BASEURL_API + "/3/trending/all/day", config)
    .then((response) => {
      return (movieCategories.trending = response.data.results);
    })
    .catch((err) => console.log("trending " + err));
}

async function getPopular() {
  await axios
    .get(import.meta.env.VITE_BASEURL_API + "/3/movie/popular", config)
    .then((response) => {
      return (movieCategories.popular = response.data.results);
    })
    .catch((err) => console.log("popular " + err));
}

async function getWatch() {
  await axios
    .get(import.meta.env.VITE_BASEURL_API + "/3/movie/top_rated", config)
    .then((response) => {
      return (movieCategories.watch = response.data.results);
    })
    .catch((err) => console.log("watch " + err));
}

async function fetchData() {
  isLoading.value = true;
  await getTrending();
  await getPopular();
  await getWatch();
  isLoading.value = false;
}

fetchData();
</script>

<template>
  <SectionHero />
  <MoviesCategory
    categoryName="Today"
    :listsCategory="['This week']"
    :isLoading="isLoading"
    :movies="movieCategories.trending"
  >
    Trending
  </MoviesCategory>

  <Trailers />

  <MoviesCategory
    categoryName="Streaming"
    :listsCategory="['On TV', 'For Rent', 'In Theaters']"
    :isLoading="isLoading"
    :movies="movieCategories.popular"
  >
    Sedang populer
  </MoviesCategory>

  <MoviesCategory
    categoryName="Movies"
    :listsCategory="['TV']"
    :isLoading="isLoading"
    :movies="movieCategories.watch"
  >
    Free to watch
  </MoviesCategory>

  <Join />

  <LeaderBoard />
</template>
