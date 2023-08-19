<script setup>
import TitleLeaderboard from "@/components/leaderboard/TitleLeaderboard.vue";
import ItemsLeaderboard from "@/components/leaderboard/ItemsLeaderboard.vue";
</script>

<template>
  <div class="px-5 py-8">
    <TitleLeaderboard/>

    <ol class="space-y-5">
      <ItemsLeaderboard v-for="index in 10" :key="index" />
    </ol>
  </div>
</template>