<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-card-text>
                <v-form ref="form" lazy-validation>
                  <v-text-field id="name" v-model="name" prepend-icon="person" name="name" 
                                label="Nombre" type="text" :rules="rules.nameRules"></v-text-field>
                  <v-text-field id="password" v-model="password" prepend-icon="lock" name="password" 
                                label="Clave" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      rules: {
        nameRules: [
          v => !!v || 'Nombre requerido',
          v => v.length > 3 || 'El Nombre debe tener 4 o más carácteres'
        ]
      },
      name: '',
      password: null
    }),
    methods: {
      login() {
        if (this.$refs.form.validate()){
          alert('hola')
        } else {
          alert('Algo salio mal')
        }
      }
    }
  }
</script>