import firebase from 'firebase'

export const state = () => ({
  user: null
})

export const getters = {
  getterValue: (state) => {
    return state.value
  }
}

export const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  }
}

export const actions = {
  signInWithGoogle({ commit }) {
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
        commit('setUser', user.uid)
        // eslint-disable-next-line
        // console.log(user)
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
  },
  SignOut({ commit }) {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .signOut()
      .then(() => {
        // eslint-disable-next-line
        console.log('signed out')
      })
    commit('setUser', null)
  }
}
