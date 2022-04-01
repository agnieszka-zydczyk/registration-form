<template>
  <dialog class="dialog" open>
    <h1 class="heading">Vue 3 registration form in English</h1>
    <hr>
    <form autocomplete="off" @submit="validate($event)">
      <fieldset>
        <legend>Personal information</legend>
        <label for="title">title</label>
        <select class="input" id="title" name="title">
          <option value=""></option>
          <option value="1">Mr.</option>
          <option value="2">Ms.</option>
        </select>
        <NameInput name="first-name" caption="given name" placeholder="John" />
        <NameInput name="middle-name" caption="middle name(s)" placeholder="(optional)" middleName />
        <NameInput name="surname" caption="family name" placeholder="Doe" />
        <label for="dateOfBirth">date of birth</label>
        <flatPickr class="input" id="dateOfBirth" name="dateOfBirth"
                   v-model="date" :config="config" placeholder="YYYY-MM-DD" required />
        <label for="email">e-mail</label>
        <input class="input" type="email" id="email" name="email"
               placeholder="example@gmail.com" required />
        <PasswordInput name="password" caption="password (min 8 characters)" />
        <PasswordInput name="password-confirm" caption="confirm password" />
      </fieldset>
      <div class="buttonWrapper">
        <button class="button is-danger" type="reset">cancel</button>
        <button class="button is-success" type="submit">save</button>
      </div>
    </form>
  </dialog>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import NameInput from './NameInput.vue';
import PasswordInput from './PasswordInput.vue';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      date: null,
      config: {
        maxDate: 'today',
        allowInput: true,
      },
    };
  },
  components: {
    PasswordInput,
    NameInput,
    flatPickr,
  },
  methods: {
    validate(event) {
      const pass1 = document.getElementById( 'password' ).value;
      const pass2 = document.getElementById( 'password-confirm' ).value;

      if ( pass1 != pass2 ) {
        alert( 'Passwords don\'t match' );
        event.preventDefault();
      } else {
        alert( 'Form completed properly, submitting...' );
      }
    }
  }
};
</script>

<style lang="less">

@import (less) "@/assets/base.css";
@import (less) 'bulma/css/bulma.css';

hr {
  background: black;
  height: 0.2rem;
  width: 4rem;
  margin: 0 auto 0.5rem;
}

main {
  display: flex;
  justify-content: center;
  background: rgb(64,181,147);
  background: linear-gradient(90deg, rgba(64,181,147,1) 0%, rgba(9,101,121,1) 80%, rgba(0,124,149,1) 100%);
}

.heading {
  text-transform: uppercase;
  text-align: center;
}

.dialog {
  border-radius: 10px;
  border: 1px solid #888;
  background-color: #fcfcfc;
  max-width: 480px;
  position: static;
  margin: 4rem 0;
  box-shadow: 40px 40px;
  font-size: 70%;
  text-transform: uppercase;
  padding: 1em 2em;
}

legend {
  text-align: right;
  font-weight: bold;
  padding: 0.5rem 0.5rem 0;
}

.buttonWrapper {
  padding: 2rem 0 1rem;
  display: flex;
  justify-content: space-between;
}

label {
  display: inline-block;
  margin-top: 0.5rem;
}

label::first-letter {
  text-transform: uppercase;
}

button {
  transition: transform 0.5s, background-color 0.5s;
  text-transform: capitalize;
}

button:hover {
  transform: scale(1.1);
}

input {
  font-size: inherit;
  font-family: inherit;
}

input, select {
  padding: 0.25rem 0.5rem;
  font-size: 125%;
  max-width: 10rem;
  transition: all 0.5s;
}

input:invalid, select:invalid, input.input:focus:invalid, select.input:focus:invalid {
  border-color: #f8a5b6;
  box-shadow: 0 0 0 1px rgba(241, 208, 208, 64);
}

input.input:focus:not(input:invalid), select.input:focus:not(select:invalid) {
  .input;
}

input:hover, select:hover {
  background-color: #d0f1d3;
}

@media only screen and (max-width: 639px) {
  .dialog {
    box-shadow: initial;
  }
}

</style>