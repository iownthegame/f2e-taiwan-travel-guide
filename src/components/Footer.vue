<template>
  <footer>
    Taiwan Tourguide  © Code: iownthegame  /  Design: KT
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
  color: #ACACAC;
  padding: 25.5px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #FFFFFF;

  @media screen and (max-width: 1024px) {
    padding: 9px 0;
  }
}
</style>
