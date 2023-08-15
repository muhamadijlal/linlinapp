<script setup>
import ListTrailers from "@/components/ListTrailers.vue";
import ListMovies from "@/components/ListMovies.vue";
import ItemsLeaderboard from "@/components/ItemsLeaderboard.vue";

import { ref } from "vue";

const isHidden = ref(true);

const listsCategory = ["On TV", "For Rent", "In Theaters"];
</script>

<template>
  <!-- carousel -->
  <div
    class="h-[300px] bg-cover p-5 bg-[linear-gradient(to_right,rgba(3,37,65,0.8),rgba(3,37,65,0)),url('/src/assets/img/carousel.jpg')]"
  >
    <h4 class="font-bold text-white text-[45px]">Selamat datang</h4>
    <p class="font-semibold text-white text-3xl">
      Millions of movies, TV shows and people to discover. Explore now.
    </p>

    <div class="mt-6 h-12 relative">
      <input
        type="text"
        class="bg-white w-full h-full px-6 rounded-full placeholder:text-gray-500 placeholder:text-xl focus:outline-none text-xl font-thin text-gray-500"
        placeholder="Cari..."
      />
      <button
        class="color-gradient absolute top-0 -right-1 h-full px-6 rounded-full"
      >
        <span class="font-bold text-medium text-white">search</span>
      </button>
    </div>
  </div>

  <!-- movies trending -->
  <ListMovies categoryName="Today" :listsCategory="['This week']">
    Trending
  </ListMovies>

  <div class="bg-[#032541] my-5 h-[350px] w-full">
    <div class="p-5 flex gap-5 items-center">
      <h3 class="font-semibold text-2xl text-white">Latest Trailers</h3>

      <div class="relative z-50">
        <div
          class="color-gradient-light rounded-full border border-teal-600"
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
          class="color-gradient-light w-full absolute top-1/2 -z-10 border border-teal-600 pt-4 pb-2 rounded-b-2xl"
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

  <ListMovies
    categoryName="Streaming"
    :listsCategory="['On TV', 'For Rent', 'In Theaters']"
  >
    Sedang populer
  </ListMovies>

  <ListMovies categoryName="Movies" :listsCategory="['TV']">
    Free to watch
  </ListMovies>

  <div
    class="px-5 py-8 fill-purple-800"
    style="background-image: url('/src/assets/img/carousel.jpg')"
  >
    <h2 class="text-4xl font-bold text-white">Join Today</h2>
    <p class="text-white text-lg py-5">
      Get access to maintain your own <i>custom personal lists</i>,
      <i>track what you've seen</i> and search and filter for
      <i>what to watch next—</i>regardless if it's in theatres, on TV or
      available on popular streaming services like Netflix, iflix, Viu, Hotstar,
      and Catchplay.
    </p>

    <button
      class="bg-purple-500 rounded-md px-5 py-2 font-bold text-white text-lg"
    >
      Sign Up
    </button>

    <ul class="text-white list-disc px-5 py-8">
      <li>Enjoy TMDB ad free</li>
      <li>Maintain a personal watchlist</li>
      <li>
        Filter by your subscribed streaming services and find something to watch
      </li>
      <li>Log the movies and TV shows you've seen</li>
      <li>Build custom lists</li>
      <li>Contribute to and improve our database</li>
    </ul>
  </div>

  <div class="px-5 py-8">
    <div class="flex items-center gap-10 leading-4 pb-5">
      <h2 class="text-2xl font-semibold">Leaderboard</h2>
      <ul class="list-disc">
        <li>All time edits</li>
        <li>Edit this week</li>
      </ul>
    </div>

    <ol class="space-y-5">
      <ItemsLeaderboard v-for="index in 10" :key="index" />
    </ol>
  </div>
</template>
