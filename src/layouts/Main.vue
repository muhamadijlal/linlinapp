<script setup>
import Trailers from "@/layouts/sections/Trailers.vue";
import SectionHero from "@/layouts/sections/Hero.vue";
import Movies from "@/layouts/sections/Movies.vue";
import Join from "@/layouts/sections/Join.vue";
import LeaderBoard from "@/layouts/sections/LeaderBoard.vue";
</script>

<template>
  <SectionHero/>

  <Movies categoryName="Today" :listsCategory="['This week']">
    Trending
  </Movies>
  
  <Trailers/>
  
  <Movies
    categoryName="Streaming"
    :listsCategory="['On TV', 'For Rent', 'In Theaters']"
  >
    Sedang populer
  </Movies>

  <Movies categoryName="Movies" :listsCategory="['TV']">
    Free to watch
  </Movies>

  <Join />

  <LeaderBoard/>
</template>
