<script>
import childComp from "./childComp.vue";

export default {
  components: {
    ChildComp,
  },
  data() {
    return {
      msg: "from parent",
    };
  },
};
</script>

<template>
  <childComp>Message: {{ msg }}</childComp>
</template>
