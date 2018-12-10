<template>
  <div>
    <main>
      <router-view />
    </main>
    <footer class="page-footer font-small px-10 red pt-4 bg-light">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 px-10 mt-md-0 mt-3">
              <div class="text-center">
              <h5 class="text-uppercase text-center font-weight-bold text-white bg-secondary">Our Repository</h5>
              <a href="https://github.com/binxhealth/force-vue-awakens"> GitHub Repo</a>
              </div>
            </div>
            <hr class="clearfix w-100 d-md-none pb-3">
            <div class="col-md-6 mb-md-0 mb-3">
              <div class="text-center bg-light">
              <h5 class="text-uppercase text-center font-weight-bold text-white bg-secondary">Pictures</h5>
              <a href="https://starwars-visualguide.com/#/"> starwars-visualguide.com</a>
              </div>
            </div>
          </div>
        </div>
        <div class=" text-uppercase footer-copyright text-center font-weight-bold text-primary py-3">We Love Star Wars
        </div>
      </footer>
  </div>
</template>
