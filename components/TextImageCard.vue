<template>
  <div class="card">
    <span class="card__img">
      <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg">
      <!-- <img :src="require(`@/assets/img/${image}`)" /> -->
    </span>
    <span>
      <span class="card__title"></span>
      <span></span>
      <a href=""></a>
    </span>
  </div>
</template>

<script>
export default {
  name: "TextImageCard",
  props: {
    image: String,
    title: String,
    to: String,
    text: String
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.card {
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;
}

.card__img {
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 20px;
  transform: translateX(-80px);

  overflow: hidden;
}

.card__img:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  border-radius: 20px;
  opacity: 0.8;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;
}

.card__title {
  line-height: 1.15;
  font-family: 'Fira Sans', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #0d0925;
  margin-bottom: 20px;
  opacity: 1;
  transform: none;
  transition-delay: 0.4s;
}
</style>
