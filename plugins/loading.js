import { Loading } from 'notiflix'

const Notiflix = {
  loading (world = '') {
    Loading.standard(world)
  },
  remove (timer = 0) {
    Loading.remove(timer)
  },
  loadingModifly (world = '') {
    Loading.standard(world, {
      svgColor: '#ff0000',
      svgSize: '160px',
      messageFontSize: '30px'

    })
  },
  hourglass (world = '') {
    Loading.hourglass(world)
  },
  hourglassCount (world = '') {
    Loading.change(world)
    // Loading.change(world)
  }

}

export default ({ app }, inject) => {
  inject('Notiflix', Notiflix)
}
