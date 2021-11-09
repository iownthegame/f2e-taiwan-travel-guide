<template>
  <div
    v-for="result in searchResults"
    :key="result.type"
    :class="`panel panel--${result.type}`"
  >
    <div class="panel-title">
      <img :src="require(`../assets/icons/${panels[result.type].shape}_filled.svg`)">
      <div>{{ panels[result.type].name }}</div>
    </div>

    <div class="panel-content">
      <template v-if="result.type === 'sights'">
        <div
          v-for="sight in result.data"
          :key="sight.ID"
          class="card card--square"
        >
          <img
            class="card-image"
            :src="sight.Picture.PictureUrl1"
          >
          <div class="card-title">
            {{ sight.Name }}
          </div>
          <div class="card-location">
            <img src="../assets/icons/position_filled.svg">
            {{ `${sight.City || ''} ${sight.ZipCode}` }}
          </div>
          <img
            class="card-shadow"
            src="../assets/card_square_shadow.png"
          >
        </div>
      </template>

      <template v-else-if="result.type === 'activities'">
        <div
          v-for="activity in result.data"
          :key="activity.ID"
          class="card"
        >
          <img
            class="card-image"
            :src="activity.Picture.PictureUrl1"
          >
          <div class="card-detail">
            <div class="card-title">
              {{ activity.Name }}
            </div>
            <div class="card-description">
              {{ activity.Description.substring(0, 100) }}
            </div>
            <div class="card-footer">
              <div class="card-location">
                <img src="../assets/icons/position_filled.svg">
                {{ activity.City }}
              </div>

              <div class="card-more">
                <button
                  class="button button--pink"
                  @click="$emit('show', activity)"
                >
                  活動詳情
                </button>
              </div>
            </div>
          </div>
          <img
            class="card-shadow"
            src="../assets/card_shadow.png"
          >
        </div>
      </template>

      <template v-else-if="result.type === 'restaurants' || result.type === 'rooms'">
        <div
          v-for="item in result.data"
          :key="item.ID"
          class="card card--square"
        >
          <img
            class="card-image"
            :src="item.Picture.PictureUrl1"
          >
          <div class="card-title">
            {{ item.Name }}
          </div>
          <div class="card-location">
            <img src="../assets/icons/position_filled.svg">
            {{ `${item.City || ''} ${item.ZipCode}` }}
          </div>
          <img
            class="card-shadow"
            src="../assets/card_square_shadow.png"
          >
        </div>
      </template>

      <template v-else-if="result.type === 'cities'">
        <div
          v-for="city in panels[result.type].data"
          :key="city.location"
          class="card card--city"
        >
          <img
            class="card-image"
            :src="require(`../assets/examples/${city.image}`)"
          >
          <div class="card-location">
            <img src="../assets/icons/position_white.svg">
            {{ city.location }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { cities } from '../sample_data/sights'

export default {
  name: 'SearchResult',
  emits: ['show'],
  data() {
    return {
      panels: {
        activities: {
          name: '熱門活動',
          shape: 'triangle',
        },
        sights: {
          name: '熱門景點',
          shape: 'triangle',
        },
        cities: {
          name: '熱門城市',
          shape: 'triangle',
          data: cities
        },
        restaurants: {
          name: '熱門餐飲',
          shape: 'square',
        },
        rooms: {
          name: '推薦住宿',
          shape: 'square',
        }
      }
    }
  },
  computed: {
    ...mapState([
      'searchResults'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.panel {
  &-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 20px;
    margin-bottom: 18px;
    // margin-left: 24px;

    img {
      margin-right: 14px;
    }
  }

  &-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    justify-content: flex-start;
    margin-bottom: 48px;
  }
}

.card {
  margin-bottom: 32px;
  display: flex;
  padding: 16px;
  width: 48%;
  height: auto;
  background: #FFFFFF;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  min-height: 120px;
  margin-right: 1%;

  &--square {
    flex-direction: column;
    width: 206px;
    align-items: flex-start;
    margin-right: 9px;
    padding: 12px;

    .card {
      &-image {
        width: 100%;
        margin-right: 0;
        margin-bottom: 16px;
      }

      &-title {
        text-align: left;
        margin-bottom: 30px;
      }

      &-location {
        font-size: 12px;
        line-height: 17px;
        color: #007350;

        img {
          margin-right: 8px;
        }
      }

      &-shadow {
        height: 24px;
        bottom: -17px;
      }
    }
  }

  &--city {
    width: 206px;
    align-items: flex-start;
    margin-right: 9px;
    padding: 14px 12px;
    box-shadow: 0px 4px 3px rgba(13, 11, 12, 0.2);

    .card {
      &-image {
        width: 100%;
        margin-right: 0;
      }

      &-location {
        position: absolute;
        display: flex;
        position: absolute;
        display: flex;
        width: 100%;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        top: 0;
        left: 0;
        color: #FFFFFF;

        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 29px;

        img {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }

  &-image {
    width: 40%;
    height: 100%;
    object-fit: cover;
    margin-right: 16px;
  }

  &-detail {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &-title {
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
  }

  &-description {
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #ACACAC;
    margin-top: 14px;
  }

  &-footer {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
  }

  &-location {
    display: flex;
    font-size: 14px;
    line-height: 21px;
    color: #0D0B0C;
    flex-grow: 1;
    align-items: center;

    img {
      margin-right: 12px;
    }
  }

  &-shadow {
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 45px;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
    padding: 12px;

    &-description {
      display: none;
    }

    &-more {
      display: none;
    }

    &--square {
      width: 158px;
      margin-right: 12px;

      .card {
        &-image {
          margin-bottom: 5px;
        }

        &-title {
          font-size: 14px;
          font-weight: normal;
          margin-bottom: 24px;
        }

        &-location {
          font-weight: 300;
          font-size: 12px;
          line-height: 17px;
        }
      }
    }

    &--city {
      width: 159px;
      margin-right: 12px;
      padding: 10px;

      .card {
        &-location {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
}

.button {
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  background: #FFFFFF;
  cursor: pointer;

  &--pink {
    color: #FF1D6C;
    border: 1px solid #FF1D6C;
  }
}
</style>
