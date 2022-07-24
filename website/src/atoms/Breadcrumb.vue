<template>
  <div class="da-breadcrubms">
    <Breadcrumb :home="home" :model="items" />
  </div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
export default {
  name: "BreadcrumbVue",
  props: {
    home: { type: Object, default: () => {} },
    items: { type: Array, default: () => [] },
  },
  components: {
    Breadcrumb,
  },
};
</script>

<style lang="scss">
.da-breadcrubms {
  .p-breadcrumb {
    background: transparent;
    border: 1px solid transparent;
    padding: 0.25rem;
    font-size: 14px;

    .p-menuitem-link {
      .p-menuitem-text,
      .p-menuitem-icon {
        color: var(--surface-a);
      }
    }

    li.p-breadcrumb-chevron {
      color: var(--red-500);
    }
  }
}
</style>
