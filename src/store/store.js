import { createStore } from "vuex";
import { headerSlice } from "./modules/header";
import { basketSlice } from "./modules/basket";
import { sliderSlice } from "./modules/slider";
import { shopSlice } from "./modules/shop";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { headerSlice, basketSlice, sliderSlice, shopSlice },
});
