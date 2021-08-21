import { Commit, createStore, Dispatch } from "vuex";

interface Todo {
  name: string;
}

interface Todos {
  Todos: Todo[];
}

export default createStore({
  state: {
    Todos: [
      {
        name: "study"
      },
    ],
  },
  mutations: {
    addTodo(state: Todos, payload: { message1: Todo; message2: string }) {
      console.log("payload:", payload);
      state.Todos.push(payload.message1);
    },
  },
  actions: {
    addTodo(context: { commit: Commit; dispatch: Dispatch }, params: Todo) {
      return new Promise((resolve: (value: unknown) => void, reject: (value: unknown) => void) => {
        context.commit("addTodo", {
          message1: { name: params.name },
        });
        context.dispatch("sayHello", { message2: "action addtodo" });
        resolve(1);
      });
    },
    sayHello(
      context: { commit: Commit; dispatch: Dispatch },
      payload: { message2: string }
    ) {
      console.log("sayHello:", payload.message2);
    },
  },
  getters: {
    todos: (state: Todos) => state.Todos,
  },
  modules: {},
});
