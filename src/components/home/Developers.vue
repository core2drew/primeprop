<template>
  <div id="PropertyDeveloper" class="container mt-5">
    <h3 class="title mb-5">Property Developer</h3>
    <div class="row w-75 mx-auto mb-5">
      <div class="developer col-lg-4 d-flex justify-content-center align-items-center">
        <img class="ayalaland" src="../../assets/propertydevlopers/ayala-land.png" alt="Ayala Land"/>
      </div>
      <div class="developer col-lg-4 d-flex justify-content-center align-items-center">
        <img class="rockwell" src="../../assets/propertydevlopers/rockwell.png" alt="rockwell"/>
      </div>
      <div class="developer col-lg-4 d-flex justify-content-center align-items-center">
        <img class="megaworld" src="../../assets/propertydevlopers/mega-world.png" alt="Mega World"/>
      </div>
    </div>
    <div class="row w-75 mx-auto">
      <div class="developer col-lg-4 d-flex justify-content-center align-items-center">
        <img class="torredelorenzo" src="../../assets/propertydevlopers/torre-de-lorenzo.png" alt="Torre De Lorenzo"/>
      </div>
      <div class="developer col-lg-4 d-flex justify-content-center align-items-center">
        <img class="camaya" src="../../assets/propertydevlopers/camaya.png" alt="Camaya"/>
      </div>
      <div class="developer col-lg-4 d-flex justify-content-center align-items-end">
        <img class="dcmi" src="../../assets/propertydevlopers/dcmi.png" alt="DCMI"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Developers'
}
</script>

<style>
#PropertyDeveloper {
  margin-bottom: 10rem;
}

#PropertyDeveloper > .title {
  text-align: center;
  font-size: 2.5em;
  font-weight: 400;
}

#PropertyDeveloper > .title:after {
  height: 3px;
  width: 50px;
  background-color: #108738;
  display: block;
  content: "";
  margin: auto;
  position: relative;
  top: 10px;
}

#PropertyDeveloper > .row > .developer > .ayalaland {
  width: 75%
}

#PropertyDeveloper > .row > .developer > .rockwell {
  width: 80%
}

#PropertyDeveloper > .row > .developer > .megaworld {
  width: 85%
}

#PropertyDeveloper > .row > .developer > .torredelorenzo {
  width: 35%;
}

#PropertyDeveloper > .row > .developer > .camaya {
  width: 75%
}

#PropertyDeveloper > .row > .developer > .dcmi {
  width: 100%;
}
</style>
