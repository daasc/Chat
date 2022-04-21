<template>
  <div class="send">
    <div class="inputs">
      <input v-model="message" type="text" class="send__input" />
      <img v-if="showSend" src="@/assets/img/send.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'SendComments',
  data() {
    return {
      message: '',
    }
  },
  computed: {
    showSend() {
      return !!this.message
    },
  },
}
</script>
<style lang="scss" scoped>
.send {
  background-color: #1f1f29;
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .inputs {
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      cursor: pointer;
    }
    .send__input {
      background-color: #0d1117;
      padding: 20px;
      width: 75%;
      color: #e3e3e4;
      border: none;
      border-radius: 15px;
    }
  }
}
</style>
