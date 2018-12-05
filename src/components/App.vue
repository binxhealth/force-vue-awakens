<template>
  <div>
    <main>
      <router-view />
    </main>
    <!-- Footer -->
    <footer class="page-footer font-small px-10 red pt-4 bg-light">
        <!-- Footer Text -->
        <div class="container-fluid text-center text-md-left">
          <!-- Grid row -->
          <div class="row">
            <!-- Grid column -->
            <div class="col-md-6 px-10 mt-md-0 mt-3">
              <!-- Content -->
              <div class="text-center">

              <h5 class="text-uppercase text-center font-weight-bold text-white bg-secondary">Our Repository</h5>
              <a href="https://github.com/binxhealth/force-vue-awakens"> GitHub Repo</a>
              </div>
            </div>
            <!-- Grid column -->
            <hr class="clearfix w-100 d-md-none pb-3">
            <!-- Grid column -->
            <div class="col-md-6 mb-md-0 mb-3">
              <!-- Content -->
              <div class="text-center bg-light">

              <h5 class="text-uppercase text-center font-weight-bold text-white bg-secondary">Pictures</h5>
              <a href="https://starwars-visualguide.com/#/"> starwars-visualguide.com</a>
              </div>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
        <!-- Footer Text -->
        <!-- Copyright -->
        <div class=" text-uppercase footer-copyright text-center font-weight-bold text-primary py-3">We Love Star Wars
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
  </div>
</template>
