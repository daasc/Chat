export const state = () => ({
  user: null,
})

export const mutations = {
  SIGN_OUT: (state) => {
    state.user = null
    localStorage.setItem('user', JSON.stringify(null))
  },
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (authUser || user) {
      const { uid, email, emailVerified, photoURL, displayName } = authUser
      localStorage.setItem(
        'user',
        JSON.stringify({ uid, email, emailVerified, photoURL, displayName })
      )
      state.user = { uid, email, emailVerified, photoURL, displayName }
    } else {
      state.user = null
      localStorage.setItem('user', null)
    }
  },
}

export const getters = {}

export const actions = {}
