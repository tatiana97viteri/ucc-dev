<template>
    <div class="registro">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-title primary-title>
                <div class="title">
                    <h3 class="headline mb-0">Registrarse</h3>
                </div>
                </v-card-title>
                
                <v-card-text>
                    <v-form class="content" ref="form">
                        <v-text-field
                            label="Nombres"
                            prepend-icon="fa fa-user"
                            v-model="name"
                            :rules="nameRules"
                            required
                        ></v-text-field>
                        <v-text-field
                            label="Correo electrónico"
                            prepend-icon="fa fa-envelope"
                            v-model="email"
                            :rules="emailRules"
                            required
                        ></v-text-field>
                        <v-text-field 
                            v-model="password"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Contraseña"
                            prepend-icon="fa fa-key"
                            hint="At least 8 characters"
                            counter
                            @click:append="show1 = !show1"
                        ></v-text-field>
                        <v-radio-group v-model="row" row>
                            <v-radio label="Persona" value="radio-1"></v-radio>
                            <v-radio label="Empresa" value="radio-2"></v-radio>
                        </v-radio-group>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                <v-btn flat color="#009688">Registrarse</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
   export default{
       data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
   }
</script>

<style scoped>
    .registro{
        padding: 10px;
        width: 60%;
        justify-content: center;
        align-items: center;
    }
    .content{
        justify-content: center;
        align-items: center;
    }
</style>
