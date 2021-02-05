export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '601dacacb9896f4e034c4e90',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-nathanpuls-com-studio',
                  apiId: 'a0a79586-a75d-434f-80d7-aa0ab9ca7561'
                },
                {
                  buildHookId: '601dacadbcf6cd585e01bca4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-nathanpuls-com',
                  apiId: '816d879e-d993-41ea-96a1-884b22f66fdd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathanpuls/sanity-sapper-blog-nathanpuls.com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-nathanpuls-com.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
