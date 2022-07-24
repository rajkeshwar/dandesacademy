<template>
  <div class="bg-gray-100 mb-8">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">Ready to dive in?</span
        ><span class="block text-indigo-600 text-2xl font-bold"
          >Get access to CourseCube's 100+ courses.</span
        >
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <Button label="Get started" class="p-button-raised p-button-primary" />
        </div>
        <div class="ml-3 inline-flex bg-white">
          <Button label="Learn more" class="p-button-raised p-button-text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: "GetStarted",
  components: {
    Button
  }
};
</script>
