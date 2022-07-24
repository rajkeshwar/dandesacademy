<template>
  <div class="flex items-center mb-2">
    <span class="text-sm pr-2" v-if="count">{{ rating }}</span>

    <div class="h-5 w-24 h-5">
      <svg
        aria-hidden="true"
        width="100%"
        height="100%"
        viewBox="0 0 70 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="star-rating-mask-95218094190038"
          data-purpose="star-rating-mask"
        >
          <rect x="0" y="0" :width="starValue" height="100%" fill="white"></rect>
        </mask>
        <g fill="#eb8a2f" mask="url(#star-rating-mask-95218094190038)">
          <use
            v-for="star of [0, 1, 2, 3, 4]"
            :key="star"
            xlink:href="#icon-rating-star"
            width="14"
            height="14"
            :x="star * 14"
          ></use>
        </g>
        <g fill="transparent" stroke="#eb8a2f" stroke-width="2">
          <use
            v-for="star of [0, 1, 2, 3, 4]"
            :key="star"
            xlink:href="#icon-rating-star"
            width="12"
            height="12"
            :x="star * 14 + 1"
            y="1"
          ></use>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingVue",
  props: {
    rating: { type: Number, default: 0 },
    count: { type: Boolean, default: false },
    size: { type: Number, default: 0 },
  },
  mounted() {
    console.log('Rating value ', this.rating)
  },
  computed: {
    value() {
      const [intPart, decimalPart] = String(this.rating)
        .split(/\./)
        .map((t) => Number(t));
      return {
        intPart: Array(intPart || 0).fill(null),
        decimalPart: Array(5 - decimalPart).fill(null),
      };
    },
    starValue() {
      return `${(this.rating / 5) * 100}%`;
    }
  },
  methods: {},
};
</script>

<style></style>
