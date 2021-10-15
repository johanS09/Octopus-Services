<template>
    <nav>
        <nav id="nav" class="navbar">
            <div> <h1 class="title">Octopus Services</h1></div>
            <div> <h1 class="navbar-text">muchomuchooo</h1></div>
            <router-link to="/">Home</router-link>
            <router-link to="/Registro">Registro</router-link>
            <router-link to="/login">Login</router-link> 
            <!-- <router-link to="/CrearServicio">Crea un Servicio</router-link>  -->
            <router-link to="/listaServicios"> Lista Servicios</router-link> 
            <router-link to="/nuevoServicio">Nuevo Servicio</router-link>
            <!--<router-link to="/verServicio">ver Servicio</router-link>
             <router-link to="/servicios">Servicios</router-link> -->
            <!-- <router-link to="/serviciosUsuario">ServiciosUsuarios</router-link> -->
            
            
        </nav>
        <router-view/>
    </nav>
</template>

<script>
export default {
    
}
</script>
