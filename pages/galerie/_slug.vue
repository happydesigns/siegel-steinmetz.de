<!--Photo gallery page - siegel-steinmetz.de/galerie-->
<template>
  <div>
    <div class="mt-8 document">
      <router-link to="/galerie">
        <h1>Galerie</h1>
      </router-link>
      <p>
        Eine kleine Übersicht über unsere bisherigen Leistungen finden Sie hier.
      </p>
    </div>

    <section class="document">
      <ul class="card-container">
        <GalleryAlbumCard
          v-for="album in albums"
          :key="album.path"
          :title="album.title"
          :path="galleryPath + '/' + album.path"
          :thumbnail="album.thumbnail"
          :amount="album.context.keys().length"
        />
      </ul>

      <div v-if="renderedImages" class="mt-8 image-container">
        <span
          v-for="image in renderedImages"
          :key="image.src"
          :style="`width:${(image.width * 384) / image.height}px;flex-grow:${
            (image.width * 300) / image.height
          }`"
        >
          <i :style="`padding-top:${(image.height / image.width) * 100}%`"></i>
          <nuxt-img :src="image.src"></nuxt-img>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
let albums = [
  {
    path: "grabmallager",
    title: "Grabmallager",
    thumbnail: "gallery_1.jpg",
    context: require.context(
      "@/assets/img/album/grabmallager/",
      false,
      /\.(png|jpe?g|svg)$/
    ),
  },
  {
    path: "grabmalreferenzen",
    title: "Grabmalreferenzen",
    thumbnail: "gallery_2.jpg",
    context: require.context(
      "@/assets/img/album/grabmalreferenzen/",
      false,
      /\.(png|jpe?g|svg)$/
    ),
  },
  {
    path: "restaurierungen",
    title: "Restaurierungen",
    thumbnail: "gallery_3.jpg",
    context: require.context(
      "@/assets/img/album/restaurierungen/",
      false,
      /\.(png|jpe?g|svg)$/
    ),
  },
];

export default {
  data() {
    return {
      albums: albums,
      imageKey: 0,
      images: [],
    };
  },
  computed: {
    galleryPath: function () {
      let path = this.$nuxt.$route.path.split("/").filter((e) => e);
      if (path.length > 1) {
        path.pop();
      }
      return "/" + path.join("/");
    },
    albumPath: function () {
      const path = this.$nuxt.$route.path.split("/").filter((e) => e);
      if (path.length > 1) {
        return path[path.length - 1];
      }
      return "";
    },
    currentAlbum: function () {
      return this.albums.find((album) => album.path == this.albumPath);
    },
    preloadAlbum: function () {
      let images = [];
      if (this.currentAlbum) {
        this.currentAlbum.context.keys().forEach((img) => {
          images.push({ src: `album/${this.albumPath}${img.substring(1)}` });
        });
      }
      return images;
    },
    renderedImages: function () {
      if (this.images.length) {
        return this.images;
      }
      return this.preloadAlbum;
    },
  },
  mounted() {
    if (this.currentAlbum) {
      let images = [];
      let i = 0;
      const length = this.currentAlbum.context.keys().length;
      this.currentAlbum.context.keys().forEach((img) => {
        const src = `album/${this.albumPath}${img.substring(1)}`;
        const image = new Image();
        image.onload = () => {
          images.push({
            src: src,
            width: image.width,
            height: image.height,
          });
          if (++i == length) {
            this.images = images;
          }
        };
        image.src = this.$img(src);
      });
    }
  },
};
</script>

<style scoped>
section {
  position: relative;
}

.v-application ul {
  padding: initial;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  padding: 0;
  font-size: 0;
  text-align: center;
  list-style: none;
}

.card-container::-webkit-scrollbar {
  width: 0 !important;
}

.card-container > span {
  margin: 16px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
}

.image-container::after {
  content: "";
  flex-grow: 999999999;
}

.image-container span {
  margin: 4px;
  position: relative;
}

.image-container i {
  display: block;
}

.image-container img {
  border-radius: 4px;
  position: absolute;
  top: 0;
  width: 100%;
  vertical-align: bottom;
  /* border: 4px solid transparent; */
  transition: all 0.3s ease 0s;
}

.image-container img:hover {
  /* border-color: #770019; */
  /* transform: scale(1.08); */
  box-shadow: 0 0.5rem 3rem -0.5rem rgba(0, 0, 0, 0.5);
  z-index: 8;
  cursor: pointer;
}
</style>
