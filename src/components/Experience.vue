<template>
    <div class="experience">
        <section id="experiences">
            <el-row :gutter="20">
                <el-col :span="6"> <img src="../assets/adventure.jpg"></el-col>
                <el-col :span="6"> <img src="../assets/adventure.jpg"></el-col>
                <el-col :span="6"> <img src="../assets/adventure.jpg"></el-col>
                <el-col :span="6"> <img src="../assets/adventure.jpg"></el-col>
            </el-row>
            
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.experience{
     max-width: 1000px;;
  width: 100%;
  margin: 0 auto;
}
img{
    width: 100%;
}
    .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
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
