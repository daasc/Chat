<template>
  <div>
    <h1>chat</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
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
