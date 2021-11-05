<template>
  <div :class="`banner banner--${type}`">
    <div class="banner-inner">
      <div class="banner-content">
        <template v-if="['sights', 'rooms'].includes(type)">
          <h1>Welcome to <span>Taiwan°</span></h1>
          <h2>台北、台中、台南、屏東、宜蘭……遊遍台灣</h2>
          <div class="input-button">
            <input
              type="text"
              placeholder="搜尋關鍵字"
            >
            <button class="button button--pink">
              <img src="../assets/icons/search.svg">
            </button>
          </div>

          <div class="input-button">
            <select name="category">
              <option value="">
                類        別
              </option>
              <option
                v-for="option in options.category[type]"
                :key="option.value"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>

            <select name="city">
              <option value="">
                不分縣市
              </option>
              <option
                v-for="option in options.city"
                :key="option.value"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>

            <button
              class="button button--yellow"
              @click="search('Taipei')"
            >
              <img src="../assets/icons/position.svg">
            </button>
          </div>
        </template>

        <template v-else>
          <div class="input-button">
            <select name="city">
              <option value="">
                選擇縣市
              </option>
            </select>

            <select name="line">
              <option value="">
                選擇路線
              </option>
            </select>

            <button class="button button--pink">
              <img src="../assets/icons/search.svg">
            </button>
          </div>

          <div class="line-tabs">
            <div class="line-tab line-tab--active">
              往<span>蘭潭</span>
            </div>

            <div class="line-tab">
              往<span>港坪運動公園</span>
            </div>
          </div>
        </template>
      </div>
      <img
        class="banner-shadow"
        src="../assets/banner_shadow.png"
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import Api from '../api/scenic_spot';

export default {
  name: 'SearchBanner',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      api: null,
      options: {
        category: {
          sights: [
            {
              name: '景        點',
              value: 'sights'
            },
            {
              name: '活        動',
              value: 'activities'
            }
          ],
          rooms: [
            {
              name: '美        食',
              value: 'restaurants'
            },
            {
              name: '住        宿',
              value: 'rooms'
            }
          ]
        },
        city: [
          {
            name: '台北市',
            value: ''
          },
          {
            name: '新北市',
            value: ''
          },
          {
            name: '桃園市',
            value: ''
          },
          {
            name: '台中市',
            value: ''
          },
          {
            name: '台南市',
            value: ''
          },
          {
            name: '高雄市',
            value: ''
          },
          {
            name: '基隆市',
            value: ''
          },
          {
            name: '新竹市',
            value: ''
          },
          {
            name: '新竹縣',
            value: ''
          },
          {
            name: '苗栗縣',
            value: ''
          },
          {
            name: '彰化縣',
            value: ''
          },
          {
            name: '南投縣',
            value: ''
          },
          {
            name: '雲林縣',
            value: '',
          },
          {
            name: '嘉義縣',
            value: ''
          },
          {
            name: '嘉義市',
            value: ''
          },
          {
            name: '屏東縣',
            value: ''
          },
          {
            name: '宜蘭縣',
            value: ''
          },
          {
            name: '花蓮縣',
            value: ''
          },
          {
            name: '台東縣',
            value: ''
          },
          {
            name: '金門縣',
            value: ''
          },
          {
            name: '澎湖縣',
            value: ''
          },
          {
            name: '連江縣',
            value: ''
          }
        ]
      }
    }
  },
  created() {
    this.api = new Api();
  },
  methods: {
    ...mapMutations(['updateSearchResult', 'startLoading', 'endLoading']),

    search(city) {
      this.startLoading()

      this.api.getScenicSpot(
        city
      ).then((response) => {
        // console.log(response.data)
        this.endLoading()
        this.updateSearchResult(response.data)
      }).catch((error) => {
        console.log(error)
        this.endLoading()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner {
  padding: 27px;
  padding-top: 0;
  background: #FFFFFF;
  position: relative;

  &-inner {
    display: flex;
    justify-content: center;
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &-shadow {
    position: absolute;
    bottom: -27px;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 52px;
  }

  &--sights {
    .banner-inner {
      background: url('../assets/sights_bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      height: 490px;
    }
  }

  &--rooms {
    .banner-inner {
      background: url('../assets/rooms_bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      height: 490px;
    }
  }

  &--transports {
    padding-bottom: 0;
  }

  h1 {
    font-weight: bold;
    font-size: 50px;
    color: #FFFFFF;
    line-height: 59px;
    margin: 0;
    text-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
    text-align: left;

    span {
      color: #FF1D6C;
    }
  }

  h2 {
    font-weight: normal;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 21px;
    margin: 0;
    text-align: left;
  }

  @media screen and (max-width: 1024px) {
    background: none;
    height: auto;
    padding-top: 40px;

    &-shadow {
      display: none;
    }

    &--sights, &--rooms {
      .banner-inner {
        background: none;
        height: auto;
      }
    }

    h1, h2 {
      display: none;
    }
  }
}

.button {
  box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 6px;
  outline: none;

  &--pink {
    background: #FF1D6C;
  }

  &--yellow {
    background: #FFB72C;
  }
}

.input-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  .button {
    margin-left: 8px;
    cursor: pointer;
  }

  input {
    height: 40px;
    box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 8.5px 24px;
    box-sizing: border-box;
    width: 445px;
  }

  select {
    width: 219px;
    height: 40px;
    box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 8.5px 24px;
    box-sizing: border-box;
    + select {
      margin-left: 7px;
    }
  }
}

.line-tabs {
  display: flex;
  justify-content: space-between;
  margin-top: 41px;

  .line-tab {
    width: 244px;
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
    cursor: pointer;

    &--active {
      box-shadow: 0px 4px 0px #FF1D6C;
    }

    span {
      color: #FF1D6C;
      margin-left: 4px;
    }
  }
}
</style>
