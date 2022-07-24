<template>
  <div class="p-2 pb-4 h-full">
    <div class="shadow-lg h-full border border-gray-100">
      <div class="mb-3">
        <img
          src="https://img-b.udemycdn.com/course/240x135/2685124_37c5_2.jpg?secure=B3FtsON189Ult8kAC6hX6g%3D%3D%2C1613903338"
          :alt="course.name"
          class="w-full object-cover"
        />
      </div>
      <div class="p-4">
        <h3 class="font-lg font-bold mb-2">
          The Modern Angular Bootcamp [2020]
        </h3>
        <p class="font-light text-sm mb-2">Stephen Grider</p>
        <RatingVue :rating="course.rating"/>
        <p class="font-thin text-sm mb-2">4.7</p>
        <p class="font-bold">₹8,640</p>
      </div>
    </div>
  </div>
</template>

<script>
import RatingVue from '@/atoms/Rating.vue';

export default {
  name: "CourseCard",
  components: {
    RatingVue
  },
  props: {
    course: { type: Object, default: () => {} },
  },
};
</script>
