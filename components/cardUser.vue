<template>
  <div class="list">
    <div class="card">
      <img :src="photo" />
      <span>{{ name }}</span>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: 'CardUser',
  props: {
    photo: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.list {
  padding: 0px 15px;
  cursor: pointer;
  .line {
    height: 1.5px;
    width: 100%;
    background-color: #2c3538;
    margin: 10px;
  }
  .card {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #e3e3e4;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
