<template>
  <transition>
    <div
      v-if="visible"
      class="modal"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    'visible': Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  background: rgba(210, 210, 210, 0.75);
  backdrop-filter: blur(28px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
}
</style>
