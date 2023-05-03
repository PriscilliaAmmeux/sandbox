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
          <router-link to="/sandbox" class="nav-link">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sandbox" class="nav-link">Play</router-link>
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
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.nav-link:hover {
  background-color: #ddd;
}
</style>
