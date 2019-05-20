export const View = () => [
  h2([Link({ to: 'https://magic.github.io' }, '@magic')]),
  p('magic is a module/component based generator for static pages and serverless deployments.'),
  p(
    'goal of the project is to keep the client boilerplate footprint minimal yet easily extendable',
  ),
  GitBadges('magic/core'),

  h2({ id: 'magic-modules' }, Link({ to: 'https://github.com/magic-modules/' }, '@magic-modules')),
  p('modules are the building blocks of @magic.'),
  ModuleList(),
]
