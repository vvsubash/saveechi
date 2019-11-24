<template>
  <div>
    <hero-section />
    <section class="font-sans container m-auto text-center py-8">
      <label
        for="tagline"
        class="uppercase tracking-wide font-bold text-gray-700"
        >Various Aspects</label
      >
      <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">
        Those are important in Vanue Management
      </h1>
      <hr class="border-b w-8 m-auto my-6" />
      <div class="flex flex-wrap justify-between items-start">
        <div
          class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4"
        >
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
          <h2 class="my-4 font-medium">Cras ornare tristique elit.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis.
          </p>
        </div>
        <div
          class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4"
        >
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
          <h2 class="my-4 font-medium">Vivamus vestibulum ntulla nec ante.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4"
        >
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
          <h2 class="my-4 font-medium">Praesent placerat risus quis eros.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.
          </p>
        </div>
        <div
          class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4"
        >
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
          <h2 class="my-4 font-medium">Fusce pellentesque suscipit nibh.</h2>
          <p class="leading-normal mb-4 text-gray-700">
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
            dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
        </div>
      </div>
    </section>
    <pricing-table />
    <section class="bg-white py-4 font-sans">
      <div
        class="container max-w-xl m-auto flex flex-wrap md:flex-no-wrap items-center justify-between"
      >
        <div class="flex w-full justify-start justify-center md:justify-start">
          <div class="flex flex-col border-r px-8 items-center">
            <h1 class="">34%</h1>
            <span
              class="text-xs block uppercase text-gray-900 tracking-wide mt-1"
              >clickrate</span
            >
          </div>
          <div class="flex flex-col px-8 border-r items-center">
            <h1 class="">465</h1>
            <span
              class="text-xs block uppercase text-gray-900 tracking-wide mt-1"
              >pageviews</span
            >
          </div>
          <div class="flex flex-col px-8 items-center">
            <h1 class="">65%</h1>
            <span
              class="text-xs block uppercase text-gray-900 tracking-wide mt-1"
              >influence</span
            >
          </div>
        </div>
        <button
          class="w-full md:w-32 bg-black hover:bg-black text-white py-2 px-4 mt-6 md:mt-0"
          type="button"
        >
          Read More
        </button>
      </div>
    </section>
    <section class="font-sans text-center py-8 px-4 lg:px-0 bg-gray-300">
      <div
        class="container flex flex-col sm:flex-row bg-white max-w-xl m-auto shadow"
      >
        <div
          class="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center"
        >
          <h2 class="capitalize font-medium">Ready to get started?</h2>
          <p class="text-gray-700 mt-2 mb-6">
            But I must explain to you how all this mistaken idea of denouncing
          </p>
        </div>
        <div
          class="w-full sm:w-1/4 flex justify-start sm:justify-center items-center pl-6 pb-6 sm:pl-0 sm:pb-0"
        >
          <button
            class=" bg-black hover:bg-gray-900 text-white hover:text-white py-3 px-6 uppercase text-xs tracking-wide"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
    <main-footer />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import MainFooter from '~/components/MainFooter.vue'
import PricingTable from '~/components/PricingTable.vue'
export default {
  components: {
    HeroSection,
    MainFooter,
    PricingTable
  }
}
</script>
