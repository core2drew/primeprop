<template>
  <div id="Properties" class="container-fluid mb-3">
    <h3 class="text-capitalize">{{getTitle}}</h3>
    <PropertyDetail v-bind:properties="getProperties"/>
  </div>
</template>

<script>
import PropertyDetail from './PropertyDetail'
export default {
  name: 'Properties',
  components: {
    PropertyDetail
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
    getProperties: function () {
      let developer = this.$route.params.developer
      let project = this.$route.params.project
      return this.developers[developer][project]
    },
    getTitle: function () {
      let developer = this.$route.params.developer
      let project = this.$route.params.project
      let title = `${this.developerNames[developer]} ${project}`
      return title
    }
  }
}
</script>

<style>
#Properties {
  margin-top: 7em;
  min-height: 100%;
  padding-bottom: 52px;
}

#Properties > #PropertyType > .types > .nav {
  background-color: #108738;
}

#Properties > #PropertyType > .types > .nav > .nav-item {
  color: #fff;
}

#Properties > #PropertyType > .types > .nav > .nav-item.active {
  background-color: #006837;
}

#Properties > .properties-detail > .types > .nav {
  background-color: #006837;
}

#Properties > .properties-detail > .types > .nav > .nav-item {
  color: #fff;
}

#Properties > .properties-detail > .types > .nav > .nav-item.active {
  background-color: #108738;
}

#Properties > .properties-detail > .property > .card > .action{
  background-color: #108738;
  color: #fff;
}

#Properties > .properties-detail > .property > .card > .action:hover {
  text-decoration: none;
}
</style>
