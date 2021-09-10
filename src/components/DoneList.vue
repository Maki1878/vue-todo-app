<template>
  <div class="done-list">
    <div class="doneHeader">
      <p class="doneHeader1">Done</p>
      <button class="trashBtn">
        <i class="fas fa-trash" @click="deleteTodo(todo.id)"></i>
      </button>
    </div>
    <div class="done-tasks">
      <Todo
        v-for="todo in doneTodos"
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
import Todo from './Todo.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'DoneList',
  components: {
    Todo,
  },
  computed: {
    ...mapGetters(['doneTodos']),
  },
  methods: {
    ...mapActions(['getAllTodos', 'removeTodo']),
    deleteTodo(id) {
      this.removeTodo(id);
      this.getAllTodos();
    },
  },
};
</script>

<style scoped>
.done-list {
  background-color: #f0f1f7;
  border-radius: 8px;
  opacity: 0.638485863095238;
  width: 525px;
  min-height: 320px;
  box-sizing: border-box;
  padding: 16px;
}

.doneHeader {
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
}

.doneHeader1 {
  position: absolute;
  left: 0px;
  padding-left: 10px;
  font-weight: bold;
  color: #262626;
  font-size: 20px;
}

.trashBtn {
  position: absolute;
  right: 0px;
  padding-right: 30px;
  border: none;
  font-size: 24px;
  color: #000000;
  cursor: pointer;
}
</style>
