<template>
    <div class="container-fluid px-0 h-100">
      <TopMenu v-bind:class="{ developer: isDeveloperPage}" v-bind:staticLogo="logo" v-bind:isDeveloperPage="isDeveloperPage"/>
      <PropertyInfo />
      <Footer />
    </div>
</template>

<script>
import TopMenu from '../TopMenu'
import Footer from '../Footer'
import PropertyInfo from './PropertyInfo'
export default {
  name: 'Info',
  components: {
    TopMenu,
    PropertyInfo,
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
