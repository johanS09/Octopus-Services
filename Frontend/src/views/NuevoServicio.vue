<template>
    <section class="page-section" id="contact">
        <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Nuevo servicio</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <div class="row justify-content-center">
                <!-- Contact Section Form-->
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <form id="contactForm"  @submit.prevent="handleSubmitForm()">
                            <div class="form-floating mb-3">
                                <select for="especialidad" class="form-control" id="idEspecialidad" name="listaActividad" v-model="Servicio.idEspecialidad">
                                    <option :value="espe._id" v-for="espe in Especialidades" :key="espe._id">
                                        {{espe.nombre}}
                                    </option>
                                </select>
                                <label for="especialidad">Servicio</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="asunto" type="text" placeholder="Enter your asunto..." data-sb-validations="required" v-model="Servicio.asunto" />
                                <label for="asunto">Asunto </label>
                                <div class="invalid-feedback" data-sb-feedback="asunto:required">Asunto requerido</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="descripcion" type="text" placeholder="Enter your descripcion..." data-sb-validations="required" v-model="Servicio.descripcion" />                                    
                                <label for="descripcion">Descripcion</label>
                                <div class="invalid-feedback" data-sb-feedback="descripcion:required">descripcion requerido</div>
                            </div>                            

                            <button class="btn btn-primary btn-xl btn-success" type="submit">Cargar Servicio</button>
                        </form>
                    </div>
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
            Servicio: {
              idEspecialidad: "",
              asunto: "",
              descripcion: "",
              idEspecialidad: "",
            },
            Especialidades: [],
        };
    },
        
    created() {
        let listadoEspecialidad = 'https://backenoctopusservices.herokuapp.com/api/especialidad/lista';
        axios.get(listadoEspecialidad).then((res) => { 
            this.Especialidades = res.data;
            console.log(this.Especialidades)
        }).catch((error) => {
            console.log(error);
        })
    },
    methods: {
      handleSubmitForm() {
          let apiURL = 'https://backenoctopusservices.herokuapp.com/api/servicio/nuevo';
          axios
            .post(apiURL,  this.Servicio,{ 
                headers: {
                    'authorization': localStorage.getItem("jwtToken")
                    }},
            )
            .then(() => {
              this.$router.push("/listaServicios");
              this.usuario = {
                asusto: "",
                descripcion: "",
                idEspecialidad: "",
              }
            })
            .catch((error) => {
              console.log(error);
            });
        },
    }    

};

</script>
