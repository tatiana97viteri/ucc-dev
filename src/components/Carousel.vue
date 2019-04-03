<template>
  <div class="container">
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://www.urnadecristal.gov.co/sites/default/files/TURISMO%202%20.jpg'
          },
          {
            src: 'https://static.iris.net.co/semana/upload/images/2015/9/12/442333_145130_1.jpg'
          },
          {
            src: 'https://www.eltiempo.com/files/article_main/files/crop/uploads/2018/09/26/5bac156608dbe.r_1538004717754.0-8-950-484.jpeg'
          },
          {
            src: 'https://storage.googleapis.com/pnn-web/uploads/2017/10/realismo-ma%CC%81gico.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
  .container{
    position: relative;
    padding: 10px;
    margin-top: 200px;
    width: 100%;
  }
</style>
