<template>
  <div class="h-80">
    <div
      class="w-40 h-2/3 bg-cover rounded-md mb-6 relative"
      style="background-image: url('/src/assets/img/carousel.jpg')"
    >
      <div
        class="w-10 h-10 bg-black rounded-full -bottom-5 left-2 absolute flex justify-center items-center"
      >
        <span class="text-white text-[10px] font-bold">99%</span>
      </div>

      <div
        class="bg-gray-200 rounded-full absolute right-2 top-2 opacity-50 w-5 h-5 flex items-center justify-center hover:bg-sky-500"
      >
        <font-awesome-icon
          :icon="['fas', 'ellipsis']"
          class="text-lg bg-clip-text"
        />
      </div>
    </div>

    <h5 class="text-base font-bold">No Hard feelings</h5>
    <p class="text-md font-base text-slate-500">Jun 15, 2023</p>
  </div>
</template>
