<template>
  <div>
    <signInButton />
    <br />
    <button @click="signoutog">SignOut</button>
    <p v-if="this.$store.state.user != null">
      {{ this.$store.state.user }}
    </p>
    <nuxt-link to="/about"
      >About (internal link that belongs to the Nuxt App)</nuxt-link
    >
  </div>
</template>

<script>
// import firebase from 'firebase'
import signInButton from '~/components/signin-button'
// eslint-disable-next-line
import db from '~/plugins/firestore.js'
export default {
  components: {
    signInButton
  },

  methods: {
    signoutog() {
      this.$store.dispatch('SignOut')
      // firebase
      //   .auth()
      //   .signOut()
      //   .then(() => {
      //     // eslint-disable-next-line
      //     console.log('signed out')
      //   })
    }
  }
}
</script>
