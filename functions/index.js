const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

const db = admin.firestore()

exports.addUserToDatabase = functions.auth
  .user()
  .onCreate(function(user, context) {
    // const uid = user.uid
    return db
      .collection('users')
      .doc('kgjhg')
      .set({
        name: 'uid'
      })
  })
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
