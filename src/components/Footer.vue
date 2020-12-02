<template>
  <footer
    class="footer flex justify-center bg-purple-600 text-white h-8 text-center p-1"
  >
    <div class="">{{ new Date().getFullYear() }} — <strong>J</strong></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
