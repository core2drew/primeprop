<template>
  <div id="Projects" class="container-fluid mb-3">
    <h3 class="text-capitalize">{{getPropertyTitle}}</h3>
    <Project v-bind:projects="getProjects" v-bind:property="property"/>
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
      propertyName: {
        ayalaland: {
          premier: 'Ayala Land Premier',
          alveo: 'Alveo'
        }
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
    getPropertyTitle: function () {
      let developer = this.$route.params.developer
      let property = this.$route.params.property
      return this.propertyName[developer][property]
    },
    property: function() {
      return this.$route.params.property
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
