<template>
  <div class="main container w-full mx-auto">
    <div class="container w-10/12 mx-auto ">
      <label for="search" class="h-8 w-5/12 mx-1">Search :</label>
      <input
        type="text"
        name="search"
        id=""
        autocomplete="off"
        v-model="searchInput"
        @input="sendInfo(searchInput)"
        class="bg-gray-50 border-gray-500 rounded h-8 w-4/12 my-3 p-3 mx-auto"
      />
      <ul v-show="(isShow = isOpen)">
        <li
          class="bg-gray-50 text-gray-600 rounded h-8 w-4/12 p-1 mx-auto cursor-pointer hover:bg-gray-500 hover:text-white"
          v-for="(result, i) in users"
          :key="i"
          @click="select(result)"
        >
          {{ result.username }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Main',
  data() {
    return {
      isOpen: true,
      searchInput: '',
    };
  },
  methods: {
    ...mapActions({
      getInfoFromApi: 'getInfoFromApi',
    }),
    sendInfo(param) {
      this.$store.commit('CHANGE_FILTER', param);
      this.getInfoFromApi(param);
    },
    select(i) {
      this.searchInput = i.username;
      this.isOpen = false;
    },
  },
  computed: {
    ...mapGetters({
      users: 'filterUsers',
    }),
    /*     autocomplead() {},
     */
  },
};
</script>

<style lang="scss" scoped></style>
