<template>
  <div v-if="loading" class="content-loading">
    <img src="../assets/loading.gif" />
  </div>

  <div v-else class="content">
    <template v-if="['sights', 'rooms'].includes(type)">
      <Panel type="cities" />
      <Panel type="activities" />
      <Panel type="restaurants" />
      <Panel type="rooms" />
    </template>

    <template v-else-if="type === 'transports'">
      <Transport />
    </template>
  </div>
</template>

<script>
import Panel from './Panel.vue'
import Transport from './Transport.vue'

export default {
  name: 'Content',
  components: {
    Panel,
    Transport
  },
  props: {
    type: String
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 65px 6%;
  padding-bottom: 0;

  @media screen and (max-width: 1024px) {
    padding: 8px 65px;
  }

  &-loading {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    height: 404px;

    img {
      height: 74px;
    }
  }
}
</style>
