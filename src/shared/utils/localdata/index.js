const menuLinks = [
  {
    name: 'O nas',
    fullPath: false,
    path: '/about-us',
    children: [
      {
        name: 'Technologie',
        fullPath: false,
        path: '/technologies',
      },
      {
        name: 'Strategia i Kreacja',
        fullPath: false,
        path: '/strategy-and-creation',
      },
      {
        name: 'Zespół',
        fullPath: false,
        path: '/team',
      },
      {
        name: 'Infotech',
        fullPath: false,
        path: '/infotech',
      },
    ],
  },
  {
    name: 'Prototypy',
    fullPath: false,
    path: '/prototypes',
    children: [
      {
        name: 'Koncepcje',
        fullPath: false,
        path: '/conceptions',
      },
    ],
  },
  {
    name: 'Rozwiązania',
    fullPath: false,
    path: '/solutions',
  },
  {
    name: 'Newsroom',
    fullPath: false,
    path: '/newsroom',
  },
  {
    name: 'Wydarzenia',
    fullPath: false,
    path: '/events',
  },
  {
    name: 'Nasze zaangażowanie',
    fullPath: false,
    path: '/our-engagement',
  },
  {
    name: 'Dotacje Unijne',
    fullPath: false,
    path: '/eu-subsidies',
  },
  {
    name: 'Mówią o nas',
    fullPath: false,
    path: '/media-about-us',
  },
  {
    name: 'Cobe',
    fullPath: true,
    path: 'http://botcobe.pl/',
  },
  {
    name: 'Kontakt',
    fullPath: false,
    path: '/contact',
  },
]

module.exports = { menuLinks }
