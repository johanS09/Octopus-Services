<template>

<!-- Contact Section-->
  <section class="page-section" id="contact">
      <div class="container">
          <!-- Contact Section Heading-->
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Crea un Servicio</h2>
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
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                      <!-- Name input-->
                      <div class="form-floating mb-3">
                          <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                          <label for="name">Nombre Completo</label>
                          <div class="invalid-feedback" data-sb-feedback="name:required">Nombre requerido</div>
                      </div>
                      <!-- Email address input-->
                      <div class="form-floating mb-3">
                          <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                          <label for="email">Correo electrónico</label>
                          <div class="invalid-feedback" data-sb-feedback="email:required">Correo electrónico requerido</div>
                          <div class="invalid-feedback" data-sb-feedback="email:email">El Correo electrónico no es válido</div>
                      </div>
                      <!-- Phone number input-->
                      <div class="form-floating mb-3">
                          <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                          <label for="phone">Teléfono</label>
                          <div class="invalid-feedback" data-sb-feedback="phone:required"> Se requiere un Teléfono.</div>
                      </div>
                        <!-- Department input-->
                      <div class="form-floating mb-3">
                          <input class="form-control" id="deparment" type="Dept" placeholder="Cundinamarca" data-sb-validations="required" />
                          <label for="department">Departamento</label>
                          <div class="invalid-feedback" data-sb-feedback="department:required"> Se requiere el Departamento</div>
                      </div>
                        <!-- City input-->
                      <div class="form-floating mb-3">
                          <input class="form-control" id="City" type="City" placeholder="Bogotá" data-sb-validations="required" />
                          <label for="City">Ciudad</label>
                          <div class="invalid-feedback" data-sb-feedback="City:required"> Se requiere la Ciudad</div>
                      </div>
                      <!-- Address input-->
                      <div class="form-floating mb-3">
                          <input class="form-control" id="Address" type="Address" placeholder="Calle 123 #45-67" data-sb-validations="required" />
                          <label for="Address">Dirección</label>
                          <div class="invalid-feedback" data-sb-feedback="City:required"> Se requiere la Dirección</div>
                      </div>
                        <!-- Dropdown -->
                              <div class="btn-group">
                                <button type="button" class="btn success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                  Especialidades
                                </button>
                                  <ul class="dropdown-menu">
                                        <li><button class="dropdown-item" type="button">Servicios Técnicos</button></li>
                                        <li><button class="dropdown-item" type="button">Lavandería</button></li>
                                        <li><button class="dropdown-item" type="button">Tutorías Académicas</button></li>
                                        <li><button class="dropdown-item" type="button">Diseño Gráfico</button></li>
                                        <li><button class="dropdown-item" type="button">Arreglos Domésticos</button></li>
                                        <li><button class="dropdown-item" type="button">Arreglos Automotrices</button></li>
                                  </ul>
                              </div>
                        <!-- <Dropdown/> -->
                      <div class="form-floating mb-3">
                          <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                          <label for="message">Descripción</label>
                          <div class="invalid-feedback" data-sb-feedback="message:required">Se requiere una descripción</div>
                      </div>
                      <!-- Submit success message-->
                      <!---->
                      <!-- This is what your users will see when the form-->
                      <!-- has successfully submitted-->
                      <div class="d-none" id="submitSuccessMessage">
                          <div class="text-center mb-3">
                              <div class="fw-bolder">Formulario realizado con éxito</div>
                              To activate this form, sign up at
                              <br />
                              <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                          </div>
                      </div>
                      <!-- Submit error message-->
                      <!---->
                      <!-- This is what your users will see when there is-->
                      <!-- an error submitting the form-->
                      <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                      <!-- Submit Button-->
                      <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Enviar</button>
                  </form>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import Dropdown from '../components/Dropdown.vue'
export default {
    name: 'App',
    data: () => ({
        //
    }),
    components: {
        Dropdown
    }};
</script>






