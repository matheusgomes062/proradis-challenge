<template>
  <div class="content">
    <h1 class="title">Registrar Vacina</h1>

    <h3 class="subtitle">
      Registre as informações da vacina
    </h3>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="name">Nome da Vacina</label>
        <input
          v-model="$v.form.name.$model"
          type="text"
          placeholder="Qual o nome da vacina?"
          class="form-control"
          id="name"
        />
        <div v-if="$v.form.name.$error && !$v.form.name.required" class="error">
          Nome necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="manufacturer">Fabricante</label>
        <input
          v-model="$v.form.manufacturer.$model"
          type="text"
          placeholder="Qual o fabricante?"
          class="form-control"
          id="manufacturer"
        />
        <div
          v-if="$v.form.manufacturer.$error && !$v.form.manufacturer.required"
          class="error"
        >
          Fabricante necessária!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="batch">Lote</label>
        <input
          v-model="$v.form.batch.$model"
          type="text"
          placeholder="Qual o lote?"
          class="form-control"
          id="batch"
        />
        <div
          v-if="$v.form.batch.$error && !$v.form.batch.required"
          class="error"
        >
          Lote necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="dueDate">Data de validade</label>
        <Datepicker v-model="$v.form.dueDate.$model"></Datepicker>
        <div
          v-if="$v.form.dueDate.$error && !$v.form.dueDate.required"
          class="error"
        >
          Data de Validade necessária!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="numberOfDoses">Número de doses</label>
        <input
          v-model="$v.form.numberOfDoses.$model"
          type="number"
          placeholder="Doses necessárias"
          class="form-control"
          id="numberOfDoses"
        />
        <div
          v-if="$v.form.numberOfDoses.$error && !$v.form.numberOfDoses.required"
          class="error"
        >
          Número de doses necessária!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="intervalBetweenDoses"
          >Intervalo entre doses</label
        >
        <input
          v-model="$v.form.intervalBetweenDoses.$model"
          type="number"
          placeholder="Valor em Dias"
          class="form-control"
          id="intervalBetweenDoses"
        />
        <div
          v-if="
            $v.form.intervalBetweenDoses.$error &&
              !$v.form.intervalBetweenDoses.required
          "
          class="error"
        >
          Intervalo entre doses necessária!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import Datepicker from 'vuejs-datepicker';

export default {
  props: {
    wizardData: {
      type: Object,
      required: true
    }
  },
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
        numberOfDoses: null,
        intervalBetweenDoses: null
      }
    };
  },
  computed: {},
  validations: {
    form: {
      name: {
        required
      },
      manufacturer: {
        required
      },
      batch: {
        required
      },
      dueDate: {
        required
      },
      numberOfDoses: {
        required
      },
      intervalBetweenDoses: {
        required
      }
    }
  },
  methods: {
    reset() {
      this.form.name = null;
      this.form.manufacturer = null;
      this.form.batch = null;
      this.form.dueDate = null;
      this.form.numberOfDoses = null;
      this.form.intervalBetweenDoses = null;
      this.$v.$reset();
    },
    submit() {
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            name: this.form.name,
            manufacturer: this.form.manufacturer,
            batch: this.form.batch,
            dueDate: this.form.dueDate,
            numberOfDoses: this.form.numberOfDoses,
            intervalBetweenDoses: this.form.intervalBetweenDoses
          });
        } else {
          reject('invalid vaccine');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './_formVaccineDetails.scss';
</style>
