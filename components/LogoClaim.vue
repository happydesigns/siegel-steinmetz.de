<!--The 'Bernd Siegel Steingestaltung' Claim-->
<template>
  <div class="logo-claim">
    <div class="claim-top">
      <span>Bernd</span>
      <span class="siegel-primary">Siegel</span>
    </div>
    <span>Steingestaltung</span>
  </div> 
</template>

<script>
export default {
  name: 'LogoClaim'
}
</script>

<style lang="scss" scoped>
.claim-top {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1023px) and (min-width: 801px) {
  header .logo-claim {
    display: none;
  }
}

.small .logo-claim {
  margin: auto auto auto 16px;
}

.logo-claim {
  margin: auto auto auto 20px;
}

.small span {
  font-size: 20px;
  line-height: 1.5rem;
}

span {
  color: #2e2e2e;
  font-size: 22px;
  line-height: 1.5rem;
}
</style>
