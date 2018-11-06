<template>
  <div id="Home" class="jumbotron jumbotron-fluid h-100 mb-0 d-flex align-items-center">
    <div class="container text-center">
      <h1 class="display-3">Welcome to</h1>
      <h1 class="display-3">Prime Properties Philippines</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
#Home {
  background-image: url('../assets/makati-skyline.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

#Home > .container > h1 {
  color: #fff;
  font-weight: bold;
  text-shadow: 3px 5px 3px #000;
}
</style>
