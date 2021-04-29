export const View = (root = '/') =>
  Link({ to: root, class: 'Logo' }, [
    svg({ viewBox: '0 0 512 444' }, [
      path({ d: 'M512 444L256 0 0 444z', fill: '#663695' }),
      circle({ cx: '256', cy: '294', r: '130', fill: '#fff' }),
      path({
        d: 'M256 81v53m184 270l-43-29M72 404l43-29',
        class: 'stroke round white l',
      }),
      path({
        d: 'M234 346l-2-84 74-33 M311 346l1-83-76-35 M232 262l40 19 74-35m-74 35v88m73-84l-74 41-63-36 M186 260l1 39zm-33-17l33 17 38-14',
        class: 'stroke sm'
      }),
      path({
        d: 'M225 271l7-3m-36 28l1 27 75 47 72-45 2-79-74-33-36 15 1 32 M154 281l33 19 38-17-1-37-36-16-37 13z',
        class: 'stroke md',
      }),
    ])
  ])

export const style = vars => ({
  '.stroke': {
    fill: 'none',
    stroke: '#639',

    '&.white': {
      stroke: '#fff',
    },

    '&.sm': {
      strokeWidth: 5,
    },

    '&.md': {
      strokeWidth: 9,
    },

    '&.l': {
      strokeWidth: 15,
    },

    '&.round': {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  },
})
