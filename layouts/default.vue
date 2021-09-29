<template>
  <v-app id="app">
    <div class="page-bg">
      <div class="body-bg">
        <Header />
        <Nuxt />
      </div>
      <Footer />
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
.content-wrapper:after {
  content: "";
  display: table;
  clear: both;
}

.content-wrapper {
  margin-bottom: 1rem;
}

#app {
  --siegel-red: #770019;
  --siegel-lightgray: #d9d9da;
  --siegel-gray: #afafb0;
  --light-s2: #2e2e2e;

  --page: #f5f5f5;
  --document: #fff;
  --body: #fff;

  background: var(--page);
}

.page-bg {
  background: var(--page);
  min-height: 100vh;
}

.body-bg {
  background: var(--body);
}

.siegel-primary {
  color: #770019 !important;
}

.bg-lightgray {
  background-color: var(--siegel-lightgray);
}

.v-icon.mdi {
  margin-right: 4px;
  vertical-align: middle;
  font-size: 20px;
}

h1 {
  color: var(--light-s2);
  margin-bottom: 0.5rem;
  display: inline-block;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

h2 {
  color: var(--siegel-red);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
  margin: 0.5rem 0;
  display: inline-block;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

p {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  line-height: 1.5rem;
  color: #4b4b4b;
}

a {
  text-decoration: none;
}

br {
  margin-bottom: 10px;
  width: 1px;
}

.document {
  width: 100%;
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 16px;
}

.document.page {
  border-radius: 4px;
  background: var(--document);
}

.text-logo {
  color: var(--light-s2);
  font-size: 24px;
  white-space: nowrap;
  line-height: 1.75rem;
}

@media (min-width: 600px) {
  .document {
    min-width: 1196px;
    padding: 4px 32px;
  }
}
</style>
