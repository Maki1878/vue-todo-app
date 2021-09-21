<template>
  <div class="doneList-container">
    <div class="doneHeader">
      <p class="doneHeader-title">Done</p>
    </div>
    <div class="done-tasks">
      <Todo
        v-for="todo in doneTodos"
        :key="todo.id"
        :title="todo.title"
        :complete="todo.complete"
        :id="todo.id"
        :todo="todo"
        ><i class="fas fa-trash trash-icon" @click="removeTodo(todo.id)"></i>
      </Todo>
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
    ...mapActions(['removeTodo']),
  },
};
</script>

<style scoped>
.doneList-container {
  background-color: #ededf2;
  border-radius: 8px;
  opacity: 0.638485863095238;
  width: 48%;
  min-height: 32rem;
  box-sizing: border-box;
  padding: 1.6rem;
  margin-bottom: 5rem;
}

.doneHeader {
  position: relative;
  height: 5rem;
  display: flex;
  align-items: center;
}

.doneHeader-title {
  position: absolute;
  left: 0px;
  padding-left: 1rem;
  font-weight: bold;
  color: #262626;
  font-size: 20px;
}

.trash-icon {
  margin-right: 1.5rem;
  font-size: 18px;
  cursor: pointer;
}

@media (max-width: 75em) {
  .doneList-container {
    margin-bottom: 5rem;
  }
}

@media (max-width: 57em) {
  .doneList-container {
    width: 52em;
    margin-bottom: 5rem;
  }
}

@media (max-width: 35em) {
  .doneList-container {
    width: 100%;
    margin-bottom: 5rem;
  }
}
</style>
