<template>
  <div class="home">
    <Header />
    <div><img class="header" src="../assets/top.jpg"></div>
    <ProjectDetails />
    <div class="attach">
            <div class="slider_case">
                <v-slider v-bind="options">
                    <div class="item"><img src="../assets/slider.jpg"></div>
                    <div class="item"><img src="../assets/slider.jpg"></div>
                    <div class="item"><img src="../assets/slider.jpg"></div>
                </v-slider>
            </div>

        </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import slider from '../components/slider.vue'
import ProjectDetails from '../components/ProjectDetails.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    ProjectDetails,
    'v-slider': slider,
    Footer 
  },
  computed: {
    details () {
      return this.$store.state.projectDetails
    }
  }
}
</script>
