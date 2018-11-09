<template>
  <div class="container-fluid px-0 h-100">
    <TopMenu v-bind:class="{ developer: isDeveloperPage}" v-bind:staticLogo="logo" v-bind:isDeveloperPage="isDeveloperPage"/>
    <router-view v-bind:developers="developers"></router-view>
    <Footer />
  </div>
</template>

<script>
import TopMenu from '../TopMenu'
import Footer from '../Footer'
export default {
  name: 'Developer',
  components: {
    TopMenu,
    Footer
  },
  data () {
    return {
      isDeveloperPage: true,
      logo: require('../../assets/prime_logo_secondary.svg'),
      developers: {
        ayalaland: {
          premier: [
            {
              title: 'Parklinks',
              name: 'parklinks',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'parklinks-feature-image'
              },
              location: 'Quezon City and Pasig'
            },
            {
              title: 'Alviera',
              name: 'alviera',
              featureImage: {
                url: require('../../assets/properties/ayalaland/premier/parklinks.jpg'),
                alt: 'alviera-feature-image'
              },
              location: 'Porac, Pampanga'
            }
          ]
        }
      }
    }
  }
}
</script>

<style>

</style>
