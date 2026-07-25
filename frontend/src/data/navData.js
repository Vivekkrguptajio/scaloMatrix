export const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Solutions', href: '#', hasDropdown: true },
  { name: 'About', href: '/about', hasDropdown: true },
  { name: 'Resources', href: '#', hasDropdown: true },
  { name: 'Careers', href: '#' },
];

export const megaMenuData = {
  Solutions: {
    type: 'projects',
    items: [
      { title: 'Brand Solutions', href: '/solutions/brand-solutions' },
      { title: 'Tech Solutions', href: '/solutions/tech-solutions' },
      { title: 'Media Solutions', href: '/solutions/media-solutions' },
    ],
    featuredProjects: [
      {
        title: 'How A Catchy Line Received 193M+ Views And Started A Cultural Conversation',
        description: 'Case Study • TATA Capital',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a22d3c2280604b61b881a82_TATA%20capital%20women%27s%20day%20cover.jpg',
        tags: ['TATA', 'CAMPAIGN'],
        link: '#'
      },
      {
        title: 'Location So Apt, This Overnight Billboard clocked in 15m+ views',
        description: 'Case Study • Billboard',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a2297ed183f8f2e18778ea2_WhatsApp%20Image%202026-06-05%20at%202.44.38%20PM.jpeg',
        tags: ['OOH', 'VIRAL'],
        link: '#'
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
