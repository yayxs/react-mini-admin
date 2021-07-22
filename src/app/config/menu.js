const base = `siderMenu_`;

const menuData = [
  {
    name: `${base}dashboard`,
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: `${base}analysis`,
        path: 'analysis',
        children: [
          {
            name: `${base}realtime`,
            path: 'realtime',
          },
          {
            name: `${base}offline`,
            path: 'offline',
          },
        ],
      },
      {
        name: `${base}workplace`,
        path: 'workplace',
      },
    ],
  },
  {
    name: `${base}exception`,
    icon: 'table',
    path: 'exception',
    children: [
      {
        name: `${base}_403`,
        path: '403',
      },
      {
        name: `${base}_404`,
        path: '404',
      },
    ],
  },
];

export default menuData;
