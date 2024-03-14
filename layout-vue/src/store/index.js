import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    blogItems: [
      {
        image: require("@/assets/article_1.jpg"),
        alt: "Kitchan Design",
        description: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tags: "Kitchan",
      },
      {
        image: require("@/assets/article_2.jpg"),
        alt: "Living Design",
        description: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        tags: "Bedroom",
      },
      {
        image: require("@/assets/article_3.jpg"),
        alt: "Interior Design",
        description: "Interior Design",
        title: "Best For Any Office [&] Business Interior Solution",
        date: "25 December,2022",
        tags: "Building",
      },
      {
        image: require("@/assets/article_4.jpg"),
        alt: "Kitchan Design",
        description: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tags: "Kitchen Planning",
      },
      {
        image: require("@/assets/article_5.jpg"),
        alt: "Living Design",
        description: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        tags: "Architecture",
      },
      {
        image: require("@/assets/article_6.jpg"),
        alt: "Interior Design",
        description: "Interior Design",
        title: "Best For Any Office [&] Business Interior Solution",
        date: "25 December,2022",
        tags: "Building",
      },
    ],
    filteredArticles: [],
    projects: [
      {
        image: require("@/assets/Project_1.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/Project_2.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/Project_3.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/Project_4.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/Project_5.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/Project_6.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/Project_7.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/Project_8.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bed Room",
      },
      {
        image: require("@/assets/bathroom_1.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/bathroom_2.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/bathroom_3.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/bathroom_4.jpeg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/bathroom_5.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/bathroom_6.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/bathroom_7.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/bathroom_8.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Bathroom",
      },
      {
        image: require("@/assets/kitchen_1.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/kitchen_2.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/kitchen_3.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/kitchen_4.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/kitchen_5.png"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/kitchen_6.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/kitchen_7.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/kitchen_8.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Kitchen",
      },
      {
        image: require("@/assets/LivingArea_1.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
      {
        image: require("@/assets/LivingArea_2.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
      {
        image: require("@/assets/LivingArea_3.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
      {
        image: require("@/assets/LivingArea_4.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
      {
        image: require("@/assets/LivingArea_5.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
      {
        image: require("@/assets/LivingArea_6.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
      {
        image: require("@/assets/LivingArea_7.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
      {
        image: require("@/assets/LivingArea_8.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        select: "Living Area",
      },
    ],
    selectedProjects: [],
    currentSlide: 0,
    images: [
      require("@/assets/spalnya_1.jpg"),
      require("@/assets/spalnya_2.jpg"),
      require("@/assets/spalnya_3.jpg"),
    ],
  },
  mutations: {
    FILTER_BY_TAG(state, tag) {
      state.filteredArticles = state.blogItems.filter((article) =>
        article.tags.includes(tag)
      );
    },
    SHOW_PROJECTS(state, select) {
      state.selectedProjects = state.projects.filter(
        (project) => project.select === select
      );
    },
    CHANGE_SLIDE(state, index) {
      state.currentSlide = index;
    },
    NEXT_SLIDE(state) {
      state.currentSlide = (state.currentSlide + 1) % state.images.length;
    },
  },
  actions: {
    loadProjects({ commit }, select) {
      commit("SHOW_PROJECTS", select);
    },
  },
  getters: {},
  modules: {
    // модули Vuex для разделения хранилища на под-хранилища
  },
});
