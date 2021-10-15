<template>
<br>
<br>
  <section class="page-section" id="contact">
            <div class="container">
  <div>
    <h2 class="page-section-heading text-uppercase text-secondary mb-0">Servicio ID</h2>
  </div>
<br>
  <table class="table table-hover">
  <tbody>
    <tr>
      <th scope="col">Fecha</th>
      <td>{{Servicio.fechaInicio}}</td>      
    </tr>  
    <tr>   
      <th scope="col">Asunto</th>   
      <td>{{Servicio.asunto}}</td>     
    </tr>
    <tr>   
      <th scope="col">Descripcion</th>   
      <td>{{Servicio.descripcion}}</td>     
    </tr>
    <tr>   
      <th scope="col">Especialidad</th>   
      <td>{{Servicio.idEspecialidad.nombre}}</td>     
    </tr>
    <tr>   
      <th scope="col">Asignado</th>   
      <td>{{Servicio.idEspecialista.nombres}} {{Servicio.idEspecialista.apellidos}}</td>     
    </tr>
    <tr>   
      <th scope="col">Mensajes</th>   
      <td></td>     
    </tr>
    </tbody>  
</table>
            </div>
  </section>
<br>
<br>
</template>
<script>

import axios from "axios";

export default {    
    data() {        
        return {
            Servicio: {
              _id : "",
              idUsuario: "",
              idEspecialidad: "",
              asunto: "",
              descripcion: "",
              idEspecialista: "",
              fechaIncio: "",
            },                                   

        };
    },
        
    created() {
        let idServicio = this.$route.params.idServicio;
        console.log(idServicio);
        let listadoServicio = 'https://backenoctopusservices.herokuapp.com/api/servicio/'+idServicio;
        axios.get(listadoServicio).then((res) => { 
            this.Servicio = res.data;     
            console.log(this.Servicio);       
        }).catch((error) => {
            console.log(error);
        })
        
    },
    methods: {        
    }    

};

</script>