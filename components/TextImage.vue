<template>
  <div class="text-image" :class="side">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "TombsOriginal",
  props: {
    side: String
  },
  data() {
    return {
      test: "tst"
    }
  }
}
</script>

<style lang="scss" scoped>
.right .titled-image {
  float: right;
}

.left .titled-image {
  float: left;
}
</style>