<template>
    <div class="block">
        <el-carousel height="450px">
            <!-- <el-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></el-carousel-item> -->
            <el-carousel-item 
                v-for="imagen in imagens" 
                :src="imagen.ruta" 
                :key="imagen.id">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    // data () {
    //   return {
    //     items: [
    //       {
    //         src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
    //       },
    //       {
    //         src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
    //       },
    //       {
    //         src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
    //       },
    //       {
    //         src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    //       }
    //     ]
    //   }
    // }
    data(){
        return{
            imagens: [
                {ruta: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 'imagen1'},
                {ruta: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', id: 'imagen2'}
            ]
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
