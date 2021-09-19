<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Todos</router-link>
    <router-link :to="{ name: 'AddTodo' }">Add a new Todo</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>

<style scoped>
.main-nav {
  text-align: center;
  margin: 1rem auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 1rem;
  color: rgb(66, 63, 63);
  font-size: 2.2rem;
}
a.router-link-active {
  border-bottom: 0.3rem solid #4564f0;
  padding-bottom: 0.4rem;
}
</style>
