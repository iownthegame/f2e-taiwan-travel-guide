<template>
  <div class="content-wrapper">
    <SearchBanner :type="type" />

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
      <template v-if="['sights', 'rooms'].includes(type)">
        <Panel type="cities" />
        <Panel
          type="activities"
          @show="showActivityModal"
        />
        <Panel type="restaurants" />
        <Panel type="rooms" />
      </template>

      <template v-else-if="type === 'transports'">
        <Transport />
      </template>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

import SearchBanner from './SearchBanner.vue'
import Panel from './Panel.vue'
import Transport from './Transport.vue'
import Modal from './Modal.vue'

export default {
  name: 'Content',
  components: {
    Panel,
    Transport,
    Modal,
    SearchBanner
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      modalVisible: false,
      modalActivity: null
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    showActivityModal(activity) {
      this.modalVisible = true;
      this.modalActivity = activity;
    },
    closeActivityModal() {
      this.modalVisible = false;
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

  &-wrapper {
    position: relative;
  }
}

.modal-dialog {
  width: 676px;
  padding: 32px;
  background: white;
  height: fit-content;
  // position: absolute;
  // top: 0;
  // left: 0;
}
</style>
