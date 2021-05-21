<template>
<div class="c-com">
    <h3>{{title}}</h3>
    <label for="">CCount:</label><div>{{CCount}}</div>
    <div><label>与B通信</label><button @click="CCountAddClickHandle">C按钮（c+1，传递给B）</button></div>
    </div>
</template>

<script>
export default {
  name: 'Ccom',
  props: {
    title: {
      type: String,
      default: 'Ccom',
    },
  },
  data() {
    return {
      CCount: 0,
    };
  },
  methods: {
    CCountAddClickHandle() {
      this.$emit('c2b', this.CCount += 1);
    },
    BcontactCClickHandle() {

    },
  },
};
</script>
<style lang="stylus">
.c-com
  background #fa9cff
</style>
