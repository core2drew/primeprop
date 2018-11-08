<template>
  <div class="container-fluid px-0 h-100">
    <TopMenu v-bind:class="{ developer: isDeveloperPage}" v-bind:staticLogo="logo" v-bind:isDeveloperPage="isDeveloperPage"/>
    <Info />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '../TopMenu'
import Footer from '../Footer'
import Info from './Info'
export default {
  name: 'PropertyInfo',
  components: {
    TopMenu,
    Footer,
    Info
  },
  data () {
    return {
      isDeveloperPage: true,
      logo: require('../../assets/prime_logo_secondary.svg')
    }
  }
}
</script>

<style>

</style>
