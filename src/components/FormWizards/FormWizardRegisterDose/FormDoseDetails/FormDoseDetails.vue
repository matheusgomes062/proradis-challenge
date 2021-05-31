<template>
  <div class="content">
    <h1 class="title">Registrar Aplicação</h1>

    <h3 class="subtitle">
      Registre aplicação da vacina para cada paciente
    </h3>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="vaccineName">Nome da Vacina</label>
        <!-- <input
          v-model="$v.form.vaccineName.$model"
          type="select"
          placeholder="Selecione a vacina"
          class="form-control"
          id="vaccineName"
        /> -->
        <select v-model="$v.form.vaccineName.$model" id="vaccineName">
          <option disabled selected value="">Escolha a Vacina</option>
          <option
            v-for="(vaccine, index) in getVaccineList"
            :value="vaccine.id"
            :key="index"
            class="form-control"
            >{{ vaccine.name }}</option
          >
        </select>
        <div
          v-if="$v.form.vaccineName.$error && !$v.form.vaccineName.required"
          class="error"
        >
          Nome da vacina necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="patientName">Nome do Paciente</label>
        <!-- <input
          v-model="$v.form.patientName.$model"
          type="select"
          placeholder="Selecione o paciente"
          class="form-control"
          id="patientName"
        /> -->
        <select v-model="$v.form.patientName.$model" id="patientName">
          <option disabled selected value="">Selecione o Paciente</option>
          <option
            v-for="(patient, index) in getPatientList"
            :value="patient.id"
            :key="index"
            class="form-control"
            >{{ patient.name }}</option
          >
        </select>
        <div
          v-if="$v.form.patientName.$error && !$v.form.patientName.required"
          class="error"
        >
          Nome do Paciente necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="applicationDate"
          >Data de vacinação</label
        >
        <Datepicker v-model="$v.form.applicationDate.$model"></Datepicker>
        <div
          v-if="
            $v.form.applicationDate.$error && !$v.form.applicationDate.required
          "
          class="error"
        >
          Data de Vacinação necessária!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="doseApplied">Dose aplicada</label>
        <input
          v-model="$v.form.doseApplied.$model"
          type="number"
          placeholder="Doses aplicada"
          class="form-control"
          id="doseApplied"
        />
        <div
          v-if="$v.form.doseApplied.$error && !$v.form.doseApplied.required"
          class="error"
        >
          Valor necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="completeVaccination"
          >Paciente completamente vacinado?</label
        >
        {{ completeVaccination ? 'SIM ✅' : 'NÃO ❌' }}
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import Datepicker from 'vuejs-datepicker';
import { api } from '@/services/index';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      form: {
        applicationDate: null,
        patientName: null,
        vaccineName: null,
        doseApplied: null
      },
      completeVaccination: false
    };
  },
  computed: {
    ...mapGetters(['getPatientList', 'getVaccineList'])
  },
  validations: {
    form: {
      vaccineName: {
        required
      },
      patientName: {
        required
      },
      doseApplied: {
        required
      },
      applicationDate: {
        required
      }
    }
  },
  created() {
    this.getInfoFromDb();
  },
  methods: {
    ...mapActions(['setPatientList', 'setVaccineList']),
    getInfoFromDb() {
      api
        .get('/Patients')
        .then((response) => {
          if (response.status == 200) {
            this.setPatientList(response.data);
          } else {
            this.$vToastify.error('Não foi possível buscar Pacientes...');
          }
        })
        .catch((error) => {
          console.log(error.response);
          this.$vToastify.error('Não foi possível buscar Pacientes...');
        });
      api
        .get('/Vaccines')
        .then((response) => {
          if (response.status == 200) {
            this.setVaccineList(response.data);
          } else {
            this.$vToastify.error('Não foi possível buscar Vacinas...');
          }
        })
        .catch((error) => {
          console.log(error.response);
          this.$vToastify.error('Não foi possível buscar Vacinas...');
        });
    },
    reset() {
      this.form.vaccineName = null;
      this.form.patientName = null;
      this.form.doseApplied = null;
      this.form.applicationDate = null;
      this.$v.$reset();
    },
    submit() {
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            applicationDate: this.form.applicationDate,
            patientName: this.form.patientName,
            vaccineName: this.form.vaccineName,
            doseApplied: this.form.doseApplied,
            completeVaccination: this.completeVaccination
          });
        } else {
          reject('invalid form dose detail');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './_formDoseDetails.scss';
</style>
