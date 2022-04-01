<template>
  <header>
    Agnieszka Żydczyk - Vue 3.0 Sample Registration Form<br />
    hosted on <a href="http://agnieszka-zydczyk.github.io">http://agnieszka-zydczyk.github.io</a>
  </header>

  <main>
    <RegistrationForm />
  </main>
</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue';

export default {
  name: 'App',
  components: {
    RegistrationForm,
  },
};
</script>

<style>
  header {
    display: none;
  }
</style>
