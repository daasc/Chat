<template>
  <div class="comments">
    <card-message
      v-for="(item, index) in messages.messages"
      :key="index"
      :can-show-hour="messages.hour.includes(index)"
      :current-user="item.user === uid"
      :text="item.text"
      :viewed="item.viewed"
      :hour="index"
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
      addHours: [],
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
        const chatUid = this.$store.state.auth.chatUid
        const user = JSON.parse(localStorage.getItem('user'))
        const messages = this.$fire.database.ref(
          `/messages/${user.uid}/${chatUid}`
        )
        const addHour = []
        messages.on('value', (snapshot) => {
          result = snapshot.val()
          const newArray = Object.keys(result)
          for (const key in result) {
            if (
              result[key].user !==
              result[newArray[newArray.indexOf(key) + 1]].user
            ) {
              addHour.push(key)
            }
          }
        })
        this.$once('hook:beforeDestroy', () => {
          messages.off()
        })
        return { messages: result, hour: addHour }
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
