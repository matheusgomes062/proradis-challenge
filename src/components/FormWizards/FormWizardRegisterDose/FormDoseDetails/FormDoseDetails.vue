<template>
  <div class="content">
    <h1 class="title">Registrar Aplicação</h1>

    <h3 class="subtitle">
      Registre aplicação da vacina para cada paciente
    </h3>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="vaccine">Nome da Vacina</label>
        <input
          v-model="$v.form.vaccine.$model"
          type="select"
          placeholder="Selecione a vacina"
          class="form-control"
          id="vaccine"
        />
        <div
          v-if="$v.form.vaccine.$error && !$v.form.vaccine.required"
          class="error"
        >
          Nome da vacina necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="patient">Nome do Paciente</label>
        <input
          v-model="$v.form.patient.$model"
          type="select"
          placeholder="Selecione o paciente"
          class="form-control"
          id="patient"
        />
        <div
          v-if="$v.form.patient.$error && !$v.form.patient.required"
          class="error"
        >
          Nome do Paciente necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="batch">Qual dose?</label>
        <input
          v-model="$v.form.dose.$model"
          type="select"
          placeholder="Selecione a dose"
          class="form-control"
          id="dose"
        />
        <div v-if="$v.form.dose.$error && !$v.form.dose.required" class="error">
          Dose necessária!
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
      <!-- <div class="form-group">
        <label class="form-label" for="dosesNumber">Controle de dose e reincidência</label>
        <input
          v-model="$v.form.dosesNumber.$model"
          type="number"
          placeholder="Doses necessárias"
          class="form-control"
          id="dosesNumber"
        />
        <div
          v-if="$v.form.dosesNumber.$error && !$v.form.dosesNumber.required"
          class="error"
        >
          Número de doses necessária!
        </div>
      </div> -->
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      form: {
        name: null,
        manufacturer: null,
        batch: null,
        dueDate: null,
        dosesNumber: null,
        intervalBetweenDoses: null
      }
    };
  },
  computed: {},
  validations: {
    form: {
      vaccine: {
        required
      },
      patient: {
        required
      },
      dose: {
        required
      },
      applicationDate: {
        required
      }
    }
  },
  methods: {
    reset() {
      this.form.vaccine = null;
      this.form.patient = null;
      this.form.dose = null;
      this.form.applicationDate = null;
      this.$v.$reset();
    },
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        return new Promise((resolve) => {
          resolve(true);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import './_formDoseDetails.scss';
</style>
