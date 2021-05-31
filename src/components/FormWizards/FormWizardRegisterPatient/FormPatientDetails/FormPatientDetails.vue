<template>
  <div class="content">
    <h1 class="title">Registrar Paciente</h1>

    <h3 class="subtitle">
      Registre as informações pessoais do paciente
    </h3>

    <form class="form">
      <div class="form-group">
        <label class="form-label" for="name">Nome do paciente</label>
        <input
          v-model="$v.form.name.$model"
          type="text"
          placeholder="Qual o nome do paciente?"
          class="form-control"
          id="name"
        />
        <div v-if="$v.form.name.$error && !$v.form.name.required" class="error">
          Nome necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="cpf">Cpf do paciente</label>
        <!-- <input
          v-model="$v.form.cpf.$model"
          type="text"
          placeholder="Qual o cpf do paciente?"
          class="form-control"
          id="cpf"
        /> -->
        <the-mask
          v-model="$v.form.cpf.$model"
          type="text"
          placeholder="Qual o cpf do paciente?"
          class="form-control"
          id="cpf"
          :mask="['###.###.###-##']"
        />
        <div v-if="$v.form.cpf.$error && !$v.form.cpf.required" class="error">
          CPF necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="birthdate"
          >Data de nascimento do paciente</label
        >
        <Datepicker v-model="$v.form.birthdate.$model"></Datepicker>
        <div
          v-if="$v.form.birthdate.$error && !$v.form.birthdate.required"
          class="error"
        >
          Data de Nascimento necessária!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="comorbidity"
          >Paciente está no grupo de risco?</label
        >
        <div class="radioOptionContainer">
          <input
            type="radio"
            id="hasComorbidity"
            value="true"
            v-model="$v.form.comorbidity.$model"
          />
          <label for="hasComorbidity">Sim</label>
        </div>
        <div class="radioOptionContainer">
          <input
            type="radio"
            id="dontHaveComorbidity"
            value="false"
            v-model="$v.form.comorbidity.$model"
          /><label for="dontHaveComorbidity">Não</label>
        </div>
        <div
          v-if="$v.form.comorbidity.$error && !$v.form.comorbidity.required"
          class="error"
        >
          Preenchimento necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input
          type="text"
          v-model="$v.form.email.$model"
          placeholder="paciente@email.com"
          class="form-control"
          id="email"
        />
        <div
          v-if="$v.form.email.$error && !$v.form.email.required"
          class="error"
        >
          Email é necessário!
        </div>
        <div v-if="$v.form.email.$error && !$v.form.email.email" class="error">
          Email inválido!
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import Datepicker from 'vuejs-datepicker';
import { TheMask } from 'vue-the-mask';

export default {
  components: {
    Datepicker,
    TheMask
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        cpf: null,
        birthdate: null,
        comorbidity: null
      }
    };
  },
  computed: {},
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      cpf: {
        required
      },
      birthdate: {
        required
      },
      comorbidity: {
        required
      }
    }
  },
  methods: {
    reset() {
      this.form.name = null;
      this.form.email = null;
      this.form.cpf = null;
      this.form.birthdate = null;
      this.form.comorbidity = null;
      this.$v.$reset();
    },
    submit() {
      this.$v.$touch();
      return new Promise((resolve, reject) => {
        if (!this.$v.$invalid) {
          resolve({
            name: this.form.name,
            email: this.form.email,
            cpf: this.form.cpf,
            birthdate: this.form.birthdate,
            comorbidity: this.form.comorbidity
          });
        } else {
          reject('invalid patient detail');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import './_formPatientDetails.scss';
</style>
