/* eslint-disable no-console */
<template>
  <div class="login">
    <div class="card__login">
      <div class="card__title">Login</div>
      <div>
        <button class="button__google" @click="login()">
          login with google
          <img src="@/assets/img/google.png" alt="icon google" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginView',
  methods: {
    login() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.$fire.auth
        .signInWithPopup(provider)
        .then((user) => {
          this.$store.commit('auth/ON_AUTH_STATE_CHANGED_MUTATION', {
            authUser: user.user.multiFactor.user,
          })
          this.$router.push('/')
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .card__login {
    width: 30%;
    height: 400px;
    padding: 20px;
    background-color: white;
    margin: 0 auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 20px;

    .card__title {
      font-size: 20px;
      text-align: center;
      height: 20%;
    }
    .button__google {
      width: 50%;
      cursor: pointer;
      height: 30px;
      color: #4285f4;
      border: 1px solid #4285f4;
      background-color: #ffff;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      display: flex;
      align-items: center;
      gap: 6px;
      justify-content: center;
      margin: 0 auto;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
