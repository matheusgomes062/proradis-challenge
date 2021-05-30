export default {
  state: {
    patient: {
      name: null,
      email: null,
      cpf: null,
      birthdate: null,
      comorbidity: null,
      address: null,
      district: null,
      state: null,
      city: null
    }
  },
  getters: {
    getPatient: (state) => {
      return state.patient;
    }
  },
  mutations: {
    SET_PATIENT: (state, payload) => {
      state.patient = payload;
    },
    UPDATE_PATIENT: (state, payload) => {
      state.patient = Object.assign(state.patient, payload);
    },
    RESET_PATIENT: (state) => {
      state.patient = {};
    }
  },
  actions: {
    setPatient: ({ commit }, payload) => {
      commit('SET_PATIENT', payload);
    }
  }
};
