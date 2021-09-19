<template>
  <div class="main">
    <h3 class="container-title">Manage your to do list</h3>
    <p class="instructions">Click on checkbox to done</p>
    <div class="lists-container">
      <ActiveList />
      <DoneList />
    </div>
  </div>
</template>

<script>
import ActiveList from '../components/ActiveList.vue';
import DoneList from '../components/DoneList.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    ActiveList,
    DoneList,
  },
  created() {
    this.getAllTodos();
  },
  methods: {
    ...mapActions(['getAllTodos']),
  },
};
</script>

<style scoped>
.main {
  width: 72%;
  margin: 0 auto;
}

.lists-container {
  display: flex;
  justify-content: space-between;
}

.container-title {
  font-size: 2rem;
  font-weight: bold;
  color: #262626;
  margin-bottom: 1rem;
}

.instructions {
  color: #464646;
  font-weight: 500;
  font-size: 1.6rem;
  opacity: 0.7;
  padding-top: 0;
  margin-top: 0;
}
</style>
