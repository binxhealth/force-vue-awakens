<template>
  <div class="container">
    <h2>Person {{ $route.params.id }}</h2>

    <h4>Essentials</h4>
      <div class="container ">
        <div class="row">
          <div class="col">
            <p>Name:</p>
            <p>Born:</p>
            <p>Home Planet: linkto (requires API call)</p>
            <p>Species: linkto (requires API call)</p>
          </div>
          <div class="col">
            <img src="person.img" alt="person.name" class="img-fluid rounded">
          </div>
        </div>
      </div>

    <h4>Extra</h4>
    <div class="container">
      <p>Hair:</p>
      <p>Eyes:</p>
      <p>Skin:</p>
      <p>Height:</p>
      <p>Weight:</p>
    </div>

    <h4>Appears in</h4>
      <ol>
        <li><a>Each movie</a> </li>
        <li><a>Each movie</a> </li>
        <li><a>Each movie</a> </li>
      </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import store from '@/store'

export default {
  async beforeRouteEnter (to, from, next) {
    await store.dispatch('people/get', to.params.id)
    next()
  },
  async beforeRouteUpdate (to, from, next) {
    await store.dispatch('people/get', to.params.id)
    next()
  },
  computed: {
    ...mapGetters('people', ['person'])
  }
}
</script>
