import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: [
      { name: 'Eva' },
      { name: 'Alana' },
      { name: 'Ruth' },
      { name: 'Esteban' }
    ]
  },
  getters: {
    getPatients (state) {
      // Deberia volver ordenado por groupId desde la api
      return state.patients
    }
  },
  mutations: {

  },
  actions: {

  }
})
