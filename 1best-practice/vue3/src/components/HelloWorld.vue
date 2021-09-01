<template>
  <div class="hello">
    <div>
      <input type="text" @input="showTodo" />
      <div>{{ showTxt }}</div>
      <button @click="addTodo">addTodo</button>
    </div>
    <ul v-for="todo in todos" :key="todo.name">
      <li>
        <span>{{ todo.name }}</span>
        <span>{{ todo.todo }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState, mapActions, mapGetters } from "vuex";
@Options({
  props: {
    msg: String,
  },
  data() {
    return {
      showTxt: "",
    };
  },
  computed: mapState({
    todos: (state: any) => state.Todos,
  }),
  methods: {
    ...mapActions({
      actAdd: "addTodo",
    }),
    showTodo(e: any) {
      this.showTxt = e.target.value;
    },
    addTodo(e: any) {
      this.actAdd({
        name: this.showTxt
      });
    },
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
