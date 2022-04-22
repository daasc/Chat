<template>
  <div class="comments">
    <card-message
      v-for="(item, index) in messages"
      :key="index"
      :current-user="item.user === uid"
      :text="item.text"
      :viewed="item.viewed"
    ></card-message>
  </div>
</template>
<script>
import CardMessage from './CardMessage.vue'
export default {
  name: 'ChatComments',
  components: { CardMessage },
  data() {
    return {
      otherUserUid: this.$store.state.auth.chatUid,
    }
  },
  computed: {
    uid() {
      if (typeof window !== 'undefined') {
        const user = JSON.parse(localStorage.getItem('user'))

        return user.uid
      }
      return ''
    },
    messages() {
      if (typeof window !== 'undefined') {
        let result = {}
        console.log(this.$store.state.auth.lastMessage)
        const chatUid = this.$store.state.auth.chatUid
        const user = JSON.parse(localStorage.getItem('user'))
        const messages = this.$fire.database.ref(
          `/messages/${user.uid}/${chatUid}`
        )
        messages.on('value', (snapshot) => {
          result = snapshot.val()
        })
        this.$once('hook:beforeDestroy', () => {
          messages.off()
        })
        console.log(result)
        return result
      }
      return {}
    },
  },
}
</script>
<style lang="scss" scoped>
.comments {
  width: 100%;
  height: 88%;
  background-color: #18181f;
  overflow-y: scroll;
}
</style>
