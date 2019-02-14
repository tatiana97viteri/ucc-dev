<template>
  <div class="hello">
    <div class="description">
      <h1>Carabolo LP is <br>
      The best solution for you</h1>
      <p>
        Efficienty unleash cross-media information without cross-media value.<br>
        Quickly maximize timely deliverables for real-time schemas. Dramatically <br>
        maintain clicks-and-mortar solutions without functional solutions.
      </p>
      <button type="button">DOWNLOAD APP</button>
    </div>
    <div class="phone">
      <img src="../assets/phone.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: #9b26af;
  color: white;
  padding: 50px;
  text-align: left;
  display: flex;
  align-self: center;
  justify-content: space-around;
}
.description{
  max-width: 1000px;;
  width: 100%;
  margin: 0 auto;
}
img{
  width: 400px;
}
button{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  background-color: #965fd2;
  border-radius: 10px;
  padding: 15px;
}
</style>
