<template>
<br>
<br>
  <div>
    <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Lista de Servicios</h2>
  </div>
<br>
  <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Especialidad</th>
      <th scope="col">Descripción</th>
      <th scope="col">Asignado</th>
      <th scope="col">***</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="serv in Servicio" :key="serv._id" >   
      <td>{{contador++}}</td>   
      <td>{{serv.idUsuario.nombres}} {{serv.idUsuario.apellidos}}</td>
      <td>{{serv.idEspecialidad.nombre}}</td>
      <td>{{serv.asunto}}</td>
       <td v-if="serv.idEspecialista">{{serv.idEspecialista.nombres}} {{serv.idEspecialista.apellidos}}</td>
       <td v-else><button @click="asignarServicio(serv._id)"   type="button" class="btn btn-success">Reservar</button></td>
      <td><button v-if="serv.idEspecialista"  @click="verServicio(serv._id)"   type="button" class="btn btn-success">Ver</button></td>      
    </tr>
    
  </tbody>
</table>
<br>
<br>
</template>
<script>

import axios from "axios";
import VerServicioVue from './VerServicio.vue';

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
            contador : 0,
        };
    },
        
    created() {
        let listadoServicio = 'https://backenoctopusservices.herokuapp.com/api/servicio/lista';
        axios.get(listadoServicio).then((res) => { 
            this.Servicio = res.data;            
        }).catch((error) => {
            console.log(error);
        })
    },
    methods: {
        asignarServicio(asignarServicio) {            
          //console.log(this.Servicio)                            
           let listadoServicio = 'https://backenoctopusservices.herokuapp.com/api/servicio/asignar/'+asignarServicio+'/'+ localStorage.getItem("jwtToken");
          axios.put(listadoServicio).then((res) => {              
           // for ( var i=0; i<this.Servicio.length; i++) {
            // if(this.Servicio[i]._id == asignarServicio) {
            //  this.Servicio[i].idEspecialista = res.data;
           // }            
            this.$router.push({
                    name: "verServicio",
                    params: {idServicio: asignarServicio}
                });
          }).catch((error) => {
            console.log(error);
          })           
        },
        verServicio(servicio) {
           this.$router.push({
                    name: "verServicio",
                    params: {idServicio: servicio}
                });
        }
    }    

};

</script>

