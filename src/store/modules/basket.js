export const basketSlice = {
  state: {
    count: 0,
  },
  getters: {
    getBasketCount(store) {
      return store.count;
    },
  },
  mutations: {
    setBasketCount(store, payload) {
      store.count = payload;
    },
  },
  actions: {},
  modules: {},
};
