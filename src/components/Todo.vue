<template>
  <div class="todo">
    <input :checked="complete" type="checkbox" @change="toggleComplete(todo)" />
    <input
      :value="title"
      type="text"
      class="text-input"
      @change="changeText(todo, $event.target.value)"
    />
    <!-- <div v-if="showDetails" class="details">
      <p>{{ task.details }}</p>
    </div> -->
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
.todo {
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.text-input {
  height: 35px;
  width: 100%;
  border: none;
  outline: none;
}
</style>
