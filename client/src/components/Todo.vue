<template>
  <div>
    <section>
      <pre v-if="err.length > 0"> {{ err }} </pre>
      <form>
        <label for="todoInput">Todo: </label>
        <input id="todoInput" name="todoInput" data-id="input" v-model="newTodo.todo" />
        <button data-id="submit" @click.prevent="addTodo">
          Add Todo
        </button>
      </form>
    </section>
    <section>
      <ul data-id="todos">
        <li v-for="(todo, index) of todos" :key="index">
          {{ todo.todo }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL;

export default {
  name: 'Todo',
  async created() {
    await this.getTodos();
  },
  data() {
    return {
      todos: [],
      err: [],
      newTodo: {
        todo: '',
      },
    };
  },

  methods: {
    async addTodo() {
      try {
        await axios.post(apiUrl, this.newTodo);
        this.newTodo.todo = '';
        this.getTodos();
      } catch (err) {
        this.err.push(err);
      }
    },
    async getTodos() {
      try {
        const res = await axios.get(apiUrl);
        this.todos = res.data;
      } catch (err) {
        this.err.push(err);
      }
    },
  },
};
</script>
