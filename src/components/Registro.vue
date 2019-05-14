<template>
    <div class="registro">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
        <v-layout class="container">
            <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-card-title primary-title>
                <div class="title">
                    <h3 class="headline mb-0">Registrarse</h3>
                </div>
                </v-card-title>
                
                <v-card-text>
                    <v-form class="content" ref="form">
                        <!-- <v-text-field
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
                        </v-radio-group> -->
                        <v-text-field
                            v-model="name"
                            :error-messages="nameErrors"
                            :counter="10"
                            label="Name"
                            required
                            @input="$v.name.$touch()"
                            @blur="$v.name.$touch()"
                            ></v-text-field>
                            <v-text-field
                            v-model="email"
                            :error-messages="emailErrors"
                            label="E-mail"
                            required
                            @input="$v.email.$touch()"
                            @blur="$v.email.$touch()"
                            ></v-text-field>
                            <v-select
                            v-model="select"
                            :items="items"
                            :error-messages="selectErrors"
                            label="Item"
                            required
                            @change="$v.select.$touch()"
                            @blur="$v.select.$touch()"
                            ></v-select>
                            <v-checkbox
                            v-model="checkbox"
                            :error-messages="checkboxErrors"
                            label="Do you agree?"
                            required
                            @change="$v.checkbox.$touch()"
                            @blur="$v.checkbox.$touch()"
                            ></v-checkbox>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="submit" flat color="#009688">Registrarse</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, maxLength, email } from 'vuelidate/lib/validators'

   export default{
       mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      }
    }
    //  data() {
    //     return {
    //     valid: true,
    //     name: "",
    //     nameRules: [
    //         v => !!v || "Nombre es obligatorio"
    //     ],
    //     email: "",
    //     emailRules: [
    //         v => !!v || "E-mail es obligatorio",
    //         v => /.+@.+/.test(v) || "E-mail no valido"
    //     ],
    //     show1: false,
    //     password: 'Password',
    //     rules: {
    //         required: value => !!value || 'Contraseña es obligatoria',
    //         min: v => v.length >= 8 || 'Min 8 carácteres',
    //         emailMatch: () => ('El correo electrónico y la contraseña que ingresaste no coinciden')
    //     }
    //     };
    // }
   }
</script>

<style scoped>
    .registro{
        padding: 10px;
        width: 60%;
        justify-content: center;
        align-items: center;
    }
    
</style>
