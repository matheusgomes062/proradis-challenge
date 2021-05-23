<template>
  <div class="container">
    <div class="mainContent">
      <FormWizard />
    </div>
  </div>
</template>

<script>
import FormWizard from '@/components/FormWizard/FormWizard.vue';

export default {
  name: 'registerPatient',
  components: {
    FormWizard
  }
};
</script>

<style></style>
