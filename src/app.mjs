export const state = {
  title: '@magic-modules',
  description: '@magic-modules. building blocks for your @magic app.',

  branding: ['@magic', '-modules'],

  seo: {
    name: '@magic-modules',
    url: `https://magic-modules.github.io/`,
    about:
      'magic is a jamstack generator. @magic-modules are components including html, css, actions and other functionality.',
    image: `https://magic-modules.github.io/magic-modules-preview.jpg`,
    author: {
      '@type': 'person',
      name: 'Jascha Ehrenreich',
      jobTitle: 'Technomancer',
      image: 'https:/jaeh.at/img/jascha.ehrenreich.jpg',
      url: 'https://jaeh.at',
    },
  },

  menu: [
    { to: '/', text: 'about' },
    { to: '/#gl-magic-modules', text: 'modules' },
  ],

  hero: {
    title: 'modules',
    description: 'building blocks for your @magic app.',
  },

  footer: {
    one: {
      title: '@magic',
      before: ['modules', 'created by', 'Wizards & Witches'],
    },

    two: {
      title: 'projects',
      menu: [
        { to: 'https://github.com/magic/', text: '@magic' },
        { to: 'https://github.com/grundstein/', text: '@grundstein' },
        { to: 'https://github.com/webboot/', text: '@webboot' },
      ],
    },

    three: {
      title: 'social',
      menu: [
        { to: 'https://www.npmjs.com/org/magic-modules', text: 'npm' },
        { to: 'https://github.com/magic-modules/', text: 'github' },
      ],
    },
  },
}
