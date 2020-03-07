export const state = {
  title: '@magic-modules',
  description: '@magic-modules. building blocks for your @magic app.',

  branding: ['@magic', '-modules'],

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
        { to: 'https://npmjs.com/org/magic-modules/', text: 'npm' },
        { to: 'https://github.com/magic-modules/', text: 'github' },
      ],
    },
  },
}
