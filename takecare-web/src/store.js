import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patients: [
      { name: 'Eva', 
        alarms: [
          { drug: 'Aspirina',
            dose: '10 mg',
            dateStart: '11-01-2019',
            dateEnd: '12-01-2019',
            timeTakePill: '8 hs' },
            { drug: 'Ibu',
            dose: '10 mg',
            dateStart: '11-01-2019',
            dateEnd: '12-01-2019',
            timeTakePill: '8 hs' },
            { drug: 'Remedio',
            dose: '10 mg',
            dateStart: '11-01-2019',
            dateEnd: '12-01-2019',
            timeTakePill: '8 hs' }
        ] },
      { name: 'Alana' },
      { name: 'Ruth' },
      { name: 'Esteban' }
    ],
    actualPatient: {}
  },
  getters: {
    getPatients (state) {
      // Listado de pacientes
      return state.patients
    },
    getPatient (state) {
      // Objeto con todos los datos del paciente seleccionado
      return state.actualPatient
    }
  },
  mutations: {
    setActualPatient (state, patient) {
      state.actualPatient = patient
    }
  },
  actions: {

  }
})
