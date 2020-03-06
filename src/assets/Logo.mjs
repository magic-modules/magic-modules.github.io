export const View = ({ root }) =>
  Link({ to: root, class: 'Logo' }, [
    svg({ viewBox: '0 0 1500 1125', height: '33', width: '44' }, [
      path({
        class: 'bg',
        d:
          'M752 0A739 739 0 0068 434a770 770 0 0029 691h1313c189-337 72-819-264-1019A778 778 0 00752 0z',
        fill: '#639',
      }),
      path({
        class: 'pyramid',
        d:
          'M754 11L99 1103h1313zm0 144l214 354c-114-104-319-93-425 0zM435 684c-43 144 81 308 193 351H223zm641 0l212 351H883a307 307 0 00193-351z',
      }),
      path({
        class: 'cubes slim',
        d: 'M667 684l95 45 176-83M762 729v208M937 739l-176 96-151-85',
      }),
      path({ class: 'cubes slim', d: 'M673 883l-6-200 177-79' }),
      path({ class: 'cubes slim', d: 'M856 882l1-196-180-83' }),
      path({
        class: 'cubes',
        d: 'M650 705l17-7M583 764l2 63 177 113 172-108 5-188-177-78-85 37 3 75',
      }),
      path({
        class: 'cubes',
        d: 'M482 729l79 45 89-42-2-87-84-39-88 31z',
      }),
      path({
        class: 'cubes',
        d: 'M558 679l3 91zM480 639l78 40 91-35',
      }),
    ]),
  ])

export const style = vars => ({
  '.cubes': {
    stroke: (vars.primary && vars.primary.neutral) || '#639',
    strokeWidth: '20',
    fill: 'none',

    '&.slim': {
      strokeWidth: '15',
    },
  },

  '.bg': {
    fill: (vars.primary && vars.primary.neutral) || '#639',
  },

  '.pyramid': {
    fill: vars.white,
  },
})
