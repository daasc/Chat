<template>
  <div class="users">
    <div>
      <input id="" type="search" name="" />
    </div>

    <card-user
      v-for="(item, index) in users"
      :key="index"
      :name="item.name"
      :photo="item.photoURL"
    ></card-user>
  </div>
</template>
<script>
import cardUser from './cardUser.vue'
export default {
  name: 'ListUsers',
  components: { cardUser },
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
  background-color: #1f1f29;
  flex-direction: column;
  gap: 15px;
}
</style>
