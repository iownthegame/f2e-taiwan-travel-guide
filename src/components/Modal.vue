<template>
  <transition>
    <div
      v-if="visible"
      class="modal"
    >
      <div class="modal-content">
        <slot />
      </div>
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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  &-content {
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: rgba(210, 210, 210, 0.75);
    backdrop-filter: blur(28px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
