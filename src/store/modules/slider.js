import backImage from "../assets/slideImage.jpg";

export const sliderSlice = {
  state: {
    slides: [
      {
        id: "1",
        image: backImage,
        heading: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        id: "2",
        image: backImage,
        heading: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        id: "3",
        image: backImage,
        heading: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        id: "4",
        image: backImage,
        heading: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        id: "5",
        image: backImage,
        heading: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
      {
        id: "6",
        image: backImage,
        heading: "Краски",
        description:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
      },
    ],
  },
  getters: {
    getSlides(store) {
      return store.slides;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
