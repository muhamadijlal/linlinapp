<template>
  <!-- carousel -->
  <div
    class="h-[300px] bg-cover p-5"
    style="background-image: url('/src/assets/img/carousel.jpg')"
  >
    <h4 class="font-bold text-white text-[45px]">Selamat datang</h4>
    <p class="font-semibold text-white text-3xl">
      Millions of movies, TV shows and people to discover. Explore now.
    </p>

    <div class="mt-6 h-12 relative">
      <input
        type="text"
        class="bg-white w-full h-full px-6 rounded-full placeholder:text-gray-500 placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  <div class="py-5">
    <div class="flex gap-1 items-center pb-5">
      <h3 class="font-semibold text-2xl px-5">Trending</h3>
      <div class="relative">
        <font-awesome-icon
          :icon="['fas', 'caret-down']"
          class="absolute right-6 top-[10px] text-cyan-500 text-sm"
        />
        <div class="bg-slate-800 rounded-full">
          <div
            class="pl-6 pr-12 py-1 rounded-full appearance-none text-base flex items-center font-bold text-gradient outline-none"
          >
            Today
          </div>
        </div>
      </div>
    </div>
    <div
      x-data="scrollProgress"
      class="fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
    >
      <span
        class="absolute text-xl text-blue-700"
        x-text="`${percent}%`"
      ></span>
    </div>

    <!-- slider -->
    <div class="w-full relative h-80 overflow-x-scroll shadow-black">
      <div class="flex gap-5 px-5 absolute">
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
          </div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div class="w-2 h-2/3"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-[#032541] my-5 h-[350px] w-full">
    <div class="p-5">
      <h3 class="font-semibold text-2xl text-white">Latest Trailers</h3>
    </div>

    <div class="relative overflow-x-scroll w-full h-full">
      <div class="flex gap-5 absolute px-5 pt-2">
        <div class="flex flex-col items-center">
          <div
            class="w-80 h-44 rounded-md bg-cover hover:scale-105 duration-300 ease-out"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>
          <div class="flex flex-col items-center -space-y-1 p-2">
            <h5 class="text-white font-bold text-lg">Kötü Adamın 10 Günü</h5>
            <p class="text-white font-normal text-base">
              Official Trailer [Subtitled]
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="w-80 h-44 rounded-md bg-cover hover:scale-105 duration-300 ease-out"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>
          <div class="flex flex-col items-center -space-y-1 p-2">
            <h5 class="text-white font-bold text-lg">Kötü Adamın 10 Günü</h5>
            <p class="text-white font-normal text-base">
              Official Trailer [Subtitled]
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="w-80 h-44 rounded-md bg-cover hover:scale-105 duration-300 ease-out"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>
          <div class="flex flex-col items-center -space-y-1 p-2">
            <h5 class="text-white font-bold text-lg">Kötü Adamın 10 Günü</h5>
            <p class="text-white font-normal text-base">
              Official Trailer [Subtitled]
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="w-80 h-44 rounded-md bg-cover hover:scale-105 duration-300 ease-out"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>
          <div class="flex flex-col items-center -space-y-1 p-2">
            <h5 class="text-white font-bold text-lg">Kötü Adamın 10 Günü</h5>
            <p class="text-white font-normal text-base">
              Official Trailer [Subtitled]
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="w-80 h-44 rounded-md bg-cover hover:scale-105 duration-300 ease-out"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>
          <div class="flex flex-col items-center -space-y-1 p-2">
            <h5 class="text-white font-bold text-lg">Kötü Adamın 10 Günü</h5>
            <p class="text-white font-normal text-base">
              Official Trailer [Subtitled]
            </p>
          </div>
        </div>
        <div class="w-1 h-44"></div>
      </div>
    </div>
  </div>

  <!-- movies trending -->
  <div class="pt-5 pb-16">
    <div class="flex gap-1 items-center pb-8">
      <h3 class="font-semibold text-2xl pl-5 pr-3">Sedang Populer</h3>
      <div class="relative">
        <font-awesome-icon
          :icon="['fas', 'caret-down']"
          class="absolute right-5 top-[10px] text-cyan-500 text-sm"
        />
        <div class="bg-slate-800 rounded-full">
          <div
            class="pl-6 pr-10 py-1 rounded-full appearance-none text-base flex items-center font-bold text-gradient outline-none"
          >
            Streaming
          </div>
        </div>
      </div>
    </div>

    <!-- slider -->
    <div class="w-full relative h-80 overflow-x-scroll">
      <div class="flex gap-5 px-5 absolute">
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
          </div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div class="w-2 h-2/3"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- movies trending -->
  <div class="pb-5">
    <div class="flex gap-1 items-center pb-8">
      <h3 class="font-semibold text-2xl pl-5 pr-3">Free to watch</h3>
      <div class="relative">
        <font-awesome-icon
          :icon="['fas', 'caret-down']"
          class="absolute right-5 top-[10px] text-cyan-500 text-sm"
        />
        <div class="bg-slate-800 rounded-full">
          <div
            class="pl-6 pr-10 py-1 rounded-full appearance-none text-base flex items-center font-bold text-gradient outline-none"
          >
            Movies
          </div>
        </div>
      </div>
    </div>
    <div class="w-full relative h-80 overflow-x-scroll">
      <div class="flex gap-5 px-5 absolute">
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
          </div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div
            class="w-40 h-2/3 bg-cover rounded-md mb-6"
            style="background-image: url('/src/assets/img/carousel.jpg')"
          ></div>

          <h5 class="text-base font-bold">No Hard feelings</h5>
          <p class="text-md font-light text-slate-500">Jun 15, 2023</p>
        </div>
        <div class="h-80">
          <div class="w-2 h-2/3"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- slider -->

  <div
    class="bg-purple-800 px-5 py-8"
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
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
      <li class="flex gap-2 items-center">
        <span
          class="bg-blue-800 w-[70px] h-[58px] rounded-full border-box"
        ></span>
        <div class="leading-5 w-full">
          <h5 class="font-semibold text-xl">HaidarIjlal</h5>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-36 h-[10px] rounded-full"></div>
            <span class="font-semibold">1234</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="color-gradient w-52 h-[10px] rounded-full"></div>
            <span class="font-semibold">123,432</span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>
