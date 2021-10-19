<template>
  <form @submit.prevent="addNewTodo">
    <label>Todo:</label>
    <textarea required v-model.trim="todo" ref="todoInput"></textarea>
    <button>Add a Todo</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    addNewTodo() {
      let todo = {
        title: this.todo,
        complete: false,
      };
      this.addTodo(todo);
      this.$router.push({ name: 'Home' });
    },
    focusInput() {
      this.$refs.todoInput.focus();
    },
  },
  mounted() {
    this.focusInput();
  },
};
</script>

<style scoped>
form {
  background-color: #f0f1f7;
  max-width: 60rem;
  margin: 0 auto;
  padding: 4rem;
  border-radius: 1rem;
  margin-top: 7.5rem;
}
label {
  display: block;
  color: rgb(66, 63, 63);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 2rem 0 1rem 0;
}

textarea {
  border: 1px solid rgb(48, 46, 46);
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  height: 10rem;
}
form button {
  display: block;
  margin: 2rem auto 0;
  background: #5cb5f0;
  color: white;
  padding: 1rem;
  border: 0;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  cursor: pointer;
}
</style>
