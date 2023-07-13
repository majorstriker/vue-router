<template>
  <div class="product_box parent">
    <div>
      <img :src="imageUrl">
      <p>{{  name }}</p>
      <p>{{ text }}</p>
    </div>
    
    <div class="child like" @click="toggleLike">
        <span class="like">
          <span v-if="liked"><img src="@/assets/star.png"></span>
          <span v-else><img src="@/assets/nolike.png"></span>
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    id: Number,
    name: String,
    imageUrl: String,
    text: String,
    category: String,
    liked: Boolean
  },
  methods: {
    toggleLike() {
      this.$emit('toggleLike')
    }
  }
};
</script>

<style lang="scss" scoped>
.product_box { 
  width: 480px;
  padding-bottom: 20px;
}
.like {
  cursor: pointer;
  font-size: 25px;
}
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 15px;
  left: 430px;
}
</style>