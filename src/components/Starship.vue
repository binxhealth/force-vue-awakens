<template>
  <div class="container-fluid p-5">
    <div class="d-flex flex-row">

    </div>
    <div class="d-flex flex-row">
      <div>
        <div
          class="rounded-circle"
          style="height: 350px; width: 350px; background-postion: center center; background-repeat: no-repeat; background-size: auto 100%"
          :style="{ backgroundImage: 'url('+ `https://starwars-visualguide.com/assets/img/starships/${$route.params.id}.jpg` +')'}">
        </div>
      </div>
      <div class="ml-4">
        <h4>{{shipInfo.name}}</h4>
        <p>{{shipInfo.model}}</p>
      </div>
    </div>
    <div class="d-flex flex-row p-2 mt-3">
      <p>Ship Details</p>
    </div>
    <div class="d-flex flex-row">
      <div class="p-2">
        <p><strong>Megalight per hour</strong> | {{shipInfo.MGLT}}</p>
        <p><strong>Cargo Capacity</strong> | {{shipInfo.cargo_capacity}}</p>
        <p><strong>Consumables</strong> | {{shipInfo.consumables}}</p>
        <p><strong>Cost (credits)</strong> | {{shipInfo.cost_in_credits}}</p>
        <p><strong>Crew Capacity</strong> | {{shipInfo.crew}}</p>
        <p><strong>Hyperdrive Rating</strong> | {{shipInfo.hyperdrive_rating}}</p>
      </div>
      <div class="p-2">
        <p><strong>Length</strong> | {{shipInfo.length}}</p>
        <p><strong>Manufacturer</strong> | {{shipInfo.manufacturer}}</p>
        <p><strong>Max Atmosphering Speed</strong> | {{shipInfo.max_atmosphering_speed}}</p>
        <p><strong>Starship Class</strong> | {{shipInfo.starship_class}}</p>
        <p><strong>Passenger Capacity</strong> | {{shipInfo.passengers}}</p>
      </div>
    </div>
    <hr/>
    <div class="d-flex flex-row">
      <p class="title">Pilots</p>
    </div>
    <div class="d-flex flex-row">
      <router-link
        v-for="pilot in pilots"
        :to="`/people/${pilot.id}`"
        :key="pilot.id"
        class="card m-2"
        style="width: 12rem;">

        <img
          :src="`https://starwars-visualguide.com/assets/img/characters/${pilot.id}.jpg`"
          class="card-img-top"
          alt="Card image cap">

        <div class="card-body">

          <h5 class="card-title m-0 text-center">
            {{ pilot.name }}
          </h5>

        </div>

      </router-link>
    </div>
    <hr/>
    <div class="d-flex flex-row">
      <p class="title">Appears in</p>
    </div>
    <div class="d-flex flex-row">
      <router-link
        v-for="film in films"
        :to="`/film/${film.id}`"
        :key="film.id"
        class="card m-2"
        style="width: 12rem;">

        <img
          :src="`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`"
          class="card-img-top"
          alt="Card image cap">

        <div class="card-body">

          <h5 class="card-title m-0 text-center">
            <p>{{ film.title }}</p>
            <p>({{film.release_date}})</p>
          </h5>

        </div>

      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('starships/get', to.params.id)
    next()
  },
  async beforeRouteUpdate (to, from, next) {
    await store.dispatch('starships/get', to.params.id)
    next()
  },
  computed :  {
    shipInfo(){
      return store.state.starships.shipInfo
    },
    pilots(){
      return store.state.starships.shipPilots
    },
    films(){
      return store.state.starships.shipFilms
    }
  }
  }
</script>
