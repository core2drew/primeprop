<template>
  <nav id="TopNavbar" class="navbar navbar-light navbar-expand-lg fixed-top py-0">
    <a class="navbar-brand py-0" href="http://www.primepropertiesphilippines.com">
      <img id="NavbarBrand" v-bind:src="logo" width="150px" height="80px" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ayala Land
          </a>
          <div class="dropdown-menu mt-2" aria-labelledby="navbarDropdown">
            <router-link to="/developer/ayalaland/premier" class="dropdown-item">Ayala Land Premier</router-link>
            <router-link to="#" class="dropdown-item">Alveo</router-link>
            <router-link to="#" class="dropdown-item">Avida</router-link>
            <router-link to="#" class="dropdown-item">Amaia</router-link>
            <router-link to="#" class="dropdown-item">Bella Vita</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="#" class="nav-link">Brokerage</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Other Developers
          </a>
          <div class="dropdown-menu mt-2" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Rockwell</a>
            <a class="dropdown-item" href="#">Mega World</a>
            <a class="dropdown-item" href="#">Torre Lorenzo</a>
            <a class="dropdown-item" href="#">Camaya Coast</a>
          </div>
        </li>
        <li class="nav-item">
          <router-link to="#" class="nav-link">Announcement</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopMenu',
  props: ['staticLogo', 'isDeveloperPage'],
  data () {
    return {
      logo: this.staticLogo ? this.staticLogo : require('../assets/prime_logo.svg')
    }
  },
  methods: {
    handleScroll (e) {
      let $TopNavbar = document.getElementById('TopNavbar')
      if (window.scrollY > 200) {
        this.logo = require('../assets/prime_logo_secondary.svg')
        $TopNavbar.classList.add('scrolled')
      } else {
        this.logo = require('../assets/prime_logo.svg')
        $TopNavbar.classList.remove('scrolled')
      }
    }
  },
  mounted () {
    if (!this.isDeveloperPage) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style>
#TopNavbar > .navbar-collapse > .navbar-nav > .nav-item {
  border-bottom: 2px solid transparent;
}

#TopNavbar > .navbar-collapse > .navbar-nav > .nav-item:hover {
  border-bottom: 2px solid #108738;
}

#TopNavbar > .navbar-collapse > .navbar-nav > .nav-item:nth-last-child(n + 2) {
  margin-right: 30px;
}

#TopNavbar > .navbar-collapse > .navbar-nav > .nav-item > .nav-link {
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

#TopNavbar.scrolled,
#TopNavbar.developer {
  background-color: #fff;
  box-shadow: 0px 4px 15px -8px #000;
  align-items: stretch;
}

#TopNavbar.scrolled > .navbar-collapse,
#TopNavbar.developer > .navbar-collapse {
  align-items: stretch;
}

#TopNavbar.scrolled > .navbar-collapse > .navbar-nav > .nav-item,
#TopNavbar.developer > .navbar-collapse > .navbar-nav > .nav-item {
  display: flex;
  align-items: center;
}

#TopNavbar.scrolled > .navbar-collapse > .navbar-nav > .nav-item:hover,
#TopNavbar.developer > .navbar-collapse > .navbar-nav > .nav-item:hover {
  background-color: #108738;
}

#TopNavbar.scrolled > .navbar-collapse > .navbar-nav > .nav-item:hover > .nav-link,
#TopNavbar.developer > .navbar-collapse > .navbar-nav > .nav-item:hover > .nav-link {
  color: #fff;
}

#TopNavbar.scrolled > .navbar-collapse > .navbar-nav > .nav-item > .nav-link,
#TopNavbar.developer > .navbar-collapse > .navbar-nav > .nav-item > .nav-link {
  color: #108738;
}
</style>
