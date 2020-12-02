<template>
  <div
    class="header__wrapp flex bg-purple-600 w-full text-base md:text-lg text-white"
  >
    <div class="header flex justify-between container mx-auto p-1">
      <nav
        class="header__nav flex justify-between h-auto w-11/12 border-gray-500 mx-auto"
      >
        <div
          class="h-auto h-auto p-1 mr-1 cursor-pointer"
          @click="isOpen = !isOpen"
        >
          <img src="@/assets/menu.svg" width="25" height="25" alt="" />
        </div>
        <div
          class="header__burger bg-gray-100 text-black sm:w-3/12 w-7/12 absolute top-30 left-10"
          v-if="isOpen"
        >
          <ul>
            <li
              class="header__item  hover:shadow  cursor-pointer "
              v-for="item in menu"
              :key="item.id"
            >
              {{ item.title }}
            </li>
          </ul>
          <button
            class="btn p-1 border-gray-500 absolute top-0 right-1 w-7"
            @click="isOpen = false"
          >
            <img src="@/assets/close.svg" alt="" />
          </button>
        </div>
        <div class="container w-4/12 p-1 text-left"><h2>LOGO</h2></div>
        <ul
          class="header__items container hidden sm:flex justify-between w-8/12 mx-auto"
        >
          <li
            class="header__item  hover:shadow p-1 cursor-pointer"
            v-for="item in menu"
            :key="item.id"
          >
            {{ item.title }}
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false,
      menu: [
        {
          id: 0,
          icon: 'local_library',
          title: 'Читать',
        },
        {
          id: 1,
          icon: 'school',
          title: 'Учить',
        },

        { id: 3, icon: 'exit_to_app', title: 'Выход' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
