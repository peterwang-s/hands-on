<template>
<div class="a-com">
    <h3>{{title}}</h3>
    <label for="">ACount:</label><div>{{ACount}}</div>
    <label for="">BCount:</label><div>{{BCount}}</div>
    <label for="">CCount:</label><div>{{CCount}}</div>
    <div><button @click="usePropsAddA">usePropsAddA</button></div>
    <div><button @click="useRefsAddB">useRefsAddB</button></div>
    <div><button @click="useChildAddB">useChildAddB</button></div>
    <children1 :ACount = "ACount"
    :aCountAddClickHandle = "usePropsAddA" @emitAddBClick = "BCountAddInA" ref="bCom"></children1>
    <children2 :propsCCount = "CCount" ></children2>
</div>
</template>

<script>
import children1 from '@/components/propsemit/children1.vue';
import children2 from '@/components/propsemit/children2.vue';

export default {
  name: 'Acom',
  components: { children1, children2 },
  props: {
    title: {
      type: String,
      default: 'Acom',
    },
  },
  data() {
    return {
      ACount: 0,
      BCount: 0,
      CCount: 0,
    };
  },
  methods: {
    usePropsAddA() {
      this.ACount += 1;
    },
    BCountAddInA(value) {
      this.BCount = value;
    },
    useRefsAddB() {
      this.$refs.bCom.privateChildAddB();
    },
    useChildAddB() {
      console.log(this.$children);
      this.$children[0].privateChildAddB();
    },
    BcontactCClickHandle() {

    },
  },
  mounted() {
    this.$Event.$on('c2b', (data) => {
      debugger;
      this.CCount = data;
    });
    this.$Event.$on('BCountAddAction', (value) => {
      this.BCount = value;
    });
  },
};
</script>
<style lang="stylus">
.a-com
  background #9dff9c
</style>
