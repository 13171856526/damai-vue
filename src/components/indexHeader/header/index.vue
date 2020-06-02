<template>
  <!-- header -->
  <div class="hd">
    <HeaderTop></HeaderTop>
    <headerSearch></headerSearch>
  </div>
</template>
<script>

import HeaderTop from "../headerTopp/index.vue";


import headerSearch from "../headerSearch/index.vue";
export default {
  components: {
    HeaderTop,
    headerSearch,
  },
};
</script>
<style lang="less" scoped></style>
