// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Aman-zishan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Aman-zishan/friend.tech',
          'Aman-zishan/CSM',
          'Aman-zishan/SuperPay',
          'Aman-zishan/sDAO',
          'Aman-zishan/mega-ui',
          'Aman-zishan/docscanner',
          'Aman-zishan/sDAO-with-chainhook',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.

      projects: [
        {
          title: 'Bandit',
          description:
            'Transaction investigation tool for tracking stolen funds in stacks',
          imageUrl: '/assets/bandit.png',
          link: 'https://app.hashhavoc.com/bandit',
        },
        {
          title: 'Mega DAO',
          description: 'DAO for the NFT community of Megapont',
          imageUrl: '/assets/megadao.png',
          link: 'https://dao.megapont.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Aman Zishan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Aman-zishan',
    twitter: 'aman_zishan',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'amanzishan.az',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'amanzishan.az@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vRDDzgF0Q5bWzlRUj0_dJAJJPVp5T3NyV_y9rdMCNx1ZxG7yKMCT9CDDLidtGNAeqEL_zFpfmbMHPe5/pub', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Typescript',
    'Python',
    'Docker',
    'Next.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Antd',
    'Tailwind',
    'Solidity',
    'BTC',
    'Clarity',
  ],
  experiences: [
    {
      company: 'Ace Labx ',
      position: 'Full Stack Developer',
      from: 'June 2022',
      to: 'may 2024',
      companyLink: 'https://acelabx.com/',
    },
    {
      company: 'Cache Gold',
      position: 'Frontend Developer',
      from: 'September 2021',
      to: 'June 2022',
      companyLink: 'https://cache.gold/',
    },
    {
      company: 'Indic Law',
      position: 'Flutter Developer',
      from: 'April 2021',
      to: 'August 2021',
      companyLink: 'https://www.indiclaw.com/',
    },
  ],
  certifications: [
    {
      name: 'HackMIT mentor',
      body: "Served as a selected mentor for HackMIT 2023, MIT's premier annual hackathon with over 1000 undergraduate participants. Guided teams through project ideation and execution, leveraging technical expertise and hackathon experience to support innovative student projects.",
      year: 'August 2023',
      link: 'https://www.linkedin.com/in/aman-zishan/overlay/1635541348667/single-media-viewer?type=DOCUMENT&profileId=ACoAACzXqicB5V3fAGLNICJM4CqhoqzoKA0amoE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BTHiw6Vl%2FTHuvhoTJRc1mEg%3D%3D',
    },
  ],
  educations: [
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2015',
    //   to: '2019',
    // },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'amanzishan.az', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
