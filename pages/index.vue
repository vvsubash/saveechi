<template>
  <div>
    <button @click="SignIn">Signin</button>
    {{ db }}
  </div>
</template>

<script>
import firebase from 'firebase'
// eslint-disable-next-line
import db from '~/plugins/firestore.js'
export default {
  methods: {
    SignIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = result.credential.accessToken
          // The signed-in user info.
          // var user = result.user
          // ...
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
