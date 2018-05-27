<template>
  <div class="container-fluid">
    <h2>Uh oh, the force was not with {{ $route.path }}.</h2>
    <img
        :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/YODA_%283343464749%29.jpg/640px-YODA_%283343464749%29.jpg'"
        alt="Yoda image">
    <div class="row pt-3 pl-3">
        <router-link
          :to="`/`">
        <button>Return home</button>
        </router-link>
    </div>
  </div>
</template>