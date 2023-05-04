<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      email: "",
      name: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        email: this.email,
        name: this.name,
        message: this.message,
      };
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been send",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
};
</script>

<template>
  <form class="form">
    <h1>Contact us</h1>
    <div class="display">
      <label for="email" class="label"
        >Email:
        <input type="email" id="email" class="input" v-model="email" required />
      </label>
    </div>
    <div class="display">
      <label for="name" class="label"
        >Name:
        <input type="text" id="name" class="input" v-model="name" required
      /></label>
    </div>
    <div class="display">
      <label for="message" class="label"
        >Message:
        <textarea class="input" required>Message</textarea>
      </label>
    </div>
    <button @click.prevent="submitForm()" class="button">Send</button>
  </form>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
.form {
  border: 1px solid #ccc;
  border-radius: 1em;
  max-width: 50%;
  padding: 1rem;
  margin: 10% auto;
}
.label {
  margin: 1rem;
  min-width: 90%;
  display: block;
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 1rem;
  cursor: pointer;
  width: 20%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.button:hover {
  background-color: #333;
}
.display {
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  max-height: 45%;
}
.input {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
}
</style>
