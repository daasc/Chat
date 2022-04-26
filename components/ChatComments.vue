<template>
  <div class="comments">
    <card-message
      v-for="(item, index) in messages.messages"
      :key="index"
      :can-show-hour="messages.hour.includes(index)"
      :current-user="item.user === uid"
      :text="item.text"
      :hour="index"
      :color="item.viewed ? '#53BDEA' : null"
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
      if (typeof window !== 'undefined' && this.$store.state.auth.chatUid) {
        let result = {}
        const chatUid = this.$store.state.auth.chatUid
        const user = JSON.parse(localStorage.getItem('user'))
        const messages = this.$fire.database.ref(
          `/messages/${user.uid}/${chatUid}`
        )
        const addHour = []
        messages.on('value', (snapshot) => {
          result = snapshot.val() ? snapshot.val() : {}
          if (Object.keys(result).length) {
            const newArray = Object.keys(result)
            const lastKey = newArray[newArray.length - 1]
            for (const key in result) {
              if (lastKey !== key) {
                if (
                  result[key].user !==
                  result[newArray[newArray.indexOf(key) + 1]].user
                ) {
                  addHour.push(key)
                }
              }
            }
          }
        })
        this.$once('hook:beforeDestroy', () => {
          messages.off()
        })
        this.updateViewed(result)
        return { messages: result, hour: addHour }
      }
      return {}
    },
  },
  methods: {
    updateViewed(messages) {
      const messagesFiltered = this.messageNotViewed(messages)
      const chatUid = this.$store.state.auth.chatUid
      const user = JSON.parse(localStorage.getItem('user'))
      for (const key in messagesFiltered) {
        const updates = {}
        if (user.uid !== chatUid) {
          updates[`messages/${user.uid}/${chatUid}/${key}`] = {
            user: messagesFiltered[key].user,
            text: messagesFiltered[key].text,
            viewed: true,
          }
          this.$fire.database.ref().update(updates)
        }
      }
    },
    messageNotViewed(messages) {
      const filter = {}
      if (Object.keys(messages).length) {
        for (const key in messages) {
          if (!messages[key].viewed) {
            filter[key] = { ...messages[key] }
          }
        }
      }
      return filter
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
