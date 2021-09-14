<template>
  <div class="todo-list">
    <div class="activeHeader">
      <p class="todoHeader">To-do-list</p>
      <button class="addBtn">
        <i class="fas fa-plus" @click="addNewTodo"></i>
      </button>
    </div>
    <div class="active-tasks">
      <Todo
        v-for="todo in activeTodos"
        :key="todo.id"
        :title="todo.title"
        :complete="todo.complete"
        :id="todo.id"
        :todo="todo"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Todo from './Todo.vue';
export default {
  name: 'ActiveList',
  components: {
    Todo,
  },
  computed: { ...mapGetters(['activeTodos']) },
  methods: {
    addNewTodo() {
      this.$router.push({ name: 'AddTodo' });
    },
  },
};
</script>

<style scoped>
.todo-list {
  background-color: #ededf2;
  border-radius: 8px;
  opacity: 0.638485863095238;
  width: 525px;
  min-height: 320px;
  box-sizing: border-box;
  padding: 16px;
}

.activeHeader {
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
}

.todoHeader {
  position: absolute;
  left: 0px;
  padding-left: 10px;
  font-weight: bold;
  color: #262626;
  font-size: 20px;
}

.addBtn {
  position: absolute;
  right: 0px;
  padding-right: 30px;
  border: none;
  font-size: 24px;
  color: #000000;
  cursor: pointer;
}
</style>
