new Vue({
  el: "#app",
  data: {
    blogItems: [
      {
        image: "./img/article_1.jpg",
        alt: "Kitchan Design",
        description: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tags: "Kitchan",
      },
      {
        image: "./img/article_2.jpg",
        alt: "Living Design",
        description: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        tags: "Bedroom",
      },
      {
        image: "./img/article_3.jpg",
        alt: "Interior Design",
        description: "Interior Design",
        title: "Best For Any Office [&] Business Interior Solution",
        date: "25 December,2022",
        tags: "Building",
      },
      {
        image: "./img/article_4.jpg",
        alt: "Kitchan Design",
        description: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        tags: "Kitchen Planning",
      },
      {
        image: "./img/article_5.jpg",
        alt: "Living Design",
        description: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        tags: "Architecture",
      },
      {
        image: "./img/article_6.jpg",
        alt: "Interior Design",
        description: "Interior Design",
        title: "Best For Any Office [&] Business Interior Solution",
        date: "25 December,2022",
        tags: "Building",
      },
    ],
    filteredArticles: [], 
  },
  methods: {
    filterByTag: function (tag) {
      this.filteredArticles = this.blogItems.filter((article) =>
        article.tags.includes(tag)
      );
    },
  },
});