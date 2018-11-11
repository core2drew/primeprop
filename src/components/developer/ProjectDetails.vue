<template>
  <div id="ProjectDetails" class="container p-4">
    <div class="row">
      <div class="col">
        <h2 class="h2 title">{{projectDetails.title}}</h2>
      </div>
    </div>
    <div class="row">
      <div id="ProjectGallery" class="col-5">
        <div class="card">
          <img class="card-img-top" v-bind:src="projectDetails.featureImage.url" v-bind:alt="projectDetails.featureImage.alt">
          <a href="#" class="card-body action p-2 text-center">
            View Gallery
          </a>
        </div>
      </div>
      <div id="ProjectInfo" class="col-7">
        <div v-if="projectDetails.hasOwnProperty('address')" class="row flex-column mb-3 no-gutters">
          <div id="Address" class="detail col-lg-12">
            <h3 class="title h5 text-uppercase d-flex align-item-center justify-content-between">
              Location
              <a id="GoogleMap" v-bind:href="projectDetails.googleMap" target="_blank">View Google Map</a>
            </h3>
            <p class="mb-1">{{projectDetails.address}}</p>
          </div>
        </div>
        <div v-if="projectDetails.hasOwnProperty('overview')" class="row flex-column mb-3 no-gutters">
          <div id="Overview" class="detail col-lg-12">
            <h3 class="title h5 text-uppercase">Overview</h3>
            <div class='description' v-html="projectDetails.overview"></div>
          </div>
        </div>
        <div v-if="projectDetails.hasOwnProperty('details')" class="row flex-column mb-3 no-gutters">
          <div id="Details" class="detail col-lg-12">
            <h3 class="title h5 text-uppercase">Details</h3>
            <div class="description" v-html="projectDetails.details"></div>
          </div>
        </div>
        <div v-if="projectDetails.hasOwnProperty('unitRange')" class="row flex-column mb-3 no-gutters">
          <div id="UnitRange" class="detail col-lg-12">
            <h3 class="title h5 text-uppercase">Unit Range</h3>
            <div class="description" v-html="projectDetails.unitRange"></div>
          </div>
        </div>
        <div v-if="projectDetails.hasOwnProperty('priceRange')" class="row flex-column mb-3 no-gutters">
          <div id="PriceRanage" class="detail col-lg-12">
            <h3 class="title h5 text-uppercase">Price Range</h3>
            <div class="description" v-html="projectDetails.priceRange"></div>
          </div>
        </div>
        <div v-if="projectDetails.hasOwnProperty('amenities')" class="row flex-column mb-3 no-gutters">
          <div id="Amenities" class="detail col-lg-12">
            <h3 class="title h5 text-uppercase">Feature and Amenities</h3>
            <div class="description" v-html="projectDetails.amenities"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: ['developers'],
  computed: {
    projectDetails: function () {
      let developer = this.$route.params.developer
      let property = this.$route.params.property
      let project = this.$route.params.project

      return this.developers[developer][property].reduce((details, current) => {
        if (current.name === project) {
          return {...details, ...current}
        }
        return details
      }, {})
    }
  }
}
</script>

<style>
#ProjectDetails {
  margin-top: 7em;
  margin-bottom: 5em;
  min-height: 100%;
  padding-bottom: 52px;
  background-color: #fff;
}

#ProjectDetails > .row > #ProjectGallery > .card > .action {
  background-color: #108738;
  color: #fff;
}

#ProjectDetails > .row > #ProjectInfo > .card > .action:hover {
  text-decoration: none;
}

#ProjectDetails > .row > #ProjectInfo > .row > .detail > .title {
  border-bottom: 3px solid #108738;
}

#ProjectDetails > .row > #ProjectInfo > .row > #Address > .title > #GoogleMap {
  font-size: 0.8em;
  color: #006837;
}

#ProjectDetails > .row > #ProjectInfo > .row > #Address > .title > #GoogleMap:hover {
  text-decoration: none;
}

#ProjectDetails > .row > #ProjectInfo > .row > #Amenities > .description > ul{
  padding-left: 18px;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
