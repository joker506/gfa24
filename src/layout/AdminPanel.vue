<template>
  <div class="flex justify-between flex-col h-screen">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
export default {
  name: 'AdminPanel',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="sass" scoped></style>
