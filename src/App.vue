<script setup>

</script>

<template>
  <header>

  </header>

  <main>
    <div class="wrap">
      <div id="head">
        PLEASE REGISTER NOW
      </div>
      <form>
        <input class="input is-primary" required placeholder="name" />
        <input class="input is-primary" placeholder="middle name/s" />
        <input class="input is-primary" required placeholder="surname" />
        <input class="input is-primary" />
        <input class="input is-primary" />
        <input class="input is-primary" />
      </form>
      <button type="submit">SUBMIT</button>
      <button type="reset">RESET</button>
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150%;
}

.is-primary {
  color: hsl(217, 71%, 53%);
  margin-bottom: 0.75rem;
  max-width: 40rem;
}

#head {
  margin-bottom: 2rem;
  height: 150%;
}

form {
}
</style>

