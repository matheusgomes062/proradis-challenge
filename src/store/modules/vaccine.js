export default {
  state: {
    vaccine: {
      name: null,
      manufacturer: null,
      batch: null,
      dueDate: null,
      numberOfDoses: null,
      IntervalBetweenDoses: null
    },
    vaccineList: {}
  },
  getters: {
    getVaccine: (state) => {
      return state.vaccine;
    },
    getVaccineList: (state) => {
      return state.vaccineList;
    }
  },
  mutations: {
    SET_VACCINE: (state, payload) => {
      state.vaccine = payload;
    },
    UPDATE_VACCINE: (state, payload) => {
      state.vaccine = Object.assign(state.vaccine, payload);
    },
    RESET_VACCINE: (state) => {
      state.vaccine = {};
    },
    SET_VACCINE_LIST: (state, payload) => {
      state.vaccineList = payload;
    }
  },
  actions: {
    setVaccine: ({ commit }, payload) => {
      commit('SET_VACCINE', payload);
    },
    setVaccineList: ({ commit }, payload) => {
      commit('SET_VACCINE_LIST', payload);
    }
  }
};
