import {defineConfig} from 'sanity'
import {dashboardTool} from '@sanity/dashboard'
import {deskTool} from 'sanity/desk'
import {table} from '@sanity/table'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {netlifyWidget} from 'sanity-plugin-dashboard-widget-netlify'

export default defineConfig({
  name: 'default',
  title: 'Ma Sharp Home Cooking',

  projectId: 'z4j35np0',
  dataset: 'production',

  plugins: [
    deskTool(),
    table(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Netlify deploy',
          sites: [
            {
              title: 'Website',
              apiId: '7e87fc96-2105-45ff-89a5-300b21310483',
              buildHookId: '642961b13a59e06da51b6fe8',
              name: 'masharphomecooking',
              url: 'https://www.masharphomecooking.com',
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
