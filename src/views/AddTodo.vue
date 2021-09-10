<template>
  <form @submit.prevent="addNewTodo">
    <!-- <label>Title:</label>
    <input type="text" required v-model.trim="title" /> -->
    <label>Todo:</label>
    <textarea required v-model.trim="todo" ref="todoInput"></textarea>
    <button>Add Task</button>
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
    ...mapActions(['getAllTodos', 'addTodo']),
    addNewTodo() {
      let todo = {
        title: this.todo,
        complete: false,
      };
      this.addTodo(todo);
      this.getAllTodos();
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
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  margin-top: 5%;
}
label {
  display: block;
  color: rgb(66, 63, 63);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid rgb(48, 46, 46);
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid rgb(48, 46, 46);
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  width: 8rem;
  display: block;
  margin: 20px auto 0;
  background: #5cb5f0;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
</style>
