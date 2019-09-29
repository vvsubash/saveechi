<template>
  <div>
    <signInButton />
    <br />
    <button @click="signoutog">SignOut</button>
    <p v-if="this.$store.state.user != null">
      {{ this.$store.state.user }}
      <nuxt-link :to="'/' + this.$store.state.user">LinkTitle</nuxt-link>
      <!-- {{ firebase.auth().currentUser.uid }} -->
    </p>

    <nuxt-link to="/about">About</nuxt-link>
    {{ documents }}
  </div>
</template>

<script>
import db from '~/plugins/firestore.js'
import signInButton from '~/components/signin-button'
export default {
  components: {
    signInButton
  },
  data() {
    return {
      documents: []
    }
  },

  firestore() {
    const uid = this.$store.state.user

    return {
      documents: db.collection(`users/${uid}/cows`)
    }
  },
  methods: {
    signoutog() {
      this.$store.dispatch('SignOut')
    }
  }
}
</script>
