<template>
    <div class="container-fluid px-0 h-100">
      <TopMenu v-bind:class="{ developer: isDeveloperPage}" v-bind:staticLogo="logo" v-bind:isDeveloperPage="isDeveloperPage"/>
      <Properties />
      <Footer />
    </div>
</template>

<script>
import TopMenu from '../TopMenu'
import Footer from '../Footer'
import Properties from './Properties'
export default {
  name: 'Developer',
  components: {
    TopMenu,
    Properties,
    Footer
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
