<template>
  <div>
    <main>
      <router-view />
    </main>
    <footer>
      <site-footer />
    </footer>
  </div>
</template>

<script>
import SiteFooter from './SiteFooter'

export default {
  components: {
    'site-footer': SiteFooter
  }
}
</script>
