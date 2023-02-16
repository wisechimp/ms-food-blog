import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {table} from '@sanity/table'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Ma Sharp Home Cooking',

  projectId: 'z4j35np0',
  dataset: 'production',

  plugins: [deskTool(), table(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
