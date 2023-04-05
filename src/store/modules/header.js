export const headerSlice = {
  state: {
    nav: [
      { id: "1", text: "Продукты" },
      { id: "2", text: "Цвета" },
      { id: "3", text: "Вдохновение" },
      { id: "4", text: "Советы" },
      { id: "5", text: "Найти магазин" },
    ],
    phone: "+7 (495) 221-77-69",
  },
  getters: {
    getNav(store) {
      return store.nav;
    },
    getPhone(store) {
      return store.phone;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
