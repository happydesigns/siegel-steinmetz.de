<template>
  <li>
    <figure :style="{ backgroundImage: `url('${require(`@/assets/img/${image}`)}')` }"></figure>
    <!-- <img :src="" /> -->
    <span>
      <h2>{{title}}</h2>
      <p>{{amount}} Bilder</p>
    </span>
  </li>
</template>

<script>
export default {
  name: "GalleryAlbumCard",
  props: {
    title: String,
    image: String,
    amount: Number
  }
};
</script>

<style scoped>
li {
  display: inline-block;
  width: 90%;
  margin: 1rem 0;
  max-width: 20rem;
  font-size: 1rem;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.1s, -webkit-transform 0.1s ease-in-out;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s,
    -webkit-transform 0.1s ease-in-out;
  cursor: pointer;
}

li:hover {
	transform: translateY(-0.5rem) scale(1.0125);
	box-shadow: 0 0.5em 3rem -1rem rgba(0,0,0,0.5);
}

figure {
  list-style: none;
  display: block;
  min-height: 20rem;
  background-size: cover;
  filter: none;
  transition: filter 1s, -webkit-filter 1s;
}

span {
  font-family: sans-serif;
  list-style: none;
  font-size: 1rem;
  display: block;
  padding: 1em 0.5em;
  color: #515151;
  text-decoration: none;
}

h2 {
  display: block;
  font-family: sans-serif;
  list-style: none;
  color: #515151;
  margin: 0 0 0.5rem !important;
  text-align: center;
}

p {
  font-family: sans-serif;
  list-style: none;
  font-size: 1rem;
  color: #515151;
  margin: 0 !important;
  text-align: center;
}
</style>