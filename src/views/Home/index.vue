<template>
  <div>
    <div v-for="user in users">{{user.name}}</div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex';
  export default{
    title: '首页',
    data() {
      return {}
    },
    asyncData ({store}) {
      return store.dispatch('FETCH_USERS')
    },
    computed: {
      ...mapGetters(['users'])
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style>
</style>
