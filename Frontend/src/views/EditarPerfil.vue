<template>

<h1>Edita tu perfil</h1>

    <form id="app" class="profile" @submit="checkForm" action="/something" method="post">

  <p class="profile">
    <label for="name" >Nombres</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name">
  </p>

  <p class="profile">
    <label for="lastname" >Apellidos</label>
    <input
      id="lastname"
      v-model="lastname"
      type="text"
      name="name">
  </p>

  <p class="profile">
    <label for="email" >Email</label>
    <input
      id="email"
      v-model="mail"
      type="email"
      name="email"
    >
  </p>

  <p class="profile">
    <label for="phone" >Télefono</label>
    <input
      id="phone"
      v-model="phone"
      type="phone"
      name="phone"
    >
  </p>

  <p class="profile">
    <label for="department" >Departamento</label>
    <input
      id="department"
      v-model="department"
      type="department"
      name="department"
    >
  </p>

  <p class="profile">
    <label for="city" >Ciudad</label>
    <input
      id="city"
      v-model="city"
      type="city"
      name="city"
    >
  </p>

  <p class="profile">
    <label for="address" >Dirección</label>
    <input id="address" v-model="address" type="address" name="address">
  </p>

  <p class="profile">
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>



