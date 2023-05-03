<script>
import router from "./router";

export default {
  name: "App",
  router,
};
</script>

<template>
  <div>
    <nav>
      <ul class="navbar">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sandbox" class="nav-link">Sandbox</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/information" class="nav-link"
            >Informations</router-link
          >
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
}

.nav-item {
  margin: 0;
  text-decoration: none;
  list-style-type: none;
  min-width: 20%;
  text-align: center;
}

.nav-link {
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #4caf50;
  border-radius: 1em;
  color: #fff;
}

.nav-link:hover {
  background-color: #333;
}
</style>
