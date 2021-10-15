<template>

<!-- Contact Section-->
        <section class="page-section" id="contact">
            <div class="container">
                <!-- Contact Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Regístrate</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Contact Section Form-->
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!-->
                        <form id="contactForm"  @submit.prevent="handleSubmitForm()">
                            <!-- Name input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="nombres" type="text" placeholder="Enter your nombres..." data-sb-validations="required" v-model="usuario.nombres" />
                                <label for="nombres">Nombres </label>
                                <div class="invalid-feedback" data-sb-feedback="nombres:required">Nombre requerido</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="apellidos" type="text" placeholder="Enter your apellidos..." data-sb-validations="required" v-model="usuario.apellidos" />
                                <label for="apellidos">Apellidos </label>
                                <div class="invalid-feedback" data-sb-feedback="apellidos:required">Nombre requerido</div>
                            </div>
                            <!-- Email address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="correo" type="email" placeholder="name@example.com" data-sb-validations="required,email" v-model="usuario.correo" />
                                <label for="correo">Correo electrónico</label>
                                <div class="invalid-feedback" data-sb-feedback="correo:required">Correo electrónico requerido</div>
                                <div class="invalid-feedback" data-sb-feedback="correo:correo">El Correo electrónico no es válido</div>
                            </div>
                            <!-- Phone number input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="telefono" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" v-model="usuario.telefono"/>
                                <label for="telefono">Teléfono</label>
                                <div class="invalid-feedback" data-sb-feedback="telefono:required"> Se requiere un Teléfono.</div>
                            </div>
                             <!-- Direction input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="direccion" type="Dept" placeholder="Calle Carrera No." data-sb-validations="required" v-model="usuario.direccion"/>
                                <label for="direccion">Dirección</label>
                                <div class="invalid-feedback" data-sb-feedback="direccion:required"> Se requiere la direccion</div>
                            </div>
                             <!-- Password input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="password" type="Password" placeholder="" data-sb-validations="required" v-model="usuario.password" />
                                <label for="password">Contraseña</label>
                                <div class="invalid-feedback" data-sb-feedback="password:required"> Se requiere la Ciudad</div>
                            </div>
                            <!-- Address input
                            <div class="form-floating mb-3">
                                <input class="form-control" id="Address" type="Address" placeholder="Calle 123 #45-67" data-sb-validations="required" />
                                <label for="Address">Dirección</label>
                                <div class="invalid-feedback" data-sb-feedback="City:required"> Se requiere la Dirección</div>
                            </div>-->
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <!-- Submit Button-->
                            <!-- <button class="btn btn-primary btn-xl btn-success" id="submitButton" type="submit">Enviar</button> -->
                            <button class="btn btn-primary btn-xl btn-success " type="submit">Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            usuario: {
              nombres: "",
              apellidos: "",
              correo: "",
              telefono: "",
              direccion: "",
              password: "",
            },
        };
    },
    methods: {
        handleSubmitForm() {
          let apiURL = 'https://backenoctopusservices.herokuapp.com/api/usuario/nuevo';          
          axios
            .post(apiURL, this.usuario)
            .then(() => {
              //this.$router.push("/perfil");
              this.usuario = {
                nombres: "",
                apellidos: "",
                correo: "",
                telefono: "",
                direccion: "",
                password: "",
              }
            })
            .catch((error) => {
              console.log(error);
            });
        },
    }    
};
</script>



