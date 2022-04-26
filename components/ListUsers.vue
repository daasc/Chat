<template>
  <div class="users">
    <search-user @doSearch="setSearchTerm"></search-user>
    <card-user
      v-for="(item, index) in listUsers"
      :key="index"
      :name="item.name"
      :photo="item.photoURL"
      :uid="item.uid"
      @setChatUid="chatUid"
    ></card-user>
  </div>
</template>
<script>
import cardUser from './cardUser.vue'
import SearchUser from './SearchUser.vue'
export default {
  name: 'ListUsers',
  components: { cardUser, SearchUser },
  data() {
    return {
      users: [],
      search: '',
    }
  },
  computed: {
    listUsers() {
      if (this.search !== '') {
        const result = {}
        for (const key in this.users) {
          const searchName = new RegExp(this.search, 'i')
          if (this.users[key].name.match(searchName)) {
            result[key] = this.users[key]
          }
        }
        return result
      }
      return this.users
    },
  },
  created() {
    this.getUser()
  },
  methods: {
    chatUid({ uid }) {
      this.$store.commit('auth/SET_CHAT_UID', uid)
    },
    setSearchTerm({ term }) {
      this.search = term
    },
    getUser() {
      if (typeof window !== 'undefined') {
        const users = this.$fire.database.ref(`/users`)
        const user = JSON.parse(localStorage.getItem('user'))
        users.on('value', (snapshot) => {
          const result = snapshot.val()
          const filterUsers = {}
          for (const key in result) {
            if (result[key].email !== user.email) {
              filterUsers[key] = result[key]
              filterUsers[key].uid = key
            }
          }
          this.users = filterUsers
          this.$once('hook:beforeDestroy', () => {
            users.off()
          })
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.users {
  display: flex;
  height: calc(90vh - 60px);
  width: 30%;
  background-color: #1f1f29;
  flex-direction: column;
  gap: 15px;
  overflow-y: scroll;
  border-right: 1px solid #2c3538;
}
</style>
