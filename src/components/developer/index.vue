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
              location: 'Quezon City and Pasig',
              googleMap: 'https://www.google.com.hk/maps/place/Parklinks/@14.5984321,121.0776451,16.75z/data=!4m5!3m4!1s0x3397b8002edc464b:0xc4affe8a470bb3d9!8m2!3d14.5983005!4d121.0798039',
              overview:
                `<p>This fourth quarter, Ayala Land Premier unveils its newest residential tower in Parklinks.</p>
                <p class='text-uppercase font-weight-bold'>DISCOVER A DYNAMIC LIFE ENHANCED BY PANORAMIC LIVING AND URBAN CONVENIENCE</p>
                <p>
                  A joint venture between Ayala Land and Eton Properties, 
                  two of the country’s leading property developers, 
                  Parklinks is Ayala Land’s first master-planned mixed-used 
                  development in Quezon City and Pasig. Covering 35 hectares, 
                  it is envisioned to be the greenest urban estate in Metro Manila and the 
                  largest along the C-5 corridor.
                </p>`,
              details:
                `<p class='font-weight-bold'>Creating New Connections</p>
                <p>
                  With fifty percent of the 35-hectare estate dedicated to parks and open spaces, 
                  future residents will enjoy immediate access to four extensive parks, 
                  all linked to nurture an active lifestyle close to nature.
                </p>
                <p>
                  <b>Central Park:</b> a 3-hectare park with sprawling lawns and a line of retail establishments </br>
                  <b>River Park Terraces:</b> parks overlooking the river and include bike lanes, a viewing deck, nursery, and café </br>
                  <b>Riparian Gardens:</b> an enveloping green space patterned after the natural landscape of the area </br>
                  <b>River Esplanade:</b> a civic space fronting the river and directly accessible from Ayala Land Premier’s development
                </p>
                <p>
                  Intended to be a landmark of Parklinks, the River Esplanade will be an open stretch of landscape beside the Marikina river, featuring a large plaza and a covered pathway leading to the Parklinks Bridge. It will be directly accessible by the residents of Ayala Land Premier’s residential development on the east side.
                </p>
                <p>
                  Set to open in 2022, Ayala Malls Parklinks will be a 5-story premium shopping center with a large sports complex, an office space, and an entertainment zone. It will be directly accessible from C-5, giving future residents a dynamic living experience of utmost connectivity and convenience.
                </p>`
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
