<template>
  <h1
    class="ml-12 pl-1 text-3xl font-extrabold tracking-tight text-gray-900 my-4"
  >
    {{text}}
  </h1>
</template>

<script>
export default {
  name: "HeadingVue",
  props: {
    text: { type: String, default: "" },
  },
};
</script>
