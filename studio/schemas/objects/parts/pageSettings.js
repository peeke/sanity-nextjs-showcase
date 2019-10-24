export default {
  name: 'pageSettings',
  type: 'object',
  title: 'Page settings',
  fields: [
    {
      name: 'metaDescription',
      type: 'text',
      title: 'Meta description',
      description: 'This description populates meta-tags on the webpage',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml'
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines'
    },
  ]
}
