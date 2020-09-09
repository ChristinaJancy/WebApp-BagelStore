import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basketItems: [
      {
        name: "Bagel bagel",
        description: "Best one so far",
        price: 70,
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
