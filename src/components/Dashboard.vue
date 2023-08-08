<template>
  <!-- navbar -->
  <nav class="bg-[#023047] w-full h-16">
    <div
      class="flex container mx-auto h-full items-center justify-between px-20"
    >
      <div class="flex items-center gap-10">
        <h4 class="text-5xl font-medium text-[#fb8500]">linlin</h4>

        <ul class="flex items-center justify-between gap-10">
          <li
            class="font-base text-white text-lg hover:text-[#ffb703] hover:cursor-pointer"
          >
            Home
          </li>
          <li
            class="font-base text-white text-lg hover:text-[#ffb703] hover:cursor-pointer"
          >
            Movies
          </li>
          <li
            class="font-base text-white text-lg hover:text-[#ffb703] hover:cursor-pointer"
          >
            Serial TV
          </li>
          <li
            class="font-base text-white text-lg hover:text-[#ffb703] hover:cursor-pointer"
          >
            Favorites
          </li>
        </ul>
      </div>

      <div>
        <form>
          <div class="relative">
            <input
              type="search"
              class="w-80 h-10 rounded-full px-10 outline-none border border-gray-300 bg-[#063e56] focus:ring-blue-500 focus:border-blue-500 placeholder-gray-100 text-white font-medium"
              placeholder="Search movies ..."
              required
            />

            <div class="absolute top-3 left-4">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>

  <!-- content -->
  <section class="h-full bg-[#f7f2f7] py-10 container mx-auto px-20">
    <div class="grid grid-cols-3 gap-5 h-[600px] bg-green-400 mb-10">
      <div class="col-span-2 bg-blue-600">x</div>
      <div class="bg-red-600">x</div>
    </div>

    <!-- Top 10 -->
    <div class="h-full space-y-5 mb-20">
      <div class="bg-green-100 border-l-[7px] border-[#ffb703]">
        <h2 class="text-4xl font-bold text-[#023047] pl-3">
          Lorem, ipsum dolor.
        </h2>
      </div>

      <div
        class="bg-red-100 w-full h-[500px] overflow-x-scroll no-scrollbar relative scroll-none"
      >
        <div class="absolute h-full flex gap-8">
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
        </div>
      </div>
    </div>

    <!-- Top 10 -->
    <div class="h-full space-y-5">
      <div class="bg-green-100 border-l-[7px] border-[#ffb703]">
        <h2 class="text-4xl font-bold text-[#023047] pl-3">
          Lorem, ipsum dolor.
        </h2>
      </div>
      <p class="text-[#219ebc] font-semibold text-xl">
        Lorem ipsum dolor sit amet.
      </p>

      <div
        class="bg-red-100 w-full h-[500px] overflow-x-scroll no-scrollbar relative scroll-none"
      >
        <div class="absolute h-full flex gap-8">
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
          <div class="bg-blue-600 h-full w-72"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer
    class="bg-[#023047] py-52 grid place-content-center place-items-center space-y-5"
  >
    <h4 class="text-2xl text-white font-bold">My personal project</h4>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 hover:text-[#ffb703]"
      viewBox="0 0 496 512"
    >
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        class="fill-current"
      />
    </svg>

    <p class="text-[#ffb703] font-semibold text-base">
      Find me on github. @muhamadijlal_
    </p>
  </footer>
</template>
