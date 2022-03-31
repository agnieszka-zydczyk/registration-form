<template>
  <label :for="name">{{ caption }}</label>
  <input class="input is-primary" type="password" :name="name" :id="name"
         minlength="8" maxlength="64" required>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    name: String,
    caption: String,
  }
};
</script>

<style scoped>

</style>