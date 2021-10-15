<template>
    <v-app>
        <Header/>
        <Footer/>
        <Copyright/>
    </v-app>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Copyright from './components/Copyright.vue'
    export default {
        name: 'App',
        data: () => ({
            //
        }),
        components: {
            Header,
            Footer,
            Copyright
        }};
</script>

<style>
    @import './styles/styles.css';
    @import './styles/stylesgrid.css';
</style>

