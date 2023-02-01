import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { navigate } from "gatsby-link"

import "./src/styles/variables.css"
import "./src/styles/ms-food-blog-global-styles.css"
import "@fontsource/courgette"

const onRedirectCallback = () => {
  // Use Gatsby's navigate method to replace the url
  navigate("/callback/")
}

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain="dev-aoe2gl61.eu.auth0.com"
      clientId="E4ngl9OG0OPVx2iI2yhJwyp3iX2bgGhj"
      redirectUri="http://localhost:8000/callback"
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  )
}
