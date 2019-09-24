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
// eslint-disable-next-line
console.log(`hello ${firebase.auth().currentUser}`)
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
    }
  }
}
</script>
