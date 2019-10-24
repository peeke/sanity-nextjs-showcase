export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title'
      }
    },
    {
      name: 'pageSettings',
      type: 'pageSettings',
      title: 'Page settings',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' },
        { type: 'imageSection' },
        { type: 'textSection' }
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'pageSettings->openGraphImage'
    }
  }
}
