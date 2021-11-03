<template>
  <div class="header">
    <div class="header-inner">
      <img class="header-logo" src="../assets/taiwan_icon.png">

      <div class="menu-tabs">
        <div class="menu-tab menu-tab--pink">
          <div class="menu-icon">
            <img src="../assets/icons/triangle.svg" />
          </div>
          <a href="#" @click="$emit('menu', 'sights')">台灣景點</a>
        </div>

        <div class="menu-tab menu-tab--yellow">
          <div class="menu-icon">
            <img src="../assets/icons/square.svg" />
          </div>
          <a href="#" @click="$emit('menu', 'rooms')">美食住宿</a>
        </div>

        <div class="menu-tab menu-tab--green">
          <div class="menu-icon">
            <img src="../assets/icons/circle.svg" />
          </div>
          <a href="#" @click="$emit('menu', 'transports')">景點交通</a>
        </div>
      </div>

      <img class="header-shadow" src="../assets/banner_shadow.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1;

  &-logo {
    height: 50px;
  }

  &-inner {
    background: #FFFFFF;
    padding: 30px 0px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }

  .menu-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-shadow {
    position: absolute;
    bottom: -27px;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 52px;
    display: none;
  }

  @media screen and (max-width: 1024px) {
    &-inner {
      justify-content: space-between;
      padding: 17px 40px;
    }

    &-shadow {
      display: block;
    }
  }
}

.menu-tab {
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &--pink {
    color: #FF1D6C;

    .menu-icon {
      background: #FF1D6C;
    }
  }

  &--yellow {
    color: #FFB72C;

    .menu-icon {
      background: #FFB72C;
    }
  }

  &--green {
    color: #007350;

    .menu-icon {
      background: #007350;
    }
  }

  .menu-icon {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  }

  a {
    margin-left: 8px;
    font: 14px;
    text-decoration-line: underline;
    color: inherit;
  }

  + .menu-tab {
    margin-left: 27px;
  }
}
</style>
