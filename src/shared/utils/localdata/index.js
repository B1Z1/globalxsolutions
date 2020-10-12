const menuLinks = [
  {
    name: 'O nas',
    path: '/about-us',
    children: [
      {
        name: 'Technologie',
        path: '/technologies',
      },
      {
        name: 'Strategia i Kreacja',
        path: '/strategy-and-creation',
      },
      {
        name: 'Zespół',
        path: '/team',
      },
      {
        name: 'Infotech',
        path: '/infotech',
      },
    ],
  },
  {
    name: 'Prototypy',
    path: '/prototypes',
    children: [
      {
        name: 'Koncepcje',
        path: '/conceptions',
      },
    ],
  },
  {
    name: 'Rozwiązania',
    path: '/solutions',
  },
  {
    name: 'Newsroom',
    path: '/newsroom',
  },
  {
    name: 'Wydarzenia',
    path: '/events',
  },
  {
    name: 'Nasze zaangażowanie',
    path: '/our-engagement',
  },
  {
    name: 'Dotacje Unijne',
    path: '/eu-subsidies',
  },
  {
    name: 'Mówią o nas',
    path: '/media-about-us',
  },
  {
    name: 'Cobe',
    path: 'http://botcobe.pl/',
  },
  {
    name: 'Kontakt',
    path: '/contact',
  },
]

module.exports = { menuLinks }
