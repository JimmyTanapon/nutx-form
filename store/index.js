export const state = () => {
  return {
    address: null
  }
}
export const mutations = {
  addressData (state, data) {
    state.address = data
  }
}

// const store =createStore({

// })
