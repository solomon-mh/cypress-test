import { createStore } from "vuex";

export interface State {
  count: number;
}

const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
  },
  actions: {
    increment({ commit }: { commit: Function }) {
      commit("increment");
    },
  },
  getters: {
    doubleCount(state: State): number {
      return state.count * 2;
    },
  },
});

export default store;
