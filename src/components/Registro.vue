<template>
    <div class="registro">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <section id="registrar">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6" class="formExperience">
                        <el-form  ref="form" :model="form" label-width="100px">
                            <h1>Regístrate</h1>
                            <el-form-item>
                                <el-input 
                                    placeholder="Nombres"
                                    prefix-icon="fa fa-user"
                                    v-model="form.name">
                                </el-input>
                    
                                <!-- <el-input v-model="form.name"></el-input> -->
                            </el-form-item>
                            <el-form-item>
                                <el-input
                                    placeholder="Correo electrónico"
                                    prefix-icon="fa fa-envelope"
                                    v-model="form.email">
                                </el-input>
                                <!-- <el-input type="email" v-model="form.mail"></el-input> -->
                            </el-form-item>
                            <el-form-item >
                                <el-input
                                    placeholder="Contraseña"
                                    prefix-icon="fa fa-key"
                                    v-model="form.password">
                                </el-input>
                                <!-- <el-input type="passwords" v-model="form.password"></el-input> -->
                            </el-form-item>
                            <el-form-item>
                                <div style="margin-top: 20px">
                                    <el-radio v-model="form.perfil" label="1" border size="medium">Persona</el-radio>
                                    <el-radio v-model="form.perfil" label="2" border size="medium">Empresa</el-radio>
                                </div>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="form.interes" filterable placeholder="Select">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')">Registrarse</el-button>
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
          password:'',
          perfi:'',
          interes:''
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
  justify-content: center;
  align-items: center;

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
