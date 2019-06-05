<template>
  <header>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="container">

        <div class="navbar-brand">
          Force Vue Awakens
        </div>

        <div class="collapse navbar-collapse navbar-nav">
          <div class="nav-item">
            <RouterLink
              to="/"
              class="nav-link peopleLink"
              data-nav-type="header"
            >
              People
            </RouterLink>
          </div>

          <div class="nav-item">
            <RouterLink
              to="/starships"
              class="nav-link starshipsLink"
              data-nav-type="header"
            >
              Starships
            </RouterLink>
          </div>
        </div>

      </div>

    </nav>

  </header>
</template>
