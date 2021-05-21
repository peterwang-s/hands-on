<template>
  <div class="home">
    <parent></parent>
  </div>
</template>

<script>
// @ is an alias to /src
import parent from '@/components/propsemit/parent.vue';

export default {
  name: 'ComponentContact',
  components: {
    parent,
  },
};
</script>
