<template>
  <div id="PropertyInfo" class="container p-4">
    <div class="row">
      <div class="col">
        <h2 class="h2 title">Parklinks</h2>
      </div>
    </div>
    <div class="row">
      <div id="PropertyGallery" class="col-4">
        <div class="card">
          <img class="card-img-top" src="../../assets/properties/ayalaland/premier/parklinks.jpg" alt="Parklinks">
          <a href="#" class="card-body action p-2 text-center">
            View Gallery
          </a>
        </div>
      </div>
      <div id="PropertyDetails" class="col-8">
        <div class="row flex-column mb-3 no-gutters">
          <div id="Address" class="col-lg-12">
            <h3 class="title h5 text-uppercase">Location</h3>
            <p class="m-0">Felix Huertas St., Barangay 350, Zone 35, Sta. Cruz, Manila</p>
            <a id="GoogleMap" href="#" class="btn btn-success">Google Map</a>
          </div>
        </div>
        <div class="row flex-column mb-3 no-gutters">
          <div class="col-lg-12">
            <h3 class="title h5 text-uppercase">Description</h3>
            <p class="mb-0">
              An outstanding community dedicated to nurturing relaxation and
              rejuvenation, Celadon Park stands out as a picturesque, tranquil
              getaway in the heart and haven of Manila.
            </p>
          </div>
        </div>
        <div class="row flex-column mb-3 no-gutters">
          <div class="col-lg-12">
            <h3 class="title h5 text-uppercase">Unit Range</h3>
            <p class="note">(approx. sizes only)</p>
            <ul class="list-unstyled">
              <li>Studio Unit: 24-40 sq.m.</li>
              <li>One-Bedroom Unit: 49-85 sq.m.</li>
              <li>Two-Bedroom Unit: 69-70 sq.m.</li>
            </ul>
          </div>
        </div>
        <div class="row flex-column mb-3 no-gutters">
          <div id="FeatureAmenities" class="col-lg-12">
            <h3 class="title h5 text-uppercase">Feature & Amenities</h3>
            <h4 class="sub-title h6">Outdoor Amenities</h4>
            <ul class='amenities-list'>
              <li>25-meter Swimming Pool</li>
              <li>Children's Pool</li>
              <li>Lounge Pool</li>
              <li>Private Massage Cabanas</li>
              <li>Jacuzzi and Sauna</li>
              <li>Garden Sitting Areas</li>
              <li>Barbeque and Grilling Area</li>
              <li>Wooden Lounge Deck</li>
              <li>Exercise Lawn</li>
              <li>Viewing Deck</li>
              <li>Meditation Garden</li>
              <li>Full-sized Basketball and Multi-purpose Court</li>
            </ul>

            <h4 class="sub-title h6">Indoor Amenities</h4>
            <ul class='amenities-list'>
              <li>Function Rooms</li>
              <li>Children's Activity Area</li>
              <li>Gym and Fitness Center</li>
              <li>Game Room</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style>
#PropertyInfo {
  margin-top: 7em;
  margin-bottom: 5em;
  min-height: 100%;
  padding-bottom: 52px;
  background-color: #fff;
}

#PropertyInfo > .row > #PropertyGallery > .card > .action {
  background-color: #108738;
  color: #fff;
}

#PropertyInfo > .row > #PropertyGallery > .card > .action:hover {
  text-decoration: none;
}

#PropertyInfo > .row > #PropertyDetails > .row > #Address > #GoogleMap {
  width: 110px;
  font-size: 0.8em;
}

#PropertyInfo > .row > #PropertyDetails > .row > #FeatureAmenities > .amenities-list {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>
