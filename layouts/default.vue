<template lang="">
  <div>
    <header class="title">
      <!-- <h1>{{ $route.name }} 페이지</h1> -->
      <nuxt-link class="logo" to="/">Nuxt Shopping</nuxt-link>
      <!-- <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/main">메인 페이지</NuxtLink>
      <NuxtLink to="/product">상품 페이지</NuxtLink> -->
    </header>
    <Nuxt />
  </div>
</template>
<script>
export default {}
</script>
<style lang="css" scoped>
/* 헤더관련 스타일 */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}

.logo {
  font-weight: 900;
}

.logo:visited {
  color: inherit;
}
</style>
