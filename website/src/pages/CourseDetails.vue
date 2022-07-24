<template>
  <CourseBlueSection />

  <Container>
    <div class="flex flex-col md:flex-row flex-col-reverse">
      <div class="w-full md:w-2/3">
        <WhatWillYouLearn />

        <div class="w-full">
          <h1 class="text-2xl font-bold mt-8 mb-4">Course content</h1>

          <div class="flex justify-between mb-4">
            <span>10 sections • 162 lectures • 10h 35m total length</span>
            <Button label="Expand all sections" class="p-button-text" />
          </div>
          <Accordion>
              <AccordionTab v-for="heading of accordionHeaders" :key="heading">
                <template #header>
                  <div class="flex justify-between items-center w-full">
                    <span>{{ heading }}</span>
                    <div class="text-sm font-light pl-8 md:pl-0">
                      18 lectures <span> . 1hr 1min</span>
                    </div>
                  </div>
                </template>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                eligendi consequuntur officia aspernatur magni repellat dolores,
                minima earum, laboriosam mollitia vel distinctio aperiam
                dignissimos error. Non vel aspernatur ut vitae!
              </AccordionTab>
            </Accordion>
        </div>
      </div>

      <div class="w-full md:w-1/3">
        <div class="md:pl-4">
          <div class="shadow-lg border border-gray-300 p-4">
            <h3 class="text-2xl font-bold mb-4">₹8,640</h3>
            <Button label="Enroll Now" class="p-button-danger w-full" />
            <div class="w-full">
              <h2 class="text-lg font-bold mt-4">This course includes:</h2>
              <ul class="w-full">
                <li
                  class="w-full"
                  v-for="bullet of courseBulletPoints"
                  :key="bullet.icon"
                >
                  <div class="flex align-center text-gray-500 p-2">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      class="h-4 w-4 mr-2"
                    >
                      <use :xlink:href="`#${bullet.icon}`" />
                    </svg>
                    <span class="text-sm leading-4">{{ bullet.text }}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex justify-center my-4">
              <Button label="Apply Coupons" class="p-button-text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>

  <StudentsFeedback />
</template>

<script>
import Container from "@/atoms/Container.vue";
import BreadcrumbVue from "@/atoms/Breadcrumb.vue";
import RatingVue from "@/atoms/Rating.vue";
import CourseBlueSection from "@/molecules/CourseBlueSection.vue";
import WhatWillYouLearn from "@/molecules/WhatWillYouLearn.vue";
import StudentsFeedback from "@/templates/StudentsFeedback.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Button from "primevue/button";

export default {
  name: "CourseDetailsPage",
  components: {
    Button,
    Container,
    Accordion,
    AccordionTab,
    BreadcrumbVue,
    CourseBlueSection,
    WhatWillYouLearn,
    StudentsFeedback,
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
      accordionHeaders: [
        "Getting Started",
        "Building APIs Using ASP.NET Core",
        "Building Forms with Angular and Bootstrap",
        "Implementing CRUD Operations",
        "Refactoring Towards the Clean Architecture",
        "Populating and Submitting Forms",
        "Filtering, Sorting and Pagination",
        "Uploading Files",
        "Authentication and Authorization",
        "Final Improvements",
      ],
      courseBulletPoints: [
        { icon: "icon-video", text: "10.5 hours on-demand video" },
        { icon: "icon-article", text: "15 articles" },
        {
          icon: "icon-downloadable-resource",
          text: "18 downloadable resources",
        },
        { icon: "icon-lifetime", text: "Full lifetime access" },
        { icon: "icon-mobile", text: "Access on mobile and TV" },
        { icon: "icon-certificate", text: "Certificate of completion" },
      ],
    };
  },
};
</script>
