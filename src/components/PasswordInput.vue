<template>
  <label :for="name">{{ caption }}</label>
  <input class="input" type="password" :name="name" :id="name"
         minlength="8" maxlength="32" required>
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