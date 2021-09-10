<template>
  <div class="main">
    <h3 class="container-title">Manage your to do list</h3>
    <p class="instruction">Click on checkbox or drag and drop to done</p>
    <div class="lists">
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
  padding: 0 14.5%;
}

.lists {
  display: flex;
  justify-content: space-between;
}

.container-title {
  font-size: 20px;
  font-weight: bold;
  color: #262626;
  margin-bottom: 10px;
}

.instruction {
  color: #464646;
  font-weight: 500;
  font-size: 16px;
  opacity: 0.6553431919642857;
  padding-top: 0;
  margin-top: 0;
}
</style>
