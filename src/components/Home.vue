<template>
  <div class="container pt-4 pb-4">

    <section>

      <h2>People</h2>

      <div class="d-flex flex-wrap">
        <router-link
          v-for="(person, id) in results"
          :to="`/people/${getIDFromPerson(person)}`"
          :key="getIDFromPerson(person)"
          class="card m-2"
          style="width: 12rem;">

          <img
            :src="`https://starwars-visualguide.com/assets/img/characters/${ getIDFromPerson(person) }.jpg`"
            class="card-img-top"
            alt="Card image cap">

          <div class="card-body">

            <h5 class="card-title m-0">
              {{ person.name }}
            </h5>

          </div>

        </router-link>
      </div>

      <div class="d-flex flex-row justify-content-center btn-group">
        <button id="previousPage" class="btn btn-secondary" v-bind:class="{ disabled: previous == null }" v-on:click="changePage(previous)">Previous</button>
        <button id="pageNumber" class="btn btn-secondary disabled">{{ page }}</button>
        <button id="nextPage" class="btn btn-secondary" v-bind:class="{ disabled: next == null }" v-on:click="changePage(next)">Next</button>
      </div>

    </section>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('people/list')
    next()
  },
  methods: {
    // Extract a value from a URL query string
    getValFromURL(val, url) {
      var vars = url.substring(url.indexOf('?') + 1).split("&");
      for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          if (pair[0] == val) {
              return pair[1];
          }
      }
    },
    // Get the ID from a person using its URL value
    getIDFromPerson(person) {
      const regex = /people\/(\d+)/g;
      return regex.exec(person.url)[1];
    },
    // Change the page given the URL for the next set of data
    changePage(url) {
      if(url) {
        store.dispatch('people/list', this.getValFromURL("page", url));
      }
    }
  },
  computed: {
    ...mapState('people', ['results', 'page', 'next', 'previous'])
  }
}
</script>
