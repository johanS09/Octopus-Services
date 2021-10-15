<template>
<!-- Portfolio Section-->
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <!-- Portfolio Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Servicios</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Portfolio Grid Items-->
                <div class="row justify-content-center"  >
                    <!-- Portfolio Items -->
                    <div class="col-md-6 col-lg-4 mb-5" v-for="espe in Especialidades" :key="espe._id">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal{{espe._id}}">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img alt="" class="img-fluid" v-bind:src="espe.imagen" />
                        </div>
                        <div><h2>{{espe.nombre}} {{espe.imagen}}</h2></div>
                    </div>
                </div>
                <!-- FIN Portfolio Grid Items-->
                
            </div>
          </section>
<!-- Portfolio Modals-->
        <!-- Portfolio Modal 1-->
        <div class="portfolio-modal modal fade" id="portfolioModal{{espe._id}}" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true"  v-for="espe in Especialidades" :key="espe._id">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">{{espe.nombre}}</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img alt="" class="img-fluid rounded mb-5" src="../assets/Serviciotecnico.jpeg"/>
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4">Mantenimiento y servicio técnico de computadores y dispositivos móviles de todas las marcas disponibles en el mercado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            Especialidades: [],
        };
    },
    created() {
        let listadoEspecialidad = 'https://backenoctopusservices.herokuapp.com/api/especialidad/lista';
        axios.get(listadoEspecialidad).then((res) => { 
            this.Especialidades = res.data;
            //console.log(this.Especialidades)
        }).catch((error) => {
            console.log(error);
        })
    },            

};
</script>