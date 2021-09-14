import axios from 'axios';

export default {
  state: {
    todos: [],
  },
  actions: {
    async getAllTodos({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        commit('setTodos', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateTodo({ commit }, updTodo) {
      try {
        const response = await axios.put(`http://localhost:3000/todos/${updTodo.id}`, updTodo);
        commit('editTodo', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo({ commit }, newTodo) {
      try {
        const response = await axios.post('http://localhost:3000/todos', newTodo);
        commit('addNewTodo', response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async removeTodo({ commit }, id) {
      try {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        commit('deleteTodo', id);
      } catch (error) {
        console.log(error);
      }
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
