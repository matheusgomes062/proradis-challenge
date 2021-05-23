<template>
  <div>
    <div v-if="wizardInProgress" v-show="asyncState !== 'pending'">
      <keep-alive>
        <component
          ref="currentStep"
          :is="currentStep"
          @updateAsyncState="updateAsyncState"
          :wizard-data="form"
        ></component>
      </keep-alive>

      <div class="progress-bar">
        <div :style="`width: ${progress}%;`"></div>
      </div>

      <!-- Actions -->
      <div class="buttons">
        <button
          @click="goBack"
          v-if="currentStepNumber > 1"
          class="btn-outlined"
        >
          Anterior
        </button>

        <button @click="nextButtonAction" class="btn">
          {{ isLastStep ? 'Finalizar' : 'Próximo' }}
        </button>
      </div>
    </div>

    <div v-else>
      <h1 class="title">Obrigado!</h1>
      <h2 class="subtitle">
        Paciente registrado!
      </h2>
    </div>

    <!-- <div class="loading-wrapper" v-if="asyncState === 'pending'">
      <div class="loader">
        <img src="/spinner.svg" alt="" />
        <p>Aguarde! Estamos nos comunicando com nossos servidores!</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import FormPatientDetails from './FormPatientDetails/FormPatientDetails';
import FormAddress from './FormAddress/FormAddress';
export default {
  name: 'FormWizard',
  components: {
    FormPatientDetails,
    FormAddress
  },
  data() {
    return {
      currentStepNumber: 1,
      asyncState: null,
      steps: ['FormPatientDetails', 'FormAddress'],
      form: {
        name: null,
        cpf: null,
        birthdate: null,
        email: null,
        address: null,
        comorbidity: null
      }
    };
  },
  computed: {
    isLastStep() {
      return this.currentStepNumber === this.length;
    },
    wizardInProgress() {
      return this.currentStepNumber <= this.length;
    },
    length() {
      return this.steps.length;
    },
    currentStep() {
      return this.steps[this.currentStepNumber - 1];
    },
    progress() {
      return (this.currentStepNumber / this.length) * 100;
    }
  },
  methods: {
    updateAsyncState(state) {
      this.asyncState = state;
    },
    submitRegister() {
      this.asyncState = 'pending';
      console.log('form submitted', this.form);
      this.asyncState = 'success';
      this.currentStepNumber++;
    },
    nextButtonAction() {
      this.$refs.currentStep
        .submit()
        .then((stepData) => {
          Object.assign(this.form, stepData);
          if (this.isLastStep) {
            this.submitRegister();
          } else {
            this.goNext();
          }
        })
        .catch((error) => console.log(error));
    },
    goBack() {
      this.currentStepNumber--;
    },
    goNext() {
      this.currentStepNumber++;
    }
  }
};
</script>
