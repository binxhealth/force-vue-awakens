<template lang="html">

  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-sm-12">
        <h1 class="my-4">Force Vue Awakens</h1>
        <div class="list-group">
          <router-link
          :to="`/people`">
          <a class="list-group-item">Characters</a>
        </router-link>
        </div>
      </div>

      <div class="col-lg-9 col-sm-12">

        <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-block img-fluid" src="http://www.idea1.org.uk/wp-content/uploads/2017/12/star-wars-the-last-jedi-900x350.jpg" alt="First slide">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 col-sm-12">
            <router-link :to="`/people`">
            <div class="card h-100">
              <a><img class="card-img-top" src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt=""></a>
              <div class="card-body">
                <h4 class="card-title text-center">
                  <a>Characters</a>
                </h4>
              </div>
            </div>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="css">
</style>
