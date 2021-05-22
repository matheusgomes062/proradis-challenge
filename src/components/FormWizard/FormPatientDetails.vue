<template>
  <div>
    <h1 class="title">Registrar Paciente</h1>

    <h2 class="subtitle">
      Registre as informações do paciente para analisar a aplicação da vacinação
    </h2>

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
        <div v-if="$v.form.name.$error" class="error">Nome necessário!</div>
      </div>
      <div class="form-group">
        <label class="form-label" for="cpf">Cpf do paciente</label>
        <input
          v-model="$v.form.cpf.$model"
          type="text"
          placeholder="Qual o cpf do paciente?"
          class="form-control"
          id="cpf"
        />
        <div v-if="$v.form.cpf.$error" class="error">CPF necessário!</div>
      </div>
      <div class="form-group">
        <label class="form-label" for="name"
          >Data de nascimento do paciente</label
        >
        <Datepicker v-model="$v.form.birthdate.$model"></Datepicker>
        <div v-if="$v.form.birthdate.$error" class="error">
          Data de Nascimento necessária!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="comorbidity"
          >Paciente já teve alguma comorbidade específica?</label
        >
        <input
          type="radio"
          id="hasComorbidity"
          value="true"
          v-model="$v.form.comorbidity.$model"
        />
        <label for="hasComorbidity">Sim</label>
        <br />
        <input
          type="radio"
          id="dontHaveComorbidity"
          value="false"
          v-model="$v.form.comorbidity.$model"
        /><label for="dontHaveComorbidity">Não</label>
        <br />
        <div v-if="$v.form.comorbidity.$error" class="error">
          Preenchimento necessário!
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input
          type="text"
          v-model="$v.form.email.$model"
          placeholder="seu@email.com"
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

export default {
  components: {
    Datepicker
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
  computed: {
    loggedIn() {
      return this.existingUser && this.form.name;
    }
  },
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
      let job;
      if (!this.emailCheckedInDB) {
        this.$v.form.email.$touch();
        job = this.checkIfUserExists();
      } else {
        if (this.existingUser && !this.loggedIn) {
          this.$v.form.password.$touch();
          job = this.login();
        } else {
          // new user is typing info manually
          this.$v.$touch();
          job = Promise.resolve();
        }
      }

      return new Promise((resolve, reject) => {
        job
          .then(() => {
            if (!this.$v.$invalid) {
              resolve({
                email: this.form.email,
                password: this.form.password,
                name: this.form.name
              });
            } else {
              reject('data is not valid yet');
            }
          })
          .catch((error) => reject(error));
      });
    }
  }
};
</script>

<style scoped></style>
