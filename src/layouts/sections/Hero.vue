<script setup>
import SearchInput from '@/components/hero/SearchInput.vue';
import Title from '@/components/hero/Title.vue';
</script>

<template>
<div
    class="h-[300px] bg-cover p-5 bg-[linear-gradient(to_right,rgba(3,37,65,0.8),rgba(3,37,65,0)),url('/src/assets/img/carousel.jpg')]"
  >
    <Title/>

    <SearchInput/>
  </div>
</template>