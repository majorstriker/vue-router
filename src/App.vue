<template>
  <div id="app" class="center">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
      
  },
  methods: {

  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Lato', sans-serif;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}

.header {
  display: block;
  width: 100%;
}
.attach {
        width: 100%;
        max-width: 1000px;
        min-width: 480px;
        padding: 50px 15px;
        margin: 0 auto;
        position: relative;
    }

    .slider_case {
        margin-bottom: 40px;
    }

    .item {
      flex-shrink: 0;
      border-radius: 70px;
    }

</style>