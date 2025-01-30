type TypeNavItem = {
  title: string,
  link?: string,
  list?: TypeNavItem[];
}

export const mainNav:TypeNavItem[] = [
  {
    title: 'Dashboards',
    list: [
      { title: 'eCommerce', link: '#' },
      { title: 'Academy', link: '#' },
      { title: 'Logistics', link: '#' },
    ]
  },
  {
    title: 'Front Pages',
    list: [
      { title: 'Landing', link: '/front/landing' },
      { title: 'Pricing', link: '/front/pricing' },
      { title: 'Payment', link: '/front/payment' },
      { title: 'Checkout', link: '/front/checkout' },
      { title: 'Help Center', link: '/front/help-center' },
    ]
  }
]

export const appsAndPages:TypeNavItem[]  = [
  {
    title: 'Ecommerce',
    list: [
      { title: 'Dashboard', link: '#' },
      { 
        title: 'Product', 
        list: [ 
          { title: 'List', link: '#' },
          { title: 'Add', link: '#' },
          { title: 'Category', link: '#' },
        ] 
      },
      { 
        title: 'Order',
        list: [ 
          { title: 'List', link: '#' },
          { title: 'Details', link: '#' },
        ] 
      },
      { 
        title: 'Customer', link: '#',
        list: [ 
          { title: 'List', link: '#' },
          { title: 'Details', link: '#' },
        ] 
      },
      { title: 'Manage Review', link: '#' },
      { title: 'Referrals', link: '#' },
      { title: 'Settings', link: '#' },
    ]
  },
  {
    title: 'Academy',
    list: [
      { title: 'Dashboard', link: '#' },
      { title: 'My Course', link: '#' },
      { title: 'Course Details', link: '#' },
    ]
  },
  {
    title: 'Logistics',
    list: [
      { title: 'Dashboard', link: '#' },
      { title: 'Fleet', link: '#' },
    ]
  },
  { title: 'Email', link: '#' },
  { title: 'Chat', link: '#' },
  { title: 'Calendar', link: '#' },
  { title: 'Kanban', link: '#' },
  {
    title: 'Invoice',
    list: [
      { title: 'List', link: '#' },
      { title: 'Preview', link: '#' },
      { title: 'Edit', link: '#' },
      { title: 'Add', link: '#' },
    ]
  },
  {
    title: 'User',
    list: [
      { title: 'List', link: '#' },
      { title: 'View', link: '#' },
    ]
  },
  {
    title: 'Roles & Permissions',
    list: [
      { title: 'Roles', link: '#' },
      { title: 'Permissions', link: '#' },
    ]
  },
]