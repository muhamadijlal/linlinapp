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
      <div
        class="col-span-2 bg-blue-600 relative w-full overflow-x-scroll no-scrollbar"
      >
        <div class="bg-orange-100 h-full absolute flex gap-8">
          <div class="bg-blue-100 w-[911px]">x</div>
          <div class="bg-blue-100 w-[911px]">x</div>
          <div class="bg-blue-100 w-[911px]">x</div>
        </div>
      </div>
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
        class="bg-red-100 w-full h-[500px] overflow-x-scroll no-scrollbar relative"
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
    class="bg-[#023047] py-5 grid place-content-center place-items-center space-y-5"
  >
    <p class="text-slate-100 font-semibold text-base">
      Find me on github. @muhamadijlal_
    </p>
  </footer>
</template>
