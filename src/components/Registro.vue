<template>
    <div class="registro">
        
        <section id="registrar">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6" class="formExperience">
                        <el-form  ref="form" :model="form" label-width="100px">
                            <h1>Regístrate</h1>
                            <el-form-item label="Nombres">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="Correo">
                                <el-input v-model="form.mail"></el-input>
                            </el-form-item>
                            <el-form-item label="Contraseña">
                                <el-input type="passwords" v-model="form.password"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
                            </el-form-item>
                        </el-form>
                </el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          mail:'',
          password:''
        }
      }
    },
    methods: {
      submitForm() {
          const data = JSON.stringify ({name: this.form.name, mail: this.form.mail,password: this.form.password});
          const datos="name="+this.form.name;
          let options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': this.form.name,'mail':this.form.mail, 'password':this.form.password})
            }
        fetch("http://localhost/experiences/registro.php",options ).then(d => d.text()).then(d => { alert(d) });
      }
    }
    
}
</script>

<style scoped>
.registro{
    max-width: 1000px;
  width: 100%;
  margin: 0 auto;

}
.el-row{
    padding: 20px;
}
.formExperience{
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    padding-right: 42px !important;
}

</style>
