<template>
<div class="b-com">
    <h3>{{title}}</h3>
    <label for="">ACount:</label><div>{{ACount}}</div>
    <label for="">BCount:</label><div>{{BCount}}</div>
    <label for="">CCount:</label><div>{{CCount}}</div>
    <div><button
    @click="useEmitAddBClickHandle">useEmitAddBClickHandle</button></div>
    <div><button @click="useParentAddA">useParentAddA</button></div>
    <div><button @click="privateActionAddB">privateActionAddB</button></div>
    <div><button @click="aCountAddClickHandle">aCountAddClickHandle</button></div>
    <div><label>与C通信</label><button>让C加一</button></div>
    </div>
</template>

<script>

export default {
  name: 'Bcom',
  props: {
    title: {
      type: String,
      default: 'Bcom',
    },
    aCountAddClickHandle: {
      type: Function,
      //   type: String,
      default: () => {},
    },
    ACount: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      BCount: 0,
      CCount: 0,
    };
  },
  methods: {
    useEmitAddBClickHandle() {
      this.$emit('emitAddBClick', this.BCount += 1);
    },
    useParentAddA() {
      this.$parent.usePropsAddA();
    },
    privateChildAddB() {
      this.$emit('emitAddBClick', this.BCount += 1);
    },
    privateActionAddB() {
      this.$Event.$emit('BCountAddAction', this.BCount += 1);
    },
    BcontactCClickHandle() {

    },
  },
  mounted() {
    this.$on('c2b', (data) => {
      debugger;
      this.CCount = data;
    });
    this.$on('a2b', () => {
      this.BCount += 1;
    });
  },
};
</script>
<style lang="stylus">
.b-com
  background #9ce2ff
</style>
