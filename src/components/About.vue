<template>
  <div id="AboutUs" class="container mt-5">
    <h3 class="title mb-5">About Us</h3>
    <div class="profile-image mx-auto mb-3">
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb" alt="profile-image" class="img-thumbnail rounded-circle">
    </div>
    <p class="w-75 mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam magna
        ac ligula gravida, ac elementum nibh malesuada. Ut at nisl ipsum. Suspendisse
        molestie nisl sed nibh dignissim hendrerit. Nunc vel facilisis nunc, eu auctor
        enim. Quisque fringilla malesuada metus a vulputate. Pellentesque mollis, velit eu
        rhoncus lacinia, sapien nunc congue dui, vitae efficitur purus odio a felis.
        Vivamus suscipit malesuada nisi, vel vehicula ante sodales quis.
    </p>
    <p class="w-75 mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam magna
        ac ligula gravida, ac elementum nibh malesuada. Ut at nisl ipsum. Suspendisse
        molestie nisl sed nibh dignissim hendrerit. Nunc vel facilisis nunc, eu auctor
        enim. Quisque fringilla malesuada metus a vulputate. Pellentesque mollis, velit eu
        rhoncus lacinia, sapien nunc congue dui, vitae efficitur purus odio a felis.
        Vivamus suscipit malesuada nisi, vel vehicula ante sodales quis.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
#AboutUs > .title {
  text-align: center;
  font-size: 2.5em;
  font-weight: 400;
}

#AboutUs > .title:after {
  height: 3px;
  width: 50px;
  background-color: #108738;
  display: block;
  content: "";
  margin: auto;
  position: relative;
  top: 10px;
}

#AboutUs > .profile-image {
  width: 160px;
  height: 160px;
}

#AboutUs > .profile-image > .img-thumbnail {
  object-fit: cover;
  object-position: center;
  width: 100%;
  min-height: 100%;
}
</style>
