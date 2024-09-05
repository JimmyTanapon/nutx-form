<template>
  <v-app dark>
    <v-main>
      <v-container>
        <v-row justify="center" align="center" style="min-height: 100vh;">
          <v-card
            class="mx-auto "
          >
            <Nuxt />
          </v-card>
        </v-row>
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
