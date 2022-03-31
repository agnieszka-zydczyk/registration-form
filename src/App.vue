<template>
  <header>

  </header>

  <main>
    <div class="wrap">
      <form>
        <h1 id="head">REGISTRATION FORM</h1>
        <fieldset>
          <legend>name</legend>
          <div>
            <label for="title">personal title</label>
            <select class="input is-primary" name="title" id="title" required>
              <option>--- Please choose an option ---</option>
              <option value="1">Ms</option>
              <option value="2">Mr</option>
              <option value="3"></option>
            </select>
          </div>
          <input type="text" class="input is-primary" required placeholder="first name" />
          <input type="text" class="input is-primary" placeholder="middle name/s (optional)" />
          <input type="text" class="input is-primary" required placeholder="surname" />
        </fieldset>
        <fieldset>
          <legend>date of birth</legend>
          <flatPickr class="input is-primary" v-model="date" :config="config" placeholder="select a date" required />
        </fieldset>
        <fieldset>
          <legend>e-mail</legend>
          <input class="input is-primary" type="email" id="email" placeholder="example@gmail.com" required />
        </fieldset>
        <fieldset>
          <legend>password</legend>
          <div>
            <label for="pass">password (8 characters minimum):</label>
            <input class="input is-primary" type="password" id="pass" name="pass"
                   minlength="8" required>
          </div>
          <div>
            <label for="p-repeat">confirm password:</label>
            <input class="input is-primary" type="password" id="p-repeat" name="p-repeat"
                   minlength="8" required>
          </div>
        </fieldset>
        <div id="buttons">
          <input class="button" id="reset" type="reset" value="RESET">
          <input class="button" id="submit" type="submit" value="SIGN UP">
        </div>
      </form>
    </div>
  </main>
</template>

<script>

// import { matchPassword } from './main.js';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  data() {
    return {
      date: null,
      config: {
        maxDate: 'today',
      },
    };
  },
  components: {
    flatPickr
  }
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
.wrap{
  background-color: rgba(29, 215, 229, 0.3);
  padding: 20px;
}
#head {
  margin-bottom: 2rem;
  height: 100%;
  background-color: rgb(30, 221, 221);
  padding: 40px;
}
form{

}
#buttons {

}

#submit {
  margin-left: 570px;
}

#reset {

}

</style>

