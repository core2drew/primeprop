<template>
  <div class="container-fluid px-0 h-100">
    <TopMenu />
    <Home />
    <About />
    <Developers />
    <Footer />
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
import Home from '@/components/Home'
import About from '@/components/About'
import Developers from '@/components/Developers'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    TopMenu,
    Home,
    About,
    Developers,
    Footer
  },
  mounted () {
    // this.$nextTick(function () {
    //   var $TopNavbar = window.$('#TopNavbar').not('.developer')
    //   var $NavbarBrand = $TopNavbar.find('#NavbarBrand')

    //   window.$(window).scroll(function () {
    //     if (window.$(this).scrollTop() > 200) {
    //       $TopNavbar.addClass('scrolled')
    //       $NavbarBrand.attr('src', '../assets/prime_logo_secondary.svg')
    //     } else {
    //       $TopNavbar.removeClass('scrolled')
    //       $NavbarBrand.attr('src', '../assets/prime_logo.svg')
    //     }
    //   })
    // })
  }
}
</script>

<style>
html, body {
  height: 100%;
  min-height: 100%;
  color: #1c1c1c;
  background-color: #f8f8f8;
  font-size: 17px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
