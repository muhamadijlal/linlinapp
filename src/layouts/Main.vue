<script setup>
import Trailers from "@/layouts/sections/Trailers.vue";
import SectionHero from "@/layouts/sections/Hero.vue";
import MoviesTrending from "@/layouts/sections/Movies/MoviesTrending.vue";
import MoviesPopular from "@/layouts/sections/Movies/MoviesPopular.vue";
import MoviesWatch from "@/layouts/sections/Movies/MoviesTrending.vue";
import Join from "@/layouts/sections/Join.vue";
import LeaderBoard from "@/layouts/sections/LeaderBoard.vue";
</script>

<template>
  <SectionHero/>

  <MoviesTrending categoryName="Today" :listsCategory="['This week']">
    Trending
  </MoviesTrending>
  
  <Trailers/>
  
  <MoviesPopular
    categoryName="Streaming"
    :listsCategory="['On TV', 'For Rent', 'In Theaters']"
  >
    Sedang populer
  </MoviesPopular>

  <MoviesWatch categoryName="Movies" :listsCategory="['TV']">
    Free to watch
  </MoviesWatch>

  <Join />

  <LeaderBoard/>
</template>
