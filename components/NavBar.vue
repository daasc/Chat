<template>
  <nav class="navbar">
    <span class="navbar__title">Chat</span>
    <span class="navbar__sign-out" @click="signOut()">Sign out</span>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  methods: {
    async signOut() {
      await this.$fire.auth.signOut()
      this.$store.commit('auth/SIGN_OUT')
      this.$router.push('/')
    },
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  background-color: #1f1f29;
  height: 60px;
  color: #d5d5d7;
  font-weight: bold;
  border-bottom: 1px solid #2c3538;
  justify-content: space-between;
  align-items: center;

  .navbar__title {
    font-size: 20px;
    margin-left: 20px;
  }
  .navbar__sign-out {
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
