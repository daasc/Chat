<template>
  <div class="container">
    <nav-bar></nav-bar>
    <di class="chat">
      <list-users></list-users>
      <div class="chat__main">
        <chat-comments></chat-comments>
        <send-comments></send-comments>
      </div>
    </di>
  </div>
</template>

<script>
import ChatComments from '~/components/ChatComments.vue'
import ListUsers from '~/components/ListUsers.vue'
import NavBar from '~/components/NavBar.vue'
import SendComments from '~/components/SendComments.vue'

export default {
  name: 'IndexPage',
  components: { NavBar, ListUsers, ChatComments, SendComments },
  created() {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        this.$store.commit('auth/ON_AUTH_STATE_CHANGED_MUTATION', {
          authUser: user,
        })
      } else {
        this.$router.push('/login')
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  width: 75%;
  margin: 0 auto;

  .chat {
    display: flex;

    .chat__main {
      width: 70%;
    }
  }
}
</style>
