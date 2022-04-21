<template>
  <div class="search">
    <input
      id=""
      v-model="term"
      type="search"
      name=""
      placeholder="search user"
      @keyup="doSearch()"
    />
  </div>
</template>
<script>
export default {
  name: 'SearchUser',
  data() {
    return {
      term: '',
    }
  },
  methods: {
    doSearch() {
      this.$emit('doSearch', { term: this.term })
    },
  },
}
</script>
<style lang="scss" scoped>
.search {
  input[type='search'] {
    background-color: #0d1117;
    border: 1px solid #2c3538;
    padding: 10px;
    width: 90%;
    margin: 15px;
    color: #e3e3e4;
  }
}
</style>
