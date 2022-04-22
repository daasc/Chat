<template>
  <div class="comments">
    <card-message
      v-for="(item, index) in messages"
      :key="index"
      :current-user="false"
      :text="item.message"
      :viewed="true"
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
      messages: {
        user: {
          message: 'ola bom dia',
        },
        other: {
          message: 'ola bom dia',
        },
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.comments {
  width: 100%;
  height: 88%;
  background-color: #18181f;
}
</style>
