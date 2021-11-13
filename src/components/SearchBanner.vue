<template>
  <div :class="`banner banner--${menuType}`">
    <div class="banner-inner">
      <div class="banner-content">
        <template v-if="['sights', 'rooms'].includes(menuType)">
          <div><img src="../assets/welcome_to_taiwan.svg"></div>
          <h2>台北、台中、台南、屏東、宜蘭……遊遍台灣</h2>
          <div class="input-button">
            <input
              type="text"
              placeholder="搜尋關鍵字"
            >
          </div>

          <div class="input-button">
            <select
              v-model="selectedCategory"
              name="category"
            >
              <option value="">
                類        別
              </option>
              <option
                v-for="option in options.category[menuType]"
                :key="option.value"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>

            <select
              v-model="selectedCity"
              name="city"
            >
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
              @click="search()"
              class="button button--pink"
            >
              <img src="../assets/icons/search.svg">
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
import { mapMutations, mapState } from 'vuex'

import Api from '../api/tourism';

export default {
  name: 'SearchBanner',
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
            value: 'Taipei'
          },
          {
            name: '新北市',
            value: 'NewTaipei'
          },
          {
            name: '桃園市',
            value: 'Taoyuan'
          },
          {
            name: '台中市',
            value: 'Taichung'
          },
          {
            name: '台南市',
            value: 'Tainan'
          },
          {
            name: '高雄市',
            value: 'Kaohsiung'
          },
          {
            name: '基隆市',
            value: 'Keelung'
          },
          {
            name: '新竹市',
            value: 'Hsinchu'
          },
          {
            name: '新竹縣',
            value: 'HsinchuCounty'
          },
          {
            name: '苗栗縣',
            value: 'MiaoliCounty'
          },
          {
            name: '彰化縣',
            value: 'ChanghuaCounty'
          },
          {
            name: '南投縣',
            value: 'NantouCounty'
          },
          {
            name: '雲林縣',
            value: 'YunlinCounty',
          },
          {
            name: '嘉義縣',
            value: 'ChiayiCounty'
          },
          {
            name: '嘉義市',
            value: 'Chiayi'
          },
          {
            name: '屏東縣',
            value: 'PingtungCounty'
          },
          {
            name: '宜蘭縣',
            value: 'YilanCounty'
          },
          {
            name: '花蓮縣',
            value: 'HualienCounty'
          },
          {
            name: '台東縣',
            value: 'TaitungCounty'
          },
          {
            name: '金門縣',
            value: 'KinmenCounty'
          },
          {
            name: '澎湖縣',
            value: 'PenghuCounty'
          },
          {
            name: '連江縣',
            value: 'LienchiangCounty'
          }
        ]
      },
    }
  },
  computed: {
    ...mapState(['menuType']),
    selectedCity: {
      get () {
        return this.$store.state.selectedCity
      },
      set (value) {
        this.updateSelectedCity(value)
      }
    },
    selectedCategory: {
      get () {
        return this.$store.state.selectedCategory
      },
      set (value) {
        this.updateSelectedCategory(value)
      }
    },
  },
  watch: {
    menuType: function (newMenuType) {
      if (newMenuType === 'sights' || newMenuType === 'rooms') {
        this.search()
      }
    }
  },
  created() {
    this.api = new Api()
    this.search()
  },
  methods: {
    ...mapMutations([
      'startLoading',
      'endLoading',
      'updateSelectedCity',
      'updateSelectedCategory',
      'resetSearchResults',
      'appendSearchResult'
    ]),

    search() {
      this.resetSearchResults()
      this.startLoading()

      if (!this.selectedCity) {
        this.appendSearchResult({
          type: 'cities'
        })
      }

      if (this.selectedCategory === 'sights' || (this.selectedCategory === '' && this.menuType === 'sights')) {
        this.api.getScenicSpot(
          this.selectedCity
        ).then((response) => {
          // console.log(response.data)
          this.endLoading()
          this.appendSearchResult({
            data: response.data,
            type: 'sights'
          })
        }).catch((error) => {
          console.log(error)
          this.endLoading()
        })
      }

      if (this.selectedCategory === 'activities' || (this.selectedCategory === '' && this.menuType === 'sights')) {
        this.api.getActivity(
          this.selectedCity
        ).then((response) => {
          // console.log(response.data)
          this.endLoading()
          this.appendSearchResult({
            data: response.data,
            type: 'activities'
          })
        }).catch((error) => {
          console.log(error)
          this.endLoading()
        })
      }

      if (this.selectedCategory === 'restaurants' || (this.selectedCategory === '' && (this.menuType === 'sights' || this.menuType === 'rooms'))) {
        this.api.getRestaurant(
          this.selectedCity
        ).then((response) => {
          // console.log(response.data)
          this.endLoading()
          this.appendSearchResult({
            data: response.data,
            type: 'restaurants'
          })
        }).catch((error) => {
          console.log(error)
          this.endLoading()
        })
      }

      if (this.selectedCategory === 'rooms' || (this.selectedCategory === '' && (this.menuType === 'sights' || this.menuType === 'rooms'))) {
        this.api.getHotel(
          this.selectedCity
        ).then((response) => {
          // console.log(response.data)
          this.endLoading()
          this.appendSearchResult({
            data: response.data,
            type: 'rooms'
          })
        }).catch((error) => {
          console.log(error)
          this.endLoading()
        })
      }
    },
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
  width: 100%;
  box-sizing: border-box;

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
    width: 491px;
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
