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
      <router-link to="/">Home</router-link>
      <router-link to="/sandbox">Sandbox</router-link>
    </nav>
    <router-view />
  </div>
</template>
