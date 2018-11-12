<template>
  <div id="AboutUs" class="container mt-5">
    <h3 class="title mb-5">About Us</h3>
    <!-- <div class="profile-image mx-auto mb-3">
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb" alt="profile-image" class="img-thumbnail rounded-circle">
    </div> -->
    <p class="w-75 mx-auto">Dear Valued Client,</p>
    <p class="w-75 mx-auto text-justify">
      Buying or Selling your property is a big challenge! Why? We are talking about our hard earned money and or future lifestyle. Buying or
      selling your own property on your own requires a large amount of  time and energy because you will need to do  many of the task a real
      estate broker would professionally do it in your behalf.
    </p>
    <p class="w-75 mx-auto text-justify">
      Real estate brokers are professionally trained to handle the buying/selling process.
      <ul>
          <li>Brokers are in the mainstream property selection and property market values.</li>
          <li>Brokers have all the time to do their research on what is the best property pick & the best possible price you can sell your property.</li>
          <li>Brokers ensure that the contracts and other legal matters are in order.</li>
          <li>Brokers save your time by showing you properties based on your lifestyle requirements or they have buyers in mind who might be interested in the property you want to sell.</li>
          <li>Brokers are bound to follow the Code of Ethics in practicing Real Estate an are Registered with Philippine Regulatory Commission.</li>
      </ul>
    </p>
    <p class="w-75 mx-auto text-justify">
      Despite the drawbacks of having to rely on someone else, a good real estate broker is worth your money. 
      Finding a good real estate broker is the first step in buying or selling your properties. 
      You may look at the PRC website for the list of License Real Estate Broker.
      <a href="https://www.prc.gov.ph" target="_blank">www.prc.gov.ph</a>
    </p>
    <p class="w-75 mx-auto text-justify">SECURE YOUR TRANSACTION BY DEALING WITH ONLY LICENSED REAL ESTATE BROKERS,  THUS, SECURING YOUR HARD EARNED MONEY.</p>
    <p class="w-75 mx-auto text-justify">And lastly, choose a broker  who has been in practice in real estate industry for long productive years. Better, if they were referred by your satisfied friends and colleagues.</p>
    <p class="w-75 mx-auto text-justify">And get a broker who is a tough negotiator on your behalf.</p>
    <p class="w-75 mx-auto text-justify">Please feel free to seek any real estate services, 
    either you are buying or selling properties or want any updates on property market rom the name given below</p>
    <p class="w-75 mx-auto">Sincerely.</p>
    <div class="w-75 mx-auto d-flex align-items-end justify-content-between">
      <p class="mb-0">
        Amelia "Amy" A. Galam <br/>
        Licensed Real Estae Broker<br/>
        REBL No. 0010388<br/>
        Member, Pasay Makati Realty Board { PMRB }<br/>
      </p>
      <img v-bind:src="pmrb_logo" width="70px" height="70px" class="mt-1" alt="prmb-logo"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data: function () {
    return {
      pmrb_logo: require('../../assets/pmrb_logo.png')
    }
  }
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
