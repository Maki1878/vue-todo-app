<template>
  <div class="todo-item">
    <input :checked="complete" type="checkbox" @change="toggleComplete(todo)" />
    <div class="text-input">
      <input
        :value="title"
        type="text"
        @change="changeText(todo, $event.target.value)"
        :disabled="todo.complete"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['title', 'complete', 'id', 'todo'],
  methods: {
    ...mapActions(['updateTodo']),
    toggleComplete(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        complete: !todo.complete,
      };
      this.updateTodo(updTodo);
    },
    changeText(todo, newText) {
      const updTodo = {
        id: todo.id,
        title: newText,
        complete: todo.complete,
      };
      this.updateTodo(updTodo);
    },
  },
};
</script>

<style scoped>
.todo-item {
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.text-input {
  height: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-input input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 14px;
}
</style>
