<template>
  <label :for="name">{{ caption }}</label>
  <input type="text" class="input is-primary" maxlength="64" :pattern="validationPattern"
         :name="name" :id="name" :placeholder="placeholder" :required="!middleName" />
</template>

<script>
export default {
  name: 'NameInput',
  props: {
    name: String,
    caption: String,
    placeholder: String,
    middleName: Boolean,
  },
  computed: {
    validationPattern() {
      return ( this.middleName )
          ? '[\\p{Alphabetic}\\p{Connector_Punctuation}\\p{Dash_Punctuation}\\p{Space_Separator}\\.\']+'
          : '[\\p{Alphabetic}\\p{Connector_Punctuation}\\p{Dash_Punctuation}\']+';
    }
  }

};
</script>

<style scoped>

</style>