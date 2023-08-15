<script setup>
import { ref } from "vue";

const isHidden = ref(true);
</script>

<template>
  <nav>
    <div class="bg-[#032541] py-4">
      <ul class="flex justify-between px-5 items-center">
        <li class="text-white">
          <button @click="isHidden = !isHidden">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </li>
        <li class="ml-10">
          <img
            src="../../assets/img/mini-tmdb-logo.svg"
            alt="mini-logo-tmdb"
            class="w-14"
          />
        </li>
        <li class="flex items-center gap-6 text-lg font-bold">
          <font-awesome-icon :icon="['fas', 'user']" class="text-white" />
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
            class="text-cyan-500"
          />
        </li>
      </ul>
    </div>
  </nav>

  <div
    class="bg-[#032541] bg-opacity-90 w-[90%] backdrop-blur-md z-10 fixed h-full p-5"
    :class="{ hidden: isHidden }"
  >
    <div class="space-y-2">
      <h4 class="text-white text-xl font-semibold">Film</h4>
      <h4 class="text-white text-xl font-semibold">Serial TV</h4>
      <h4 class="text-white text-xl font-semibold">Orang</h4>
    </div>
    <div class="py-4 space-y-2">
      <p class="font-bold text-gray-400 text-base">Panduan Kontribusi</p>
      <p class="font-bold text-gray-400 text-base">Diskusi</p>
      <p class="font-bold text-gray-400 text-base">Papan Peringkat</p>
      <p class="font-bold text-gray-400 text-base">API</p>
      <p class="font-bold text-gray-400 text-base">Dukungan</p>
      <p class="font-bold text-gray-400 text-base">Tentang</p>
    </div>

    <h5 class="text-base font-bold text-gray-400">Masuk</h5>
  </div>
</template>
