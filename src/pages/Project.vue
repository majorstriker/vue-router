<template>
  <div id="app" class="center">
    <Header />
    <div class="top__img"></div>
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'App',
  components: {
    Header,
    ProductList,
    Footer    
  }
}
</script>