<template>
  <div class="text-image" :class="side">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TombsOriginal",
  props: {
    side: String,
  },
  data() {
    return {
      test: "tst",
    };
  },
};
</script>

<style lang="scss" scoped>
.text-image {
  overflow: auto;
}

.titled-image {
  text-align: center;
}

@media (min-width: 768px) {
  .right .titled-image {
    float: right;
  }

  .left .titled-image {
    float: left;
  }
}
</style>