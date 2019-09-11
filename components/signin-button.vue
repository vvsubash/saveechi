<template>
  <div>
    <button class="p-2 rounded-lg border bg-orange-500" @click="signin">
      Sign In
    </button>
    {{ token }}
  </div>
</template>

<script>
import firebase from 'firebase'
// eslint-disable-next-line
import db from '~/plugins/firestore.js'
export default {
  data() {
    return {
      token: null
    }
  },
  methods: {
    signin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/calendar')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken
          // eslint-disable-next-line
          console.log(token)
          alert(token)
          // The signed-in user info.
          const user = result.user
          // eslint-disable-next-line
          console.log(user)
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error.code)
          // Handle Errors here.
          // const errorCode = error.code
          // const errorMessage = error.message
          // // The email of the user's account used.
          // const email = error.email
          // // The firebase.auth.AuthCredential type that was used.
          // const credential = error.credential
          // ...
        })
    }
  }
}
</script>
