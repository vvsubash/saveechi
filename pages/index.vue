<template>
  <div>
    <signInButton />
    <button @click="SignOut">SignOut</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import signInButton from '~/components/signin-button'
// eslint-disable-next-line
import db from '~/plugins/firestore.js'
export default {
  components: {
    signInButton
  },
  methods: {
    SignOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // eslint-disable-next-line
          console.log('signed out')
        })
    }
  }
}
</script>
