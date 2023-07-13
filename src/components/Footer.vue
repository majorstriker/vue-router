<template>
  <div class="advantages center">
            <article class="advantages__item_1">
              <div class="advantages__logo"><a href="index.html"><img src="../assets/logo.png" alt="logo"></a>
              <a href="index.html" class="advantages_heading">Interno</a></div>
              <div class="advantages__text">
                It is a long established fact that a reader will be distracted lookings.
              </div>
            </article>
            <article class="advantages__item_2">
                <p class="advantages_heading_small">Pages</p>
                <a href="index.html" class="advantages__text">Home</a>
                <a href="project.html" class="advantages__text">Project</a>
                <a href="blog.html" class="advantages__text">Blog</a>
            </article>
            <article class="advantages__item_3">
              <p class="advantages_heading_small">Contact</p>
                <p class="advantages__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p class="advantages__text">contact@interno.com</p>
                <p class="advantages__text">(123) 456 - 7890</p>
            </article>
        </div>
</template>

<script>
export default {
  name: 'FooterComp',

  data() {
    return {
      logoUrl: './assets/logo.png'
    };
  },


  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.advantages {
  background-color: #fff;
  padding-top: 96px;
  padding-bottom: 141px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 101px;
  &__logo {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  &_heading {
    color: #292F36;
    font-size: 40px;
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    &_small {
      color: #292F36;
      font-size: 25px;
      font-family: DM Serif Display;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
  }
  &__item_1 {
    display: flex;
    width: 393px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
  &__item_2 {
    display: flex;
    width: 125px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    flex-shrink: 0;
  }
  &__item_3 {
    display: flex;
    width: 258px;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
    flex-shrink: 0;
  }
  &__heading {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FBFBFB;
  }
  &__text {
    color: #4D5053;
    font-size: 22px;
    font-family: Jost;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}
</style>