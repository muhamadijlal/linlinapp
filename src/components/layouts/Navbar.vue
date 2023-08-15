<template>
  <nav>
    <div class="bg-[#032541] py-4">
      <ul class="flex justify-between px-5 items-center">
        <li class="text-white">
          <font-awesome-icon :icon="['fas', 'bars']" />
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
</template>
