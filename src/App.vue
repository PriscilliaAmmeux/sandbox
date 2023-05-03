<script setup>
import listRendering from "./components/listRendering.vue";
import checkbox from "./components/checkbox.vue";
import conditionalRenduring from "./components/conditionalRenduring.vue";
import eventListeners from "./components/eventListeners.vue";
import attributeBindings from "./components/attributeBindings.vue";
</script>

<template>
  <h1>My sandbox</h1>

  <h2>Declative Rendering</h2>
  <declarativeRendering />
  <p>********************</p>

  <h2>Attribute Bindings</h2>
  <attributeBindings />
  <p>********************</p>

  <h2>Event listeners</h2>
  <eventListeners />
  <p>********************</p>

  <h2>Conditional renduring</h2>
  <conditionalRenduring />
  <p>********************</p>

  <h2>List rendering</h2>
  <listRendering />
  <p>********************</p>

  <h2>Checkbox</h2>
  <checkbox />
  <p>********************</p>

  <h2>Lifecycle and Template Refs</h2>
  <lifeCycle />
  <p>********************</p>
</template>
