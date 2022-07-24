<template>
  <Container>
    <GetStarted />

    <Carousel
      :value="banners"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="h-full">
          <div class="">
            <div class="mb-3">
              <img
                :src="slotProps.data"
                :alt="slotProps.data"
                class="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </template>
    </Carousel>

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
import GetStarted from "@/organisms/GetStarted.vue";
import Carousel from "primevue/carousel";
import { products } from "@/utils/constants";
import { responsiveOptions } from "@/utils/common";
import CourseCard from "@/molecules/CourseCard.vue";
import HeadingVue from "@/molecules/HeadingVue.vue";
import slugify from "slugify";

export default {
  name: "HomePage",
  components: {
    Container,
    GetStarted,
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
  computed: {
    banners() {
      return Array(4)
        .fill(null)
        .map((_, i) => `images/dandes-academy-${i + 1}.jpeg`);
    },
  },
  methods: {
    courseDetailsRoute(name) {
      return ["/courses", slugify(name.toLowerCase())].join("/");
    },
  },
};
</script>
