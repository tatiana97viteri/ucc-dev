<template>
    <div class="container-experience">
      <div class="experience">
        <section>
          <el-row :gutter="20">
            <el-col :span="8"> 
              <!-- <el-popover
                placement="top-end"
                title="Parque temáticos - Deportes extremos"
                width="200"
                trigger="hover">
                <img slot="reference" src="https://images.pexels.com/photos/342111/pexels-photo-342111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              </el-popover> -->
              <img @mouseover="show = true" @mouseleave="show = false" src="https://images.pexels.com/photos/342111/pexels-photo-342111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              <div class="mensaje" v-if="show"> <span>Parque temáticos <br> Deportes extremos</span> </div>
            </el-col>
            <el-col :span="8"> 
              <!-- <el-popover
                placement="top-end"
                title="Restaurantes - Bares - Centros comerciales"
                width="200"
                trigger="hover">
                <img slot="reference" src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              </el-popover> -->
              <img @mouseover="show2 = true" @mouseleave="show2 = false" src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <div class="mensaje" v-if="show2"> <span >Restaurantes - Bares <br> Centros comerciales</span> </div>
            </el-col>
            <el-col :span="8"> 
              <!-- <el-popover
                placement="top-end"
                title="Santuarios - Sitios culturales"
                width="200"
                trigger="hover">
                <img slot="reference" src="https://images.pexels.com/photos/696295/pexels-photo-696295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              </el-popover> -->
                <img @mouseover="show3 = true" @mouseleave="show3 = false" src="https://images.pexels.com/photos/696295/pexels-photo-696295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <div class="mensaje" v-if="show3"> <span >Santuarios <br> Sitios culturales</span> </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"> 
              <!-- <el-popover
                placement="top-start"
                title="Hospedajes - Alquileres de transporte"
                width="200"
                trigger="hover">
                <img slot="reference" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              </el-popover> -->
              <img @mouseover="show4 = true" @mouseleave="show4 = false" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              <div class="mensaje" v-if="show4"> <span >Hospedajes <br> Alquileres de transporte</span> </div>
            </el-col>
            <el-col :span="8"> 
              <!-- <el-popover
                placement="top-start"
                title="Museos - Galerias"
                width="200"
                trigger="hover">
                <img slot="reference" src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              </el-popover> -->
              <img @mouseover="show5 = true" @mouseleave="show5 = false" src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              <div class="mensaje" v-if="show5"> <span >Museos <br> Galerias</span> </div>
            </el-col>
            <el-col :span="8"> 
              <!-- <el-popover
                placement="top-start"
                title="Reservas naturales - Resguardos indígenas"
                width="200"
                trigger="hover">
                <img slot="reference" src="https://images.pexels.com/photos/295168/pexels-photo-295168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              </el-popover> -->
              <img @mouseover="show6 = true" @mouseleave="show6 = false" src="https://images.pexels.com/photos/295168/pexels-photo-295168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
              <div class="mensaje" v-if="show6"> <span >Reservas naturales <br> Resguardos indígenas</span> </div>
            </el-col>
          </el-row>
        </section>
      </div>  
    </div>
</template>

<script>
export default {
 data: () => ({
      show: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    })
}
</script>

<style scoped>
  img{
      width: 100%;
      border-radius: 15px;
      position: relative;
  }
  img:hover{
    opacity: 0.9;
  }
  /* .el-popover{
    text-align: center;
    font-size: 13px;
  } */
  .mensaje{
    justify-content: center;
    position: absolute;
    top: 35%;
    align-content: center;
    background: whitesmoke;
    opacity: 0.5;
    padding: 5px;
    border-radius: 5px;
    width: 100%;
  }
  span{
    font: 2em sans-serif;
    color: rgb(78, 77, 77);
    width: 100%;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    display:inline-block;
    position:relative;
    text-align: center;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  
</style>
