<template>
  <div class="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Content,
    Footer,
    Header,
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  width: 100%;
  padding-bottom: 65px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 32px;
  }
}

body {
  margin: 0;
  background: #F6F7FB;
}
</style>
