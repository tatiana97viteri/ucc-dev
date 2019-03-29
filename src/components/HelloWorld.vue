<template>
  <div class="hello">
    <!-- <el-container>
      <el-main>
        <img src="../assets/adventure.jpg" alt="">
      </el-main>
    </el-container> -->
    <section id="home">
        <div class="container">
          <div class="row">
            <img src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="home img" >
          </div>
          <div class="title">
            <p>Este es un buen día para</p>
            <h1>UNA NUEVA EXPERIENCIA</h1>
            <p>Descubre los mejores lugares a tu alrededor</p>
            <el-button type="primary" v-scroll-to="'#registrar'">Registrate</el-button>
            <!-- <el-button type="primary" @click="dialogFormVisible = true">Iniciar Sesion</el-button>

            <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="Please select a zone">
                    <el-option label="Zone No.1" value="shanghai"></el-option>
                    <el-option label="Zone No.2" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
              </span>
            </el-dialog> -->


          </div>
        </div>
    </section>
    <!--<el-carousel :interval="5000" arrow="always" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div>

    </div>
     <div class="description">
      <h1>Carabolo LP is <br>
      The best solution for you</h1>
      <p>
        Efficienty unleash cross-media information without cross-media value.<br>
        Quickly maximize timely deliverables for real-time schemas. Dramatically <br>
        maintain clicks-and-mortar solutions without functional solutions.
      </p>
      <p v-if="mostrar">
        Efficienty unleash cross-media information without cross-media value.<br>
        Quickly maximize timely deliverables for real-time schemas. Dramatically <br>
        maintain clicks-and-mortar solutions without functional solutions.
      </p>
      <!<button type="button" @click="toggleText">DOWNLOAD APP</button>
      <el-button type="primary" @click="toggleText"> APP</el-button>
    </div>
    <div class="phone">
      <img src="../assets/phone.png">
    </div> -->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello{
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
} */
/* button{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  background-color: #965fd2;
  border-radius: 10px;
  padding: 15px;
} */
/* .hello{
  position: absolute;
  top: 0;
} */
.container{
  position: relative;
  width: 100%;
  color: white;
}
img{
  width: 100%;
  object-fit: cover;
  height: 600px;
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
