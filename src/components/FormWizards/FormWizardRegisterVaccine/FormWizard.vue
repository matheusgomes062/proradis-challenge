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

      <!-- <div class="progress-bar">
        <div :style="`width: ${progress}%;`"></div>
      </div> -->

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

    <div v-else class="thankYouContainer">
      <h1 class="title">Obrigado!</h1>
      <h2 class="subtitle">
        Vacina registrada!
      </h2>
      <div>💉🎉</div>
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
import FormVaccineDetails from './FormVaccineDetails/FormVaccineDetails';
import { api } from '@/services/index';

export default {
  name: 'FormWizardVaccine',
  components: {
    FormVaccineDetails
  },
  data() {
    return {
      currentStepNumber: 1,
      asyncState: null,
      steps: ['FormVaccineDetails'],
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
      api
        .post('/Vaccines', this.form)
        .then((response) => {
          if (response.status == 200) {
            console.log('Vaccine form submited');
            this.asyncState = 'success';
            this.currentStepNumber++;
            this.$vToastify.success('Vacina registrada!');
          } else {
            this.$vToastify.error('Não foi possível registrar...');
          }
        })
        .catch((error) => {
          console.log(error.response);
            this.$vToastify.error('Não foi possível registrar...');
        });
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
