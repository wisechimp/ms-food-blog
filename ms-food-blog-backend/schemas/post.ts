import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    }),
    defineField({
      name: 'mainImageData',
      title: 'Main image',
      type: 'object',
      fields: [
        defineField({
          name: 'mainImage',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'altText',
          title: 'Alternative text',
          description: 'This is required for people who rely on screen readers and SEO.',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImageData.mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
