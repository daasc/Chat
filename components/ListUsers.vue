<template>
  <div class="users"></div>
</template>
<script>
export default {
  name: 'ListUsers',
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      const users = this.$fire.database.ref(`/users`)
      users.on('value', (snapshot) => {
        this.users = snapshot.val()
        this.$once('hook:beforeDestroy', () => {
          users.off()
        })
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.users {
  display: flex;
  height: calc(100vh - 60px);
  width: 30%;
  background-color: red;
}
</style>
