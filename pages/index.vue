<template>
  <div>
    <signInButton />
    <br />
    <button @click="signoutog">SignOut</button>
    <p v-if="this.$store.state.user != null">
      {{ this.$store.state.user }}
      <!-- {{ firebase.auth().currentUser.uid }} -->
    </p>
    <nuxt-link to="/about"
      >About (internal link that belongs to the Nuxt App)</nuxt-link
    >
    {{ documents }}
  </div>
</template>

<script>
import { db } from '~/plugins/firestore.js'
// eslint-disable-next-line
import firebase from 'firebase'
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

  firestore: {
    documents: db.collection('users')
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
