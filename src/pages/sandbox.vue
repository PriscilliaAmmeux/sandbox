<script setup>
import watchers from "../components/watchers.vue";
import declarativeRendering from "../components/declarativeRendering.vue";
import listRendering from "../components/listRendering.vue";
import checkbox from "../components/checkbox.vue";
import conditionalRenduring from "../components/conditionalRenduring.vue";
import eventListeners from "../components/eventListeners.vue";
import attributeBindings from "../components/attributeBindings.vue";
</script>

<template>
  <h1>My sandbox</h1>
  <div class="grid-container">
    <div class="grid-item">
      <h2>Declative Rendering</h2>
      <declarativeRendering />
    </div>
    <div class="grid-item">
      <h2>Attribute Bindings</h2>
      <attributeBindings />
    </div>
    <div class="grid-item">
      <h2>Event listeners</h2>
      <eventListeners />
    </div>
    <div class="grid-item">
      <h2>Conditional renduring</h2>
      <conditionalRenduring />
    </div>
    <div class="grid-item">
      <h2>List rendering</h2>
      <listRendering />
    </div>
    <div class="grid-item">
      <h2>Checkbox</h2>
      <checkbox />
    </div>
    <div class="grid-item">
      <h2>Watchers</h2>
      <watchers />
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
  font-size: 2rem;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
}

.grid-item {
  background-color: #ccc;
  text-align: center;
  font-size: 20px;
  padding: 5px;
}
</style>
