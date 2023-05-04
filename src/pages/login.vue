<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label
        >Email :
        <input type="email" v-model="email" required />
      </label>
      <label
        >Password:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  margin-top: 0;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  display: block;
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 1rem;
  height: 1.5rem;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
button:hover {
  background-color: #333;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
