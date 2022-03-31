<template>
  <header>

  </header>

  <main>
    <div class="wrap">
      <form>
        <h1 id="head" class="hero is-primary">Registration form</h1>
        <fieldset>
          <legend>Fill</legend>
          <label for="title">title</label>
          <select class="input is-primary" id="title" name="title">
            <option value=""></option>
            <option value="1">Mr.</option>
            <option value="2">Ms.</option>
          </select>
          <NameInput name="first-name" caption="given name" placeholder="John" />
          <NameInput name="middle-name" caption="middle name(s)" placeholder="(optional)" middleName />
          <NameInput name="surname" caption="family name" placeholder="Doe" />
          <label for="dateOfBirth">date of birth</label>
          <flatPickr class="input is-primary" id="dateOfBirth" name="dateOfBirth"
                     v-model="date" :config="config" placeholder="YYYY-MM-DD" required />
          <label for="email">e-mail</label>
          <input class="input is-primary" type="email" id="email" name="email"
                 placeholder="example@gmail.com" required />
          <PasswordInput name="password" caption="password (min 8 characters)" />
          <PasswordInput name="password-confirm" caption="confirm password" />
        </fieldset>
        <div id="buttons">
          <button class="button is-danger" type="reset">cancel</button>
          <button class="button is-success" type="submit">save</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>

// import { matchPassword } from './main.js';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import NameInput from './components/NameInput.vue';
import PasswordInput from './components/PasswordInput.vue';

export default {
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
};
</script>

<style>
@import "./assets/base.css";

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.is-primary {
  color: hsl(185, 29%, 32%);
  margin-bottom: 0.75rem;
  max-width: 40rem;
}

.wrap {
  background-image: linear-gradient(to right, rgba(35, 232, 232, 0.98), rgb(4, 183, 183));
  padding: 20px;
  border-radius: 10px;
  /*border-color: #00b89c;*/
}

#head {
  /*margin-bottom: 2rem;*/
  /*height: 100%;*/
  /*!*background-color: rgb(29, 215, 229);*!*/
  /*padding: 20px;*/
  /*border-radius: 10px;*/
  /*!*margin-left: -90px;*!*/
  /*font-size: 2rem;*/
  /*background-image: linear-gradient(to bottom, rgba(29, 215, 229, 1), rgba(30, 221, 221, 1));*/

}

form {
  font-size: 1.2rem;
}

#buttons {
  padding: 20px 0 20px 0;
  display: flex;
  justify-content: space-between;
}

label {
  display: inline-block;
}

label::first-letter {
  text-transform: uppercase;
}

button {
  /*padding: 0.2rem 0.75rem;*/
  transition: transform 0.5s;
}

button:hover {
  transform: scale(1.1);
}

button {
  text-transform: capitalize;
}

input {
  font-size: inherit;
  font-family: inherit;
}

input {
  padding: 0.25rem 0.5rem;
  font-size: 125%;
  max-width: 10rem;
}

/*input:invalid {*/
/*  background-image: linear-gradient(to left, rgba(171, 188, 190, 0.78), rgb(222, 247, 250));*/
/*}*/

</style>

