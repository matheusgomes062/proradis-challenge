<template>
  <div class="content">
    <h1 class="title">Registrar Paciente</h1>

    <h3 class="subtitle">
      Registre as informações do paciente para analisar a aplicação da vacinação
    </h3>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="address">Endereço do paciente</label>
        <input
          v-model="$v.form.address.$model"
          type="text"
          placeholder="Qual o endereço do paciente?"
          class="form-control"
          id="address"
        />
        <div
          v-if="$v.form.address.$error && !$v.form.address.required"
          class="error"
        >
          Endereço necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="district">Bairro do paciente</label>
        <input
          v-model="$v.form.district.$model"
          type="text"
          placeholder="Qual o bairro do paciente?"
          class="form-control"
          id="district"
        />
        <div
          v-if="$v.form.district.$error && !$v.form.district.required"
          class="error"
        >
          Bairro necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="state">Estado</label>
        <input
          v-model="$v.form.state.$model"
          type="select"
          placeholder="Selectione o Estado"
          class="form-control"
          id="state"
        />
        <div
          v-if="$v.form.state.$error && !$v.form.state.required"
          class="error"
        >
          Estado necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="city">Cidade</label>
        <input
          v-model="$v.form.city.$model"
          type="select"
          placeholder="Selectione a Cidade"
          class="form-control"
          id="city"
        />
        <div v-if="$v.form.city.$error && !$v.form.city.required" class="error">
          Cidade necessária!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  components: {},
  data() {
    return {
      form: {
        address: null,
        state: null,
        city: null
      }
    };
  },
  computed: {},
  validations: {
    form: {
      address: {
        required
      },
      district: {
        required
      },
      state: {
        required
      },
      city: {
        required
      }
    }
  },
  methods: {
    reset() {
      this.form.address = null;
      this.form.district = null;
      this.form.state = null;
      this.form.city = null;
      this.$v.$reset();
    },
    submit() {
      this.$v.touch();

      return new Promise((resolve) => {
        resolve(true);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './_formAddressDetails.scss';
</style>
