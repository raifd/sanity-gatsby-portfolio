export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ea74da63f79d2fd6f93f0af',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p893f9ai',
                  apiId: 'b321e0d7-eeb2-4f53-8fd3-0ebe3ab8c530'
                },
                {
                  buildHookId: '5ea74da62d64de68613b8869',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-r64pdr4m',
                  apiId: '04de251f-5fe9-4d81-ad23-207495557c15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raifd/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-r64pdr4m.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
