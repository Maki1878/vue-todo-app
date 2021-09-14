<template>
  <div class="header">
    <div class="header-box">
      <div class="left">
        <img src="../assets/Logo1.svg" alt="" />
        <img class="todobox" src="../assets/Todobox.svg" alt="" />
      </div>
      <div class="right">
        <div class="username">
          <p>
            Username
          </p>
        </div>
        <div>
          <i class="fas fa-user-circle"></i>
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

.header-box {
  max-width: 1082px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.fa-user-circle {
  font-size: 48px;
  color: #b3b5b4;
}

.right {
  display: flex;
}

.left {
  display: flex;
}

.username {
  font-size: 16px;
  font-weight: bold;
  color: #464646;
  margin-right: 20px;
}

.todobox {
  margin-left: 20px;
}
</style>
