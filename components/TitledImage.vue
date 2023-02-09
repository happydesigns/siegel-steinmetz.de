<script setup lang="ts">
defineProps<{
  image: string
  title: string
  alt: string
}>()
</script>

<template>
  <div class="titled-image">
    <figure>
      <img :src="image" :alt="alt">
      <figcaption>
        <slot />
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .right figure {
    margin-left: 24px;
  }

  .left figure {
    margin-right: 24px;
  }
}

figcaption {
  font-style: italic;
}

img {
  max-width: 100%;
  border-radius: 4px;
}

figcaption {
  text-align: center;
  font-weight: 500;
  font-style: normal;
}

.titled-image {
  margin-bottom: 1rem;
}
</style>
