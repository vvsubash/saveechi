<template>
  <div>
    <button class="p-2 rounded-lg border bg-orange-500" @click="signin">
      Sign In
    </button>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex'

export default {
  data() {
    return {
      token: null
    }
  },
  methods: {
    signin() {
      this.$store.dispatch('signInWithGoogle')
    }
  }
}
</script>
