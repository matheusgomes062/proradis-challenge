export default {
  state: {
    vaccine: {
      name: null,
      manufacturer: null,
      batch: null,
      dueDate: null,
      numberOfDoses: null,
      IntervalBetweenDoses: null
    }
  },
  getters: {
    getVaccine: (state) => {
      return state.vaccine;
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
    }
  },
  actions: {
    setVaccine: ({ commit }, payload) => {
      commit('SET_VACCINE', payload);
    }
  }
};
