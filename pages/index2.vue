<template>
  <div>
    <signInButton />
    <br />
    <button @click="signoutog">SignOut</button>
    <p v-if="this.$store.state.user != null">
      {{ this.$store.state.user }}
      <nuxt-link :to="'/' + this.$store.state.user">LinkTitle</nuxt-link>
    </p>
    <nuxt-link to="/about">About</nuxt-link>
    {{ this.$store.state.animals }}
  </div>
</template>

<script>
import signInButton from '~/components/signin-button'
export default {
  components: {
    signInButton
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('initStore')
  },
  methods: {
    signoutog() {
      this.$store.dispatch('SignOut')
    }
  }
}
</script>
