<template>
  <div id="Projects" class="container-fluid mb-3">
    <h3 class="text-capitalize">{{getTitle}}</h3>
    <Project v-bind:projects="getProjects"/>
  </div>
</template>

<script>
import Project from './Project'
export default {
  name: 'Projects',
  components: {
    Project
  },
  data: function () {
    return {
      developerNames: {
        'ayalaland': 'Ayala Land',
        'rockwell': 'Rockwell',
        'megaworld': 'Megaworld'
      }
    }
  },
  props: ['developers'],
  computed: {
    getProjects: function () {
      let developer = this.$route.params.developer
      let property = this.$route.params.property
      return this.developers[developer][property]
    },
    getTitle: function () {
      let developer = this.$route.params.developer
      let property = this.$route.params.property
      let title = `${this.developerNames[developer]} ${property}`
      return title
    }
  }
}
</script>

<style>
#Projects {
  margin-top: 7em;
  min-height: 100%;
  padding-bottom: 52px;
}

#Projects > #PropertyType > .types > .nav {
  background-color: #108738;
}

#Projects > #PropertyType > .types > .nav > .nav-item {
  color: #fff;
}

#Projects > #PropertyType > .types > .nav > .nav-item.active {
  background-color: #006837;
}

#Projects > .properties-detail > .types > .nav {
  background-color: #006837;
}

#Projects > .properties-detail > .types > .nav > .nav-item {
  color: #fff;
}

#Projects > .properties-detail > .types > .nav > .nav-item.active {
  background-color: #108738;
}

#Projects > .properties-detail > .property > .card > .action{
  background-color: #108738;
  color: #fff;
}

#Projects > .properties-detail > .property > .card > .action:hover {
  text-decoration: none;
}
</style>
