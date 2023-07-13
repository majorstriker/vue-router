<template>
  <div>
    <header class="header center">
            <div class="header__left">
                <a href="index.html"><img src="../assets/logo.png" alt="logo"></a>
                <a href="index.html" class="header__left_heading">Interno</a>
            </div>
            <nav class="header__right">
                <router-link to="/" class="header__link-site">Home</router-link>
                <router-link to="/project" class="header__link-site">Project</router-link>
                <router-link to="/blog" class="header__link-site">Blog</router-link>
            </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

  data() {
    return {
      
    };
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.header {
  min-height: 75px;
  background: #FFF;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.header__left {
  display: flex;
  align-items: center;
  gap: 10px;
  &_heading {
    color: #292F36;
    font-size: 40px;
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
}

.header__right {
  display: flex;
  align-items: center;
  gap: 33px;
}
.header__link-site {
  color: #292F36;
text-align: center;
font-size: 20px;
font-family: Jost;
font-style: normal;
font-weight: 400;
line-height: 125%;
}
</style>