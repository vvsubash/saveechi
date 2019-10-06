<template>
  <div class="container mx-auto">
    <NavigationMain />
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavigationMain from '~/components/NavigationMain.vue'
export default {
  components: {
    NavigationMain
  }
}
</script>
