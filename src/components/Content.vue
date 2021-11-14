<template>
  <div
    class="content-wrapper"
    :class="modalVisible ? 'content-noscroll' : ''"
  >
    <SearchBanner />

    <div
      v-if="loading"
      class="content-loading"
    >
      <img src="../assets/loading.gif">
    </div>

    <div
      v-else
      class="content"
    >
      <template v-if="['sights', 'rooms'].includes(menuType)">
        <SearchResult @show="showActivityModal" />
      </template>

      <template v-else-if="menuType === 'transports'">
        <Transport />
      </template>
    </div>
  </div>

  <Modal
    :visible="modalVisible"
    @close="closeActivityModal"
  >
    <div class="modal-dialog">
      <img
        class="modal-image"
        :src="modalActivity.image"
      >
      <div class="modal-title">
        {{ modalActivity.title }}
      </div>
      <div class="modal-description">
        {{ modalActivity.description }}
      </div>
      <div class="modal-detail">
        <div class="modal-detail-content">
          <img :src="icon">
          開放式空間，無時間限制
        </div>
        <div class="modal-detail-content">
          <img :src="icon">
          免費
        </div>
        <div class="modal-detail-content">
          <img :src="icon">
          基隆市中山區湖海路一、二段(協和街)
        </div>
        <div class="modal-detail-content">
          <img :src="icon">
          886-2-24287664
        </div>
      </div>
      <button @click="closeActivityModal">
        x
      </button>
    </div>
  </Modal>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

import SearchBanner from './SearchBanner.vue'
import SearchResult from './SearchResult.vue'
import Transport from './Transport.vue'
import Modal from './Modal.vue'

export default {
  name: 'Content',
  components: {
    Transport,
    Modal,
    SearchBanner,
    SearchResult
  },
  data() {
    return {
      modalActivity: null,
    }
  },
  computed: {
    ...mapState([
      'loading',
      'menuType',
      'modalVisible'
    ]),
  },
  methods: {
    ...mapMutations([
      'setModalVisible'
    ]),
    showActivityModal(activity) {
      this.setModalVisible(true)
      this.modalActivity = activity;
    },
    closeActivityModal() {
      this.setModalVisible(false)
      // this.modalActivity = null;
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
  padding-top: 65px;
  max-width: 1080px;
  width: 100%;

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

  &-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &-noscroll {
    height: 80vh;
    overflow-y: hidden;
  }
}

.modal-dialog {
  width: 676px;
  padding: 32px;
  background: white;
  height: fit-content;
}
</style>
