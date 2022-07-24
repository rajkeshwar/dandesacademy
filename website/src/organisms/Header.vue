<template>
  <div class="bg-white shadow-md">
    <Container>
      <div class="flex justify-between items-center">
        <h1 class="text-black text-3xl font-bold text-red-600">
          DandesAcademy
        </h1>

        <div class="header-menu">
          <TabMenu :model="items" />
        </div>
        <span class="text-black"
          >Tel:
          <a href="tel:+9177950 99 999">+91 77950 99 999</a>
        </span>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "@/atoms/Container.vue";
import TabMenu from "primevue/tabmenu";

export default {
  name: "HeaderVue",
  components: {
    Container,
    TabMenu,
  },
  data() {
    return {
      items: [
        { label: "Home", to: "/" },
        {
          label: "Courses",
          to: "/courses",
        },
        { label: "About Us", to: "/about-us" },
        {
          label: "Contact Us",
          to: "/contact-us",
        },
        { label: "LMS", to: "/lms" },
      ],
    };
  },
};
</script>
<style lang="scss">
.header-menu {
  margin-bottom: -14px;
  background: transparent;
  .p-menu-nav {
    background: transparent;
    .p-tabmenuitem:not(.p-highlight) .p-menuitem-link {
      border: solid transparent;
      border-color: transparent;
    }
  }
}
</style>
