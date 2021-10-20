import auth0 from "auth0-js"
import { navigate } from 'gatsby'

const isBrowser = typeof window !== "undefined"

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

  const tokens = {
    accessToken: false,
    idToken: false,
    expiresAt: false,
  }

  let user = {}

  const isAuthenticated = () => {
    if(!isBrowser) {
      return
    }
    return localStorage.getItem("isLoggedIn") === "true"
  }

  const login = () => {
    if (!isBrowser) {
      return
    }
    auth.authorize()
  }

  const silentAuth = callback => {
    if (!isAuthenticated()) {
      return callback()
    }
    auth.checkSession({}, setSession(callback()))
  }

  const setSession = (cb = () => {}) => (error, authResult) => {
    if (error) {
      console.log(error)
      navigate("/")
      cb()
      return
    }

    if (authResult && authResult.accessToken && authResult.idToken) {
      let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
      tokens.accessToken = authResult.accessToken
      tokens.idToken = authResult.idToken
      tokens.expiresAt = expiresAt
      user = authResult.idTokenPayload
      localStorage.setItem("isLoggedIn", true)
      navigate("/account")
      cb()
    }
  }

  const handleAuthentication = () => {
    if (!isBrowser) {
      return
    }
    auth.parseHash(setSession())
  }

  const getProfile = () => {
    return user
  }

  const logout = () => {
    localStorage.setItem("isLoggedIn", false)
    auth.logout()
  }

  export { isAuthenticated, login, silentAuth, setSession, handleAuthentication, getProfile, logout }