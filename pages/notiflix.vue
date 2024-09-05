<template>
  <div>
    <v-row>
      <v-col md="4">
        <v-btn type="submit" color="primary" @click="onBasicloading">
          Basic loading
        </v-btn>
      </v-col>
      <v-col>
        <v-btn type="submit" color="primary" @click="onloadinWithWord">
          Basic loading word
        </v-btn>
      </v-col>
      <v-col>
        <v-btn type="submit" color="primary" @click="onloadingWithModify">
          onloading WithModifly
        </v-btn>
      </v-col>

      <v-col>
        <v-btn type="submit" color="primary" @click="onloadingHorglass">
          onloading horglass
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  methods: {
    onBasicloading () {
      this.$Notiflix.loading()
      this.$Notiflix.remove(1000)
    },
    onloadinWithWord () {
      this.$Notiflix.loading('Loading...')

      this.$Notiflix.remove(1000)
    },
    onloadingWithModify () {
      this.$Notiflix.loadingModifly('Loading with red spiner...')
      this.$Notiflix.remove(1000)
    },
    async onloadingHorglass () {
      const totalfile = 10
      this.$Notiflix.hourglass('Loading')
      for (let i = 0; i < totalfile; i++) {
        this.$Notiflix.hourglassCount(`กำลัง Donwload file  ${i + 1} /` + totalfile)
        await this.waitforme(2000)
      }
      this.$Notiflix.remove(1000)
    },
    waitforme (millisec) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('')
        }, millisec)
      })
    }
  }
}
</script>
