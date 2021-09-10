import axios from 'axios';

export default {
  state: {
    todos: [],
  },
  actions: {
    async getAllTodos({ commit }) {
      const response = await axios.get('http://localhost:3000/todos');
      commit('setTodos', response.data);
    },
    async updateTodo({ commit }, updTodo) {
      const response = await axios.put(`http://localhost:3000/todos/${updTodo.id}`, updTodo);
      commit('editTodo', response.data);
    },
    async addTodo({ commit }, newTodo) {
      const response = await axios.post('http://localhost:3000/todos', newTodo);
      commit('addNewTodo', response.data);
    },
    async removeTodo({ commit }, id) {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      commit('deleteTodo', id);
    },
  },
  getters: {
    activeTodos: (state) => state.todos.filter((todo) => !todo.complete),
    doneTodos: (state) => state.todos.filter((todo) => todo.complete),
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    editTodo: (state, updTodo) => {
      const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo);
      }
    },
    addNewTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
};
