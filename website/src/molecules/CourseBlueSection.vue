<template>
  <div class="bg-gradient-to-r from-black to-blue-700 py-4">
    <Container>
      <BreadcrumbVue :home="home" :items="items" />
      <div class="flex">
        <div class="text-white flex-1">
          <h1 class="text-2xl font-bold py-4">
            Build a Real-world App with ASP.NET Core and Angular 2 (4+)
          </h1>
          <p class="font-light flex text-gray-100 text-lg">
            Build a full-stack web app with ASP.NET Core, Entity Framework Core
            and Angular 2 (Angular 4+)
          </p>
          <RatingVue :rating="course.rating" />
          <div class="font-light text-sm mb-2 mt-4">
            Created by<a
              class="btn-link text-green-100 ml-1"
              href="/c3website/about"
              ><span>Srinivas Dande</span></a
            >
          </div>
          <div class="flex text-sm">
            <div class="flex items-center mr-2">
              <i class="pi pi-exclamation-circle mr-2"></i>
              <span>Last updated 4/2018</span>
            </div>
            <div class="flex items-center mr-2">
              <i class="pi pi-globe mr-2"></i>
              <span>English</span>
            </div>
            <div class="flex items-center mr-2">
              <i class="pi pi-calendar mr-2"></i>
              <span>Closing on 12-02-2021</span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3">
          <div class="flex justify-center">
            <div class="inline text-center pt-8">
              <img
                src="https://rajkeshwar.github.io/c3website/static/srinivas-dande-1b1bc55f8ea45283af6384fc5ff891e5.png"
                alt="Srinivas Dande"
                class="object-cover rounded-full h-24 w-24"
              /><a class="btn-link text-green-100 ml-1" href="/c3website/about">
                <span class="text-center">Srinivas Dande</span>
              </a>
              <div
                class="flex items-center justify-center mr-2 text-sm text-white"
              >
                <i class="pi pi-briefcase mr-2"></i>
                <span class="text-center">79 Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/atoms/Container.vue";
import BreadcrumbVue from "@/atoms/Breadcrumb.vue";
import RatingVue from "@/atoms/Rating.vue";

export default {
  name: "CourseBlueSection",
  components: {
    Container,
    BreadcrumbVue,
    RatingVue,
  },
  data() {
    return {
      home: { icon: "pi pi-home", to: "/" },
      course: { rating: 3.5 },
      items: [
        { label: "Frontend courses" },
        { label: "Web Development" },
        { label: "React Js" },
      ],
    };
  },
};
</script>

<style></style>
