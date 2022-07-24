<template>
  <section class="bg-gray-100 py-12 mt-8">
    <Container>
      <div class="flex flex-col items-center mb-8">
        <h1 class="text-2xl font-bold mb-2">Happy Students</h1>
        <p class="text-gray-600 font-thin">
          What Our Students Say About DandesAcademy
        </p>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div
          class="flex items-center relative"
          v-for="tmonial of [1, 2, 3]"
          :key="tmonial"
        >
          <img
            class="h-20 w-20 rounded-full mr-4"
            src="https://templatevisual.com/demo/learnplus/upload/student_01.png"
            alt=""
          />
          <div class="flex flex-col">
            <p class="text-sm text-gray-400 mb-4">
              Lorem Ipsum is simply dummy text of the printing and industry.
            </p>
            <h4 class="text-normal font-semibold">
              John DOE
              <small class="text-sm text-gray-400 ml-2"
                ><a href="#">envato.com</a></small
              >
            </h4>
          </div>

          <div class="absolute bottom-0 right-8 h-12 w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
          >
            <path fill="#dee2e6"
              d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"
            />
          </svg>
          </div>
        </div>
      </div>

      <p class="my-4 text-gray-500 italic p-16 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div class="flex justify-center">
        <Button
          label="Join Us Today"
          class="p-button-danger"
          icon="pi pi-sign-out"
          iconPos="left"
        />
        <span class="w-4" />
        <Button
          label="Download PDF"
          class="p-button-primary"
          icon="pi download"
          iconPos="left"
        />
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "@/atoms/Container.vue";
import Button from "primevue/button";

export default {
  name: "StudentsFeedback",
  components: {
    Button,
    Container,
  },
};
</script>

