<template>
  <div id="Properties" class="container-fluid mb-3">
    <div id="PropertyType" class="row">
      <div class="types col-4">
        <nav class="nav nav-fill">
          <a class="nav-item nav-link active" href="#">Condominium</a>
          <a class="nav-item nav-link" href="#">House & Lot</a>
          <a class="nav-item nav-link" href="#">Offices</a>
          <a class="nav-item nav-link" href="#">Commercial</a>
          <a class="nav-item nav-link" href="#">Resale</a>
        </nav>
      </div>
    </div>
    <div class="properties-detail row mt-3">
      <div class="property col-3">
        <div class="card">
          <img class="card-img-top" src="../../assets/properties/ayalaland/sample1.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Celadon Park</h5>
            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <p class="mb-0">Santa Cruz, Manila Metro Manila, Philippines</p>
            <p class="mb-0">Starts at P2.2M</p>
          </div>
          <!-- <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul> -->
          <a href="/#/ayalaland/celadon" class="card-body action p-2 text-center text-uppercase font-weight-bold">
            <!-- <a href="#" class="card-link">Card link</a> -->
            View Property
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Properties'
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
