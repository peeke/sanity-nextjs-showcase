export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9f22838b130178dcdd28ba',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-showcase-studio',
                  apiId: 'c0194c1e-7526-4641-b9bc-2007cbcc6520'
                },
                {
                  buildHookId: '5d9f2283c5f537258592865f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-showcase',
                  apiId: '8594aa30-a246-492e-8216-ca13b103f606'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peeke/sanity-nextjs-showcase',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-showcase.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
