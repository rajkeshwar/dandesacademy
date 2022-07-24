<template>
  <SvgCommonIcons/>
  <Notification />
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="slide-left">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Notification from "@/molecules/Notification.vue";
import Header from "@/organisms/Header.vue";
import Footer from "@/organisms/Footer.vue";
import SvgCommonIcons from './atoms/SvgCommon.vue';

export default {
  name: "App",
  components: {
    Notification,
    Header,
    Footer,
    SvgCommonIcons
  },
};
</script>
