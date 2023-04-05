import { createStore } from "vuex";
import { headerSlice } from "./modules/header";
import { basketSlice } from "./modules/basket";
import { sliderSlice } from "./modules/slider";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { headerSlice, basketSlice, sliderSlice },
});
