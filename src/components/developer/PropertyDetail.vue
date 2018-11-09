<template>
  <div class="properties-detail row mt-3">
    <div class="property col-3" v-for="(value, key) in properties" v-bind:key="key">
      <div class="card">
        <img class="card-img-top" v-bind:src="value.featureImage.url" v-bind:alt="value.featureImage.alt">
        <div class="card-body">
          <h5 class="card-title">{{value.title}}</h5>
          <p class="mb-0">{{value.location}}</p>
          <p class="mb-0" v-if="value.hasOwnProperty('price')">{{value.price}}</p>
        </div>
        <router-link v-bind:to="`premier/${value.name}`" class="card-body action p-2 text-center text-uppercase font-weight-bold">
          View Property
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyDetail',
  props: ['properties']
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
