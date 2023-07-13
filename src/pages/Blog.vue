<template>
  <div class="notfound">
    <Header />
    <div class="notfound__content">
      <div class="left">
            <div class="left__first">
              <img src="../assets/404.jpg" />
            </div>
            <div class="left__second">
              We are sorry, but the page
      you requested was not found
            </div> 
            <button class="left__third"><router-link to="/" class="left__third__text">Back To Home</router-link><img src="../assets/arrow.png"></button>
      </div>
      <div class="right">
        <img class="right__img" src="../assets/404photo.jpg" />
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Blog',
  components: {
    Header
  },

  data() {
    return {
      
    };
  }
};
</script>

<style lang="scss" scoped>
.notfound__content {
  margin-top: 58px;
  display: flex;
  gap: 81px;
  align-items: center;
}
.left {
  display: flex;
  width: 569px;
  flex-direction: column;
  align-items: flex-start;
  &__first {
    padding-bottom: 25px;
  }
  &__second {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.35px;
    margin-bottom: 23px;
  }
  &__third {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    padding: 26px 54px;
    &__text {
      color: #FFF;
      text-align: center;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%;
      letter-spacing: 0.36px;
    }
  }
  
}
.right__img {
  border-radius: 0px 0px 0px 353px;
}

</style>