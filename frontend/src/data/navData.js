export const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Solutions', href: '#', hasDropdown: true },
  { name: 'About', href: '/about', hasDropdown: true },
  { name: 'Resources', href: '#', hasDropdown: true },
  { name: 'Careers', href: '#' },
];

export const megaMenuData = {
  Solutions: {
    type: 'columns',
    columns: [
      {
        title: 'BRAND',
        items: [
          { title: 'Brand Solution', href: '#' }
        ]
      },
      {
        title: 'COMMERCE',
        items: [
          { title: 'Shopify Development', href: 'https://commerce-scalomatrix.onrender.com' },
          { title: 'Marketplace', href: 'https://marketplace-scalomatrix.onrender.com' },
          { title: 'Finance', href: '#' },
          { title: 'Funnel & Lead-Gen', href: '#' }
        ]
      },
      {
        title: 'GROWTH',
        items: [
          { title: 'Growth Solution', href: '#' },
          { title: 'Media', href: '#' }
        ]
      }
    ]
  },
  About: {
    type: 'projects',
    hideTags: true,
    items: [
      { title: 'How We Work', href: '/about/how-we-work' },
      { title: 'Our Partnerships', href: '/about/our-partnerships' },
      { title: 'News Centre', href: '/about/news-centre' },
      { title: 'Schbang Network', href: '/about/network' },
      { title: 'CSR', href: '/about/csr' },
      { title: 'Meet The Team', href: '/about/team' },
    ],
    featuredProjects: [
      {
        title: 'Making Headlines with our omnichannel launch campaign for a bold original News Show',
        description: 'Case Study • Vantage',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64774c61a485e13dd8b2a165_VANTAGE%20STUDY%20m%20text%20(Large).png',
        link: '#'
      },
      {
        title: 'Hyper-personalized social campaign for India’s biggest food delivery startup',
        description: 'Case Study • Swiggy',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6477260dbbb4647b0057f061_SWIGGY%20CASE%20STUDY%20M%20TEXT-01%20(Large).png',
        link: '#'
      }
    ]
  },
  Resources: {
    type: 'projects',
    hideTags: true,
    items: [
      { title: 'Blogs', href: '/resources/blogs' },
      { title: 'The Edge', href: '/resources/the-edge' },
    ],
    featuredProjects: [
      {
        title: 'The Complete GEO + AEO Checklist For Brand Marketers In 2026',
        description: 'Blog Post • SEO',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a50f13e8e27025e5f498bb4_image%20(13).png',
        link: '#'
      },
      {
        title: "AEO 101: How Brands Get Featured In AI-Generated Answers (And What's Stopping You)",
        description: 'Blog Post • AI',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a50c71e04a12bcaea2d6ee6_AEO-%20website.jpg',
        link: '#'
      }
    ]
  }
};
