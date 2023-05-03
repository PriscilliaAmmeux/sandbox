<script>
export default {
  //lifecycle hook - it allows us to register a callback to be called at certain times of the component's lifecycle. There are other hooks such as created and updated

  mounted() {
    this.$refs.p.textContent = "mounted!";
  },
};
</script>

<template>
  <p ref="p">hello</p>
</template>
