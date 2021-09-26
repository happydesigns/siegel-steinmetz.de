<template>
  <span class="titled-image">
    <figure>
      <img :src="require(`@/assets/img/${image}`)" />
      <figcaption>
        <slot />
      </figcaption>
    </figure>
  </span>
</template>

<script>
export default {
  name: "TitledImage",
  props: {
    image: String,
    title: String
  }
};
</script>

<style scoped>
@media (min-width: 500px) {
  .right figure {
    margin-left: 16px;
  }

  .left figure {
    margin-right: 16px;
  }
}


figcaption {
  font-style: italic;
}

img {
  max-width: 100%;
}

.titled-image {
  margin-bottom: 1rem;
}
</style>

