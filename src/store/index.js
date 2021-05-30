import Vue from 'vue';
import Vuex from 'vuex';
import Vaccine from './modules/vaccine';
import Patient from './modules/patient';
import PatientVaccine from './modules/patientVaccine';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vaccine: Vaccine,
    patient: Patient,
    patientDose: PatientVaccine
  }
});
