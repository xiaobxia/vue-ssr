<template>
  <div>用户名：{{user.name}}</div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex';
  export default{
    data() {
      return {}
    },
    title() {
      return this.user.name;
    },
    asyncData ({store, route: {params: {id}}}) {
      return store.dispatch('FETCH_USER', {id})
    },
    computed: {
      ...mapGetters(['user'])
    },
    mounted() {
    },
    methods: {
      ...mapActions(['FETCH_USER']),
    }
  }
</script>
<style>
</style>
