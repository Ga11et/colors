import { products } from "./products";

export const shopSlice = {
  state: {
    filters: [
      { id: "1", value: false, text: "Новинки", key: "isNew" },
      { id: "2", value: false, text: "Есть в наличии", key: "isHave" },
      { id: "3", value: false, text: "Контрактные", key: "isContract" },
      { id: "4", value: false, text: "Эксклюзивные", key: "isExclusive" },
      { id: "5", value: false, text: "Распродажа", key: "isSale" },
    ],
    isMobileFiltersActive: false,
    sort: { id: "1", ru: "Сначала дорогие", en: "expencive" },
    sortOptions: [
      { id: "1", ru: "Сначала дорогие", en: "expencive" },
      { id: "2", ru: "Сначала недорогие", en: "cheap" },
      { id: "3", ru: "Сначала популярные", en: "popular" },
      { id: "4", ru: "Сначала новые", en: "new" },
    ],
    products: products,
  },
  getters: {
    getFilters(store) {
      return store.filters;
    },
    getProducts(store) {
      return store.products
        .filter((el) => {
          let flag = true;
          for (const item of store.filters) {
            if (item.value && !el[item.key]) flag = false;
          }
          return flag;
        })
        .sort((a, b) => {
          switch (store.sort.en) {
            case "expencive":
              return b.price - a.price;
            case "cheap":
              return a.price - b.price;
            case "popular":
              return b.popular - a.popular;
            case "new":
              return a.isNew ? (b.isNew ? 1 : -1) : 1;
            default:
              break;
          }
        });
    },
    getProductsCount(store) {
      return store.products.length;
    },
    getSortOptions(store) {
      return store.sortOptions;
    },
    getSortOption(store) {
      return store.sort;
    },
    getMobileFiltersActive(store) {
      return store.isMobileFiltersActive;
    },
  },
  mutations: {
    toggleFilter(store, payload) {
      store.filters.forEach((el) =>
        el.id === payload ? (el.value = !el.value) : null
      );
    },
    setSortOption(store, payload) {
      store.sort = payload;
    },
    toggleMobileFilters(store) {
      store.isMobileFiltersActive = !store.isMobileFiltersActive;
    },
  },
  actions: {},
  modules: {},
};
