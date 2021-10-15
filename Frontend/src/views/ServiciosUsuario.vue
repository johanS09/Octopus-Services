<template>
  <section class="page-section" id="contact">
            <div class="container">

    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <td>asunto</td>
            <td>descripcion</td>
            <td>especialidad</td>
            <td></td>
        </tr> 
        </thead>
        <tbody>
        <tr v-for="ser in Servicios" :key="ser._id">
            <td>{{ser.asunto}}</td>
            <td>{{ser.descripcion}}</td>
            <td>{{ser.idEspecialidad.nombre}}</td>
            <td>
                <button v-if="ser.idEspecialidad.nombre == ''" class="btn btn-primary btn-block" type="button" id="btn-signup" @click="asignar(ser._id)"><i class="fas fa-user-plus"></i> asignar</button> 
                <button class="btn btn-primary btn-block" type="button" id="btn-signup" @click="ver(ser._id)"><i class="fas fa-user-plus"></i> ver</button>
            </td>
        </tr> 
        </tbody>
    </table>
    </div>
    </section>
    
    
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            Servicios: [],
        };
    },
    created() {
        let listadoEspecialidad = 'https://backenoctopusservices.herokuapp.com/api/servicio/lista';
        axios.get(listadoEspecialidad).then((res) => { 
            this.Servicios = res.data;
            //console.log(this.Especialidades)
        }).catch((error) => {
            console.log(error);
        })
    },        
    methods: {
        asignar(id) {
            evt.preventDefault();
            axios
            .post('https://backenoctopusservices.herokuapp.com/api/usuario/login', this.login)
            .then(response => {
                localStorage.setItem("jwtToken", response.data.tokenReturn);                
                this.$router.push({
                    name: "serviciosUsuario"
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