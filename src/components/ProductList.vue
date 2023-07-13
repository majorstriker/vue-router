<template>
  <div>
      <div class="inputs__box">
        <input class="custom-checkbox" type="checkbox" id="check1" value="1" v-model="categories">
        <label class="custom-label" for="check1">Bathroom</label>
        <input class="custom-checkbox" type="checkbox" id="check2" value="2" v-model="categories">
        <label class="custom-label" for="check2">Bedroom</label>
        <input class="custom-checkbox" type="checkbox" id="check3" value="3" v-model="categories">
        <label class="custom-label" for="check3">Kitchen</label>
        <input class="custom-checkbox" type="checkbox" id="check4" value="4" v-model="categories">
        <label class="custom-label" for="check4">Living Area</label>
      </div>
        
      <div class="container">
        <div v-for="(product, index) in filteredData"
        :key="index">
          <ProductDetails 
            :name="product.name"
            :imageUrl="product.imageUrl"
            :text="product.text"
            :liked="product.liked"
            @toggleLike="toggleLike"
          />
        </div>
      </div>
      
        
  </div>
</template>

<script>
import ProductDetails from './ProductDetails.vue'

export default {
  name: 'ProductList',
  components: {
    ProductDetails 
  },
  data() {
    return {
      categories: [],
      products: [{
                    id: 1,
                    name: 'Minimal Bathroom',
                    imageUrl: require("@/assets/bathroom.png"),
                    text: 'Decor / Artchitecture',
                    category: '1',
                    liked: false
                }, {
                    id: 2,
                    name: 'Minimal Bedroom',
                    imageUrl: require("@/assets/bedroom.png"),
                    text: 'Decor / Artchitecture',
                    category: '2',
                    liked: false
                }, {
                    id: 3,
                    name: 'System Table',
                    imageUrl: require("@/assets/kitchen.png"),
                    text: 'Decor / Artchitecture',
                    category: '3',
                    liked: false
                }, {
                    id: 4,
                    name: 'Living area planning design',
                    imageUrl: require("@/assets/area.png"),
                    text: 'Decor / Artchitecture',
                    category: '4',
                    liked: false
                }, {
                    id: 5,
                    name: 'Classic Bathroom',
                    imageUrl: require("@/assets/bathroom.png"),
                    text: 'Decor / Artchitecture',
                    category: '1',
                    liked: true
                }, {
                    id: 6,
                    name: 'Modern Bedroom',
                    imageUrl: require("@/assets/bedroom.png"),
                    text: 'Decor / Artchitecture',
                    category: '2',
                    liked: false
                }, {
                    id: 7,
                    name: 'System Table',
                    imageUrl: require("@/assets/kitchen.png"),
                    text: 'Decor / Artchitecture',
                    category: '3',
                    liked: false
                }, {
                    id: 8,
                    name: 'Living area planning design',
                    imageUrl: require("@/assets/area.png"),
                    text: 'Decor / Artchitecture',
                    category: '4',
                    liked: false
                }, { 
                    id: 9,
                    name: 'Modern Bathroom',
                    imageUrl: require("@/assets/bathroom.png"),
                    text: 'Decor / Artchitecture',
                    category: '1',
                    liked: false
                }, {
                    id: 10,
                    name: 'Classic Bedroom',
                    imageUrl: require("@/assets/bedroom.png"),
                    text: 'Decor / Artchitecture',
                    category: '2',
                    liked: false
                }, {
                    id: 11,
                    name: 'System Table',
                    imageUrl: require("@/assets/kitchen.png"),
                    text: 'Decor / Artchitecture',
                    category: '3',
                    liked: false
                }]
    };
  },
  methods: {
    toggleLike() {
      this.liked = !this.liked;
    }
  },
  computed: {
                filteredData() {
                    let data = []
                    if (this.categories.length) {
                        data = this.products.filter(x => this.categories.indexOf(x.category.toString()) != -1)
                    } else {
                        data = this.products
                    }
                    return data
                }
            },
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
  width: 1000px;
  height: 100%;
	flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.inputs__box {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
}
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 60px;
  border: 1px solid #CDA274;
  border-radius: 18px;
  background: #fff;
}
.custom-label:hover {
  background-color: #CDA274;
  color: #fff;
}
</style>