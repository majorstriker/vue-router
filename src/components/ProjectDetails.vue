<template>
  <div class="details">
    <div class="details__item" v-for="(elem, index) in data" :key="index">{{ elem }}</div>  
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProjectDetails',
  methods: {
    ...mapActions(['fetchData']),
  },
  computed: {
    ...mapState(['data'])
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  width: 1200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 42px;
  margin-top: 150px;
}
.details__item {
  width: 658px;
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
</style>