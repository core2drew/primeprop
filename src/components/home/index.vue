<template>
  <div class="container-fluid px-0 h-100">
    <TopMenu />
    <Welcome />
    <About />
    <Developers />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '../TopMenu'
import Footer from '../Footer'
import Welcome from './Welcome'
import About from './About'
import Developers from './Developers'

export default {
  name: 'Home',
  components: {
    TopMenu,
    Welcome,
    About,
    Developers,
    Footer
  }
}
</script>

<style>

</style>
