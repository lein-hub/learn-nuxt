<template lang="">
  <div>
    {{ products }}
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    const products = response.data
    return { products }
  },
}
</script>
<style lang=""></style>
