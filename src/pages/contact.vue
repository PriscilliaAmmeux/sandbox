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
    },
  },
};
function submitForm() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your message has been send",
    showConfirmButton: false,
    timer: 1500,
  });
}
</script>

<template>
  <form class="form">
    <h1>Contact us</h1>
    <div class="display">
      <label for="email" class="label">Email</label>
      <input type="text" id="email" class="input" v-model="email" required />
    </div>
    <div class="display">
      <label for="name" class="label">Name</label>
      <input type="text" id="name" class="input" v-model="name" required />
    </div>
    <div class="display">
      <label for="message" class="label">Message</label>
      <textarea placeholder="votre message" class="input" required>
Message</textarea
      >
    </div>
    <button onclick="submitForm()" class="button">Send</button>
  </form>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
.form {
  border: 1px solid black;
  border-radius: 1em;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.label {
  margin: 1rem;
}
.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 1rem;
  cursor: pointer;
  width: 20%;
  height: 1.5rem;
}
.button:hover {
  background-color: white;
  color: #4caf50;
}
.display {
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  max-height: 45%;
}
.input {
  width: 50rem;
  height: auto;
}
</style>
