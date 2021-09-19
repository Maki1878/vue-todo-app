<template>
  <div class="activeList-container">
    <div class="activeHeader">
      <p class="activeHeader-title">To-do-list</p>
      <button class="addBtn">
        <i class="fas fa-plus add-icon" @click="addNewTodo"></i>
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
.activeList-container {
  background-color: #ededf2;
  border-radius: 0.8rem;
  opacity: 0.638485863095238;
  width: 48%;
  min-height: 32rem;
  box-sizing: border-box;
  padding: 1.6rem;
  margin-bottom: 5rem;
}

.activeHeader {
  position: relative;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.activeHeader-title {
  position: absolute;
  padding-left: 1rem;
  font-weight: bold;
  color: #262626;
  font-size: 20px;
}

.addBtn {
  position: absolute;
  right: 0px;
  padding-right: 3rem;
  border: none;
  font-size: 2.4rem;
  color: #000000;
  cursor: pointer;
}

@media (max-width: 75em) {
  .activeList-container {
    margin-bottom: 5rem;
  }
}

@media (max-width: 57em) {
  .activeList-container {
    width: 52em;
    margin-bottom: 5rem;
  }
}

@media (max-width: 35em) {
  .activeList-container {
    width: 100%;
    margin-bottom: 5rem;
  }
}
</style>
