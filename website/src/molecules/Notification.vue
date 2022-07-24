<template>
  <div class="bg-yellow-400">
    <Container>
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-indigo-800">
            <HornSvg />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden">We announce a brand new course</span
            ><span class="hidden md:inline"
              >New student deal | We're excited to announce a brand new
              course.</span
            >
          </p>
        </div>
        <div
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        >
          <Button
            label="View more"
            class="p-button-raised p-button-rounded p-button-info"
          />
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <Button
            icon="pi pi-times"
            class="p-button-rounded p-button-text p-button-info"
          />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Button from "primevue/button";
import Container from "@/atoms/Container";
import HornSvg from "@/atoms/HornSvg.vue";

export default {
  name: "NotificationVue",
  components: {
    Button,
    HornSvg,
    Container,
  },
};
</script>
