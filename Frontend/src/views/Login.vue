<template>
<b-row class="justify-content-md-center"> 
    <b-col cols="6">
    <!-- <div v-if="errors && errors.length"> 
        <div v-for="error of errors"> 
          <b-alert show>{{ error.message }}</b-alert> 
        </div> 
    </div> -->
    </b-col>
</b-row>

<div id="logreg-forms">
        <form class="form-signin" @submit="onSubmit">
            <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> Iniciar Sesión</h1>
            <div class="social-login">
                <button class="btn google-btn social-btn" style="text-align: center" type="button"><span><i class="fab fa-google"></i> Ingrese con Google</span> </button>
            </div>
            <p style="text-align:center"> O </p>
            <input type="email" id="correo" class="form-control" placeholder="Email" required="" autofocus="" :state="state" v-model.trim="login.correo">
            <input type="password" id="password" class="form-control" placeholder="Contraseña" required="" :state="state" v-model.trim="login.password">
            
            <button class="btn btn-primary btn-l btn-success" type="submit"><i class="fas fa-sign-in-alt"></i> Ingresar</button>
            <a href="#" id="forgot_pswd">Olvido su contraseña?</a>
            <hr>
            <!-- <p>Don't have an account!</p>  -->
            <button class="btn btn-primary btn-block" type="button" id="btn-signup"><i class="fas fa-user-plus"></i> Crear una cuenta</button>
        </form>
            <br>
            
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      login: {},
      errors: [],
    };
  },
  methods: {      
      onSubmit(evt) {
          evt.preventDefault();
          axios
            .post('https://backenoctopusservices.herokuapp.com/api/usuario/login', this.login)
            .then(response => {
                console.log(response.data);
                localStorage.setItem("jwtToken", response.data.token);                                
                this.$router.push({
                    name: "listaServicios"
                });
            })
            .catch(e => {        
                console.log(e);        
                this.errors.push(e);                 
            });
      }
  }
};

</script>
