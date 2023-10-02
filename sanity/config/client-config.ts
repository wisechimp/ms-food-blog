import { createClient } from 'next-sanity'

const clientConfig = createClient({
  projectId: "z4j35np0",
  dataset: "production",
  apiVersion: "2023-10-02",
  useCdn: true,
})

export default clientConfig