<template>
  <div class="header">
    <div class="header-main">
      <div class="header-todobox-section">
        <img src="../assets/Logo1.svg" alt="todobox logo" class="todobox-logo" />
        <img class="todobox-text" src="../assets/Todobox.svg" alt="" />
      </div>
      <div class="header-user-section">
        <div class="username">
          <p>
            Username
          </p>
        </div>
        <div>
          <i class="fas fa-user-circle user-icon"></i>
        </div>
      </div>
    </div>
  </div>
  <TheNavbar />
</template>

<script>
import TheNavbar from './TheNavbar.vue';
export default {
  name: 'TheHeader',
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #ededf2;
  height: 80px;
}

.header-main {
  max-width: 108.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.header-user-section {
  display: flex;
}

.username {
  font-size: 16px;
  font-weight: bold;
  color: #464646;
  margin-right: 2rem;
}

.user-icon {
  font-size: 4.8rem;
  color: #b3b5b4;
}

.header-todobox-section {
  display: flex;
}

.todobox-text {
  margin-left: 2rem;
}
</style>
