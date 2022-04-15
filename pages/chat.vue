<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt></nuxt>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'IndexPage',
  components: { NavBar },
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
