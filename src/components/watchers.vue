<script>
export default {
  data() {
    return {
      todoId: 1,
      todoData: null,
    };
  },
  methods: {
    async fetchData() {
      this.todoData = null;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      );
      this.todoData = await res.json();
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    todoId() {
      this.fetchData();
    },
  },
};
</script>

<template>
  <p>Id de la liste de tâches: {{ todoId }}</p>
  <button @click="todoId++">Récupérer la prochaine liste de tâches</button>
  <p v-if="!todoData">Chargement...</p>
  <pre v-else>{{ todoData }}</pre>
</template>
