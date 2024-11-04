<template>
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2420_559)">
      <path
        d="M10.9286 1.14285H7.07142C6.36135 1.14285 5.78571 1.71849 5.78571 2.42857V3.07142C5.78571 3.7815 6.36135 4.35714 7.07142 4.35714H10.9286C11.6386 4.35714 12.2143 3.7815 12.2143 3.07142V2.42857C12.2143 1.71849 11.6386 1.14285 10.9286 1.14285Z"
        :stroke="color"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5357 2.42857H14.4643C14.8053 2.42857 15.1323 2.56404 15.3734 2.80515C15.6145 3.04627 15.75 3.37329 15.75 3.71429V16.5714C15.75 16.9124 15.6145 17.2395 15.3734 17.4806C15.1323 17.7216 14.8053 17.8571 14.4643 17.8571H3.53571C3.19472 17.8571 2.8677 17.7216 2.62657 17.4806C2.38546 17.2395 2.25 16.9124 2.25 16.5714V3.71429C2.25 3.37329 2.38546 3.04627 2.62657 2.80515C2.8677 2.56404 3.19472 2.42857 3.53571 2.42857H5.46429"
        :stroke="color"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.78571 10.7857H12.2143"
        :stroke="color"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.78571 14H12.2143"
        :stroke="color"
        stroke-width="1.28571"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2420_559">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: true,
  },
})
</script>
