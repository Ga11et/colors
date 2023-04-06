import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

export const basketSlice = {
  state: {
    products: [
      {
        id: "1",
        image: product1,
        name: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        isNew: true,
        isHave: false,
        isContract: true,
        isExclusive: true,
        isSale: false,
        popular: 50,
        count: 1,
      },
      {
        id: "2",
        image: product2,
        name: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        isNew: true,
        isHave: true,
        isContract: false,
        isExclusive: true,
        isSale: false,
        popular: 55,
        count: 2,
      },
      {
        id: "3",
        image: product3,
        name: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        isNew: false,
        isHave: true,
        isContract: true,
        isExclusive: false,
        isSale: true,
        popular: 42,
        count: 0,
      },
    ],
    isActive: false,
  },
  getters: {
    getBasketCount(store) {
      return store.products.reduce((acc, next) => acc + next.count, 0);
    },
    getBasketProducts(store) {
      return store.products;
    },
    getBasketActive(store) {
      return store.isActive;
    },
    getTotalCost(store) {
      return store.products.reduce(
        (acc, next) => acc + next.price * next.count,
        0
      );
    },
  },
  mutations: {
    setBasketCount(store, payload) {
      store.count = payload;
    },
    toggleBasketActive(store) {
      store.isActive = !store.isActive;
    },
    addNewBasketProduct(store, payload) {
      store.pruducts.push(payload);
    },
    deleteBasketProduct(store, payload) {
      store.pruducts.filter((el) => el.id === payload.id);
    },
    deleteAllBasketProducts(store) {
      store.products = [];
    },
    increaseBasketProductCount(store, payload) {
      const product = store.products.find((el) => el.id === payload.id);
      if (product) product.count += 1;
    },
    decreaseBasketProductCount(store, payload) {
      const product = store.products.find((el) => el.id === payload.id);
      if (product && product.count !== 0) product.count -= 1;
    },
    repeatBasketProduct(store, payload) {
      const product = store.products.find((el) => el.id === payload.id);
      if (product) product.count = 1;
    },
    deleteBasketProduct(store, payload) {
      const product = store.products.find((el) => el.id === payload.id);
      if (product) product.count = 0;
    },
  },
  actions: {},
  modules: {},
};
