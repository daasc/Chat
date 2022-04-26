<template>
  <div>
    <div v-if="currentUser" class="card__message">
      <span class="message">
        <span>{{ text }}</span>
        <svg
          id="msg-dblcheck-ack"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          x="2063"
          y="2076"
          class="viewed"
        >
          <path
            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
            :fill="color"
          ></path>
        </svg>
      </span>
    </div>

    <div v-else class="card__message__other_person">
      <span class="message">
        <span>{{ text }}</span>
        <svg
          id="msg-dblcheck-ack"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          x="2063"
          y="2076"
          class="viewed"
        >
          <path
            d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"
            :fill="color"
          ></path>
        </svg>
      </span>
    </div>

    <div
      v-if="canShowHour"
      class="hour"
      :class="{ right: currentUser, left: !currentUser }"
    >
      {{ formatHour }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardMessage',
  props: {
    canShowHour: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    viewed: {
      type: Boolean,
      default: false,
    },
    hour: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#d5d5d7',
    },
    currentUser: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formatHour() {
      const date = new Date(parseInt(this.hour))
      const day = `0${date.getDate()}`.slice(-2)
      const month = `0${date.getMonth() + 1}`.slice(-2)
      return `${date.getFullYear()}/${month}/${day} - ${date.getHours()}:${date.getMinutes()}`
    },
  },
}
</script>
<style lang="scss" scoped>
.card__message {
  display: flex;
  justify-content: flex-end;
  .message {
    border-radius: 15px 15px 0px 15px;
    padding: 8px;
    margin: 3px;
    background: #fdf5d3;
    color: #616059;
    display: flex;
    gap: 4px;
    .viewed {
      align-self: flex-end;
    }
  }
}
.hour {
  display: flex;
  font-size: 14px;
  color: #707176;
  margin: 3px;
  &.right {
    justify-content: flex-end;
  }
  &.left {
    justify-content: flex-start;
  }
}
.card__message__other_person {
  display: flex;

  .message {
    border-radius: 15px 15px 15px 0px;
    padding: 5px;
    margin: 3px;
    background: #1f1f29;
    color: #707176;
    display: flex;
    flex-direction: row-reverse;
    padding: 8px;
    gap: 4px;
    .viewed {
      align-self: flex-end;
    }
  }
}
</style>
