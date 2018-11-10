<template>
  <div class="properties-detail row mt-3">
    <div class="property col-3" v-for="(project, key) in projects" v-bind:key="key">
      <div class="card">
        <img class="card-img-top" v-bind:src="project.featureImage.url" v-bind:alt="project.featureImage.alt">
        <div class="card-body">
          <h5 class="card-title">{{project.title}}</h5>
          <p class="mb-0">{{project.location}}</p>
          <p class="mb-0" v-if="project.hasOwnProperty('price')">{{project.price}}</p>
        </div>
        <router-link v-bind:to="`premier/${project.name}`" class="card-body action p-2 text-center text-uppercase font-weight-bold">
          View Property
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['projects']
}
</script>

<style>
.properties-detail > .types > .nav {
  background-color: #006837;
}

.properties-detail > .types > .nav > .nav-item {
  color: #fff;
}

.properties-detail > .types > .nav > .nav-item.active {
  background-color: #108738;
}

.properties-detail > .property > .card > .action{
  background-color: #108738;
  color: #fff;
}

.properties-detail > .property > .card > .action:hover {
  text-decoration: none;
}

</style>
