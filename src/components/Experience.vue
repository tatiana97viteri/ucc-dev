<template>
    <div class="experience">
        <section id="experiences">
            <el-row :gutter="20">
                <el-col :span="8"> 
                  <el-popover
                    placement="top-end"
                    title="Parque temáticos - Deportes extremos"
                    width="200"
                    trigger="hover">
                    <img slot="reference" src="https://images.pexels.com/photos/342111/pexels-photo-342111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                  </el-popover>
                  <!-- <img @mouseover="show = true" @mouseleave="show = false" src="../assets/adventure.jpg">
                   <span v-if="show">This is a secret message.</span> -->
                </el-col>
                <el-col :span="8"> 
                  <el-popover
                    placement="top-end"
                    title="Restaurantes - Bares - Centros comerciales"
                    width="200"
                    trigger="hover">
                    <img slot="reference" src="https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                  </el-popover>
                  <!-- <img @mouseover="show = true" @mouseleave="show = false" src="../assets/adventure.jpg">
                   <span v-if="show">This is a secret message.</span> -->
                </el-col>
                <el-col :span="8"> 
                  <el-popover
                    placement="top-end"
                    title="Santuarios - Sitios culturales"
                    width="200"
                    trigger="hover">
                    <img slot="reference" src="https://images.pexels.com/photos/696295/pexels-photo-696295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                  </el-popover>
                  <!-- <img @mouseover="show = true" @mouseleave="show = false" src="../assets/adventure.jpg">
                   <span v-if="show">This is a secret message.</span> -->
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8"> 
                  <el-popover
                    placement="top-start"
                    title="Hospedajes - Alquileres de transporte"
                    width="200"
                    trigger="hover">
                    <img slot="reference" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                  </el-popover>
                  <!-- <img @mouseover="show = true" @mouseleave="show = false" src="../assets/adventure.jpg">
                   <span v-if="show">This is a secret message.</span> -->
                </el-col>
                <el-col :span="8"> 
                  <el-popover
                    placement="top-start"
                    title="Museos - Galerias"
                    width="200"
                    trigger="hover">
                    <img slot="reference" src="https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                  </el-popover>
                  <!-- <img @mouseover="show = true" @mouseleave="show = false" src="../assets/adventure.jpg">
                   <span v-if="show">This is a secret message.</span> -->
                </el-col>
                <el-col :span="8"> 
                  <el-popover
                    placement="top-start"
                    title="Reservas naturales - Resguardos indígenas"
                    width="200"
                    trigger="hover">
                    <img slot="reference" src="https://images.pexels.com/photos/295168/pexels-photo-295168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                  </el-popover>
                  <!-- <img @mouseover="show = true" @mouseleave="show = false" src="../assets/adventure.jpg">
                   <span v-if="show">This is a secret message.</span> -->
                </el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
export default {
  data() {
      return {
        visible: false
      };
    }
//  data: () => ({
//       show: false
//     })
}
</script>

<style scoped>
.experience{
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}
img{
    width: 100%;
    border-radius: 15px;
}
img:hover{
  opacity: 0.7;
}
.el-popover{
  text-align: center;
  font-size: 13px;
}
    .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    display:inline-block;
    position:relative;
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
