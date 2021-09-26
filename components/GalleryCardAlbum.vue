<template>
  <span>
    <img :src="require(`@/assets/img/${image}`)" width="100%"/>
    <p class="g-title">{{title}}</p>
    <p class="g-amount">{{amount}} Bilder</p>
  </span>
</template>

<script>
export default {
  name: 'GalleryCardAlbum',
  props: {
    title: String,
    image: String,
    amount: Number
  }
}
</script>

<style scoped>
span {
  position: relative;
  flex: 0 0 340px;
  width: 340px;
  height: 340px;
  overflow: hidden;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

span:hover {
  transform: scale(1.05);
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}

span:before {
  content: '';
  position: absolute;
  z-index: 4;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  margin: 6px;
  border: 1px solid #D9D9DA;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: linear-gradient(0deg, #2e2e2e70 0%, rgba(175,175,176,0) 50%);
}

span:hover:before {
  width: 100%;
  height: 100%;
  margin: 0;
}

p {
  position: absolute;
  z-index: 4;
  bottom: 0;
  text-shadow: 1px 2px 3px #2e2e2e;
}

.g-title {
  color: white;
  margin: 16px 16px 48px 16px;  
  font-size: 2rem;
}

.g-amount {
  margin: 16px 16px 16px 20px;
  color: rgb(230, 230, 230);
}

img {
  position: absolute;
  user-select: none;
}
</style>