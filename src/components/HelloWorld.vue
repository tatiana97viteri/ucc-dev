<template>
  <div>
    <v-flex xs12 class="hello">
      <section id="home">
          <div class="container">
            <div class="row">
              <img src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="home img" >
            </div>
            <div class="title">
              <p>Este es un buen día para</p>
              <h1>UNA NUEVA EXPERIENCIA</h1>
              <p>Descubre los mejores lugares a tu alrededor</p>
              <v-btn round color="blue" dark v-scroll-to="'#registrar'">Registrate</v-btn>
            </div>
          </div>
      </section>
    </v-flex>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;
  color: white;
  margin: 0%;
  padding: 0%;
}
img{
  width: 100%;
  object-fit: cover;
  height: 600px;
  margin: 0%;
}
.home{
  margin: 0;
}
.title{
    position: absolute;
    top: 10px;
    left: 10px;
    text-align: left;
    padding: 18% 0 0 10%;
}
.title p,h1{
  margin: 5px;
}
.hello{
  position: relative;
  padding: 0%;
  margin: 0%;
}
/* .row{
  width: 100%;
  height: 600px;
} */
</style>
