import { products } from "./products";

export const shopSlice = {
  state: {
    filters: [
      { id: "1", value: false, text: "Новинки" },
      { id: "2", value: false, text: "Есть в наличии" },
      { id: "3", value: false, text: "Контрактные" },
      { id: "4", value: false, text: "Эксклюзивные" },
      { id: "5", value: false, text: "Распродажа" },
    ],
    products: products,
  },
  getters: {
    getFilters(store) {
      return store.filters;
    },
    getProducts(store) {
      return store.products;
    },
    getProductsCount(store) {
      return store.products.length;
    },
  },
  mutations: {
    toggleFilter(store, payload) {
      store.filters.forEach((el) =>
        el.id === payload ? (el.value = !el.value) : null
      );
    },
  },
  actions: {},
  modules: {},
};
