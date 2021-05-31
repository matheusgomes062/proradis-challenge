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
    },
    patientList: {}
  },
  getters: {
    getPatient: (state) => {
      return state.patient;
    },
    getPatientList: (state) => {
      return state.patientList;
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
    },
    SET_PATIENT_LIST: (state, payload) => {
      state.patientList = payload;
    }
  },
  actions: {
    setPatient: ({ commit }, payload) => {
      commit('SET_PATIENT', payload);
    },
    setPatientList: ({ commit }, payload) => {
      commit('SET_PATIENT_LIST', payload);
    }
  }
};
