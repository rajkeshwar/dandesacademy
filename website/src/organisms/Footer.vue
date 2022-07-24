<template>
  <footer class="w-full bg-gray-700 text-white" ref="footer">
    <div class="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-2/3 pb-4">
          <div class="w-full">
            <ul class="text-sm grid grid-cols-1 md:grid-cols-3 gap-1">
              <li class="font-thin">
                <a href="coursecube-for-business">CourseCube for Business</a>
              </li>
              <li class="font-thin">
                <a href="teach-on-coursecube">Teach on CourseCube</a>
              </li>
              <li class="font-thin"><a href="about-us">About us</a></li>
              <li class="font-thin"><a href="contact-us">Contact us</a></li>
              <li class="font-thin"><a href="careers">Careers</a></li>
              <li class="font-thin"><a href="blog">Blog</a></li>
              <li class="font-thin">
                <a href="help-and-support">Help and Support</a>
              </li>
              <li class="font-thin"><a href="affiliate">Affiliate</a></li>
              <li class="font-thin"><a href="terms">Terms</a></li>
              <li class="font-thin">
                <a href="privacy-policy">Privacy policy</a>
              </li>
              <li class="font-thin">
                <a href="cookie-settings">Cookie settings</a>
              </li>
              <li class="font-thin"><a href="sitemap">Sitemap</a></li>
              <li class="font-thin">
                <a href="featured-courses">Featured courses</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:w-1/3 text-sm flex flex-col">
          <div class="flex-1">
            <div class="text-sm mb-4 flex justify-start md:justify-end">
              <span
                ><p>CourseCube Private Limited</p>
                <div class="font-extralight py-2">
                  <p>#57, 1st Floor, 17th Cross, 7th Main</p>
                  <p>NS Palya, BTM Layout-2nd Stage</p>
                  <p>Bengaluru - 560076</p>
                </div>
                <div class="font-light">
                  <p>Phone :- 77950 99 999</p>
                  <p>Email :- training@coursecube.com</p>
                </div></span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-4 mt-4"
      >
        <div class="flex">
          <span class="text-red-500 text-lg font-semibold">DandesAcademy</span>
        </div>
        <p class="font-extralight text-xs">
          © 2022 DandesAcademy Private Limited. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
  data() {
    return {
      footer: null,
    };
  },
  mounted() {
    [...this.$refs.footer.querySelectorAll("a")].forEach((anchor) => {
      anchor.addEventListener("click", (event) => event.preventDefault());
    });
  },
};
</script>

<style></style>
