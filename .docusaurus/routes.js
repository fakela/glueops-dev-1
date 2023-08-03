import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9f1'),
    exact: true
  },
  {
    path: '/upgrade',
    component: ComponentCreator('/upgrade', '8e0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'da7'),
    routes: [
      {
        path: '/docs/deploy-applications',
        component: ComponentCreator('/docs/deploy-applications', '51b'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/deploy-applications/deploy-docusarus-website-to-glueops',
        component: ComponentCreator('/docs/deploy-applications/deploy-docusarus-website-to-glueops', '3dc'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/deploy-applications/deploy-hello-world-to-glueops',
        component: ComponentCreator('/docs/deploy-applications/deploy-hello-world-to-glueops', 'c6e'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/deploy-applications/deploy-python-app-to-glueops',
        component: ComponentCreator('/docs/deploy-applications/deploy-python-app-to-glueops', '4f6'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started', 'ef6'),
        exact: true
      },
      {
        path: '/docs/glueops-cluster-domain',
        component: ComponentCreator('/docs/glueops-cluster-domain', 'e59'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/glueops-deployment-configuration',
        component: ComponentCreator('/docs/glueops-deployment-configuration', '3b8'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', 'ce3'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/predeployment',
        component: ComponentCreator('/docs/predeployment', 'f65'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/predeployment/create-github-app-for-glueops',
        component: ComponentCreator('/docs/predeployment/create-github-app-for-glueops', '5c5'),
        exact: true,
        sidebar: "main"
      },
      {
        path: '/docs/predeployment/create-github-oauth-for-glueops',
        component: ComponentCreator('/docs/predeployment/create-github-oauth-for-glueops', '578'),
        exact: true,
        sidebar: "main"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7aa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
