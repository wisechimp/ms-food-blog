import {defineField, defineType} from 'sanity'
import {GrTag} from 'react-icons/gr'

export default defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: GrTag,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
