<template>
  <Container>
    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #header>
        <HeadingVue text="Frontend Courses" />
      </template>
      <template #item="{ data }">
        <router-link :to="courseDetailsRoute(data.name)">
          <CourseCard :course="data" />
        </router-link>
      </template>
    </Carousel>

    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #header>
        <HeadingVue text="Backend Courses" />
      </template>
      <template #item="{ data }">
        <router-link :to="courseDetailsRoute(data.name)">
          <CourseCard :course="data" />
        </router-link>
      </template>
    </Carousel>

    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
    >
      <template #header>
        <HeadingVue text="DevOps Courses" />
      </template>
      <template #item="{ data }">
        <router-link :to="courseDetailsRoute(data.name)">
          <CourseCard :course="data" />
        </router-link>
      </template>
    </Carousel>
  </Container>
</template>

<script>
import Container from "@/atoms/Container.vue";
import Carousel from "primevue/carousel";
import { products } from "@/utils/constants";
import { responsiveOptions } from "@/utils/common";
import slugify from "slugify";
import HeadingVue from "@/molecules/HeadingVue.vue";
import CourseCard from "@/molecules/CourseCard.vue";

export default {
  name: "CoursesPage",
  components: {
    Container,
    Carousel,
    HeadingVue,
    CourseCard,
  },
  data() {
    return {
      products,
      responsiveOptions,
    };
  },
  methods: {
    courseDetailsRoute(name) {
      return ["/courses", slugify(name.toLowerCase())].join("/");
    },
  },
};
</script>
