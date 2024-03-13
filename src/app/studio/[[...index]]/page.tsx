// So Next 13 renders the app folder from the server.
// However we want the Studio to be rendered on the client.
"use client"

import { NextStudio } from "next-sanity/studio"
import config from "@/sanity.config"

const StudioPage = () => {
  return <NextStudio config={config} />
}

export default StudioPage