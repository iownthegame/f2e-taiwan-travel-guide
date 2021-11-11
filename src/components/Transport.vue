<template>
  <div class="transport-update">
    *每隔 15 秒自動更新 <strong>(註： 此頁面為範例頁面，尚未串接 API)</strong>
  </div>
  <div class="transport">
    <div class="transport-inner">
      <div class="transport-column">
        <div
          v-for="stop in firstWay.stops.filter((element, index) => index < 12)"
          :key="stop.name"
          class="transport-stop"
        >
          <div :class="`transport-time transport-time--${stop.status}`">
            {{ stopLabel(stop) }}
          </div>
          {{ stop.name }}
        </div>
      </div>

      <div class="transport-column">
        <div
          v-for="stop in firstWay.stops.filter((element, index) => index >= 12)"
          :key="stop.name"
          class="transport-stop"
        >
          <div :class="`transport-time transport-time--${stop.status}`">
            {{ stopLabel(stop) }}
          </div>
          {{ stop.name }}
        </div>
      </div>
    </div>

    <img
      class="transport-shadow"
      src="../assets/transport_shadow.png"
    >
  </div>
</template>

<script>
export default {
  name: 'Transport',
  props: {
    line: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      firstWay: {
        toward: '蘭潭',
        stops: [
          {
            time: null,
            status: 'dns',
            name: '港坪運動公園'
          },
          {
            time: null,
            status: 'dns',
            name: '嘉樂福觀光夜市'
          },
          {
            time: null,
            status: 'dns',
            name: '番子溝公園'
          },
          {
            time: '16:09',
            status: 'waiting',
            name: '大潤發(博愛路)'
          },
          {
            time: null,
            status: 'coming',
            name: '嘉義市轉運中心'
          },
          {
            time: '16：16',
            status: 'waiting',
            name: '北香湖公園'
          },
          {
            time: '16：20',
            status: 'waiting',
            name: '自由友忠路口'
          },
          {
            time: '16：23',
            status: 'waiting',
            name: '秀泰影城'
          },
          {
            time: '16：27',
            status: 'waiting',
            name: '嘉義火車站'
          },
          {
            time: '16：32',
            status: 'waiting',
            name: '新光三越遠東站'
          },
          {
            time: '16：35',
            status: 'waiting',
            name: '文化路口'
          },
          {
            time: '16：37',
            status: 'waiting',
            name: '嘉邑城隍廟'
          },
          {
            time: '16：38',
            status: 'waiting',
            name: '市政府(吳鳳北路)'
          },
          {
            time: null,
            status: 'leaving',
            name: '檜意生活村(北門)'
          },
          {
            time: '16：15',
            status: 'waiting',
            name: '獄政博物館'
          },
          {
            time: '16：17',
            status: 'waiting',
            name: '嘉義高商(嘉義公園)'
          },
          {
            time: '16：19',
            status: 'waiting',
            name: '嘉義高中(啟明路)'
          },
          {
            time: '16：20',
            status: 'waiting',
            name: '嘉義高中'
          },
          {
            time: '16：21',
            status: 'waiting',
            name: '下山仔頂(大雅商圈)'
          },
          {
            time: '16：24',
            status: 'waiting',
            name: '蘭潭國小'
          },
          {
            time: '16：25',
            status: 'waiting',
            name: '蘭潭DC'
          },
          {
            time: '16：26',
            status: 'waiting',
            name: '蘭潭'
          }
        ]
      },
      secondWay: {
        toward: '港坪運動公園',
        stops: [

        ]
      }
    }
  },
  methods: {
    stopLabel({ status, time }) {
      if (status === 'dns')
        return '未發車';
      if (status === 'coming')
        return '進站中';
      if (status === 'leaving')
        return '進站中';
      return time;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.transport {
  background: white;
  width: 100%;
  padding: 45px 0px;
  margin-bottom: 84px;
  position: relative;

  &-inner {
    display: flex;
    justify-content: space-evenly;
  }

  &-shadow {
    position: absolute;
    bottom: -27px;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 52px;
  }

  &-update {
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #FF1D6C;
    text-align: right;
    width: 100%;
    margin-bottom: 12px;
  }

  &-stop {
    display: flex;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: #0D0B0C;
    align-items: center;
    margin-bottom: 32px;
  }

  &-time {
    border: 2px solid #0D0B0C;
    border-radius: 7px;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #0D0B0C;
    padding: 12.5px 0;
    width: 143px;
    display: flex;
    justify-content: center;
    margin-right: 33px;

    &--dns {
      border: 2px solid #ACACAC;
      color: #ACACAC;
    }

    &--coming {
      color: #FFFFFF;
      background: #FF1D6C;
      border: 2px solid #FF1D6C;
    }

    &--leaving {
      color: #FFFFFF;
      background: #FFB72C;
      border: 2px solid #FFB72C;
    }
  }
}
</style>
