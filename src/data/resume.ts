// Single source of truth for all site content, taken from
// Manikanth_Y_AV_Presales_Resume.pdf. Update here, not in components.

export const isArtifactBuild = import.meta.env.VITE_ARTIFACT === '1'

export const profile = {
  name: 'Manikanth Y',
  firstName: 'Manikanth',
  title: 'Senior AV Presales & Solution Design Engineer',
  headline: 'Audio Visual Presales & Solution Design',
  intro:
    'Designing integrated, enterprise-grade AV environments — from the first site survey and requirement workshop to compliant BOQs, system schematics and a clean handover to project execution.',
  location: 'Bangalore, India',
  email: 'Manikanth715@gmail.com',
  // Set to null to hide the phone number from the public site.
  phone: '+91 88853 27345' as string | null,
  phoneHref: 'tel:+918885327345',
  // Not in the resume — add your profile URL here to show it on the site.
  linkedin: null as string | null,
  // The claude.ai page build (VITE_ARTIFACT=1) can't offer file downloads,
  // so resume links are hidden there.
  resumeUrl: (import.meta.env.VITE_ARTIFACT === '1'
    ? null
    : `${import.meta.env.BASE_URL}Manikanth_Y_AV_Presales_Resume.pdf`) as string | null,
  resumeFileName: 'Manikanth_Y_AV_Presales_Resume.pdf',
}

export const keyFacts = [
  { value: '6+', label: 'Years in AV presales & design' },
  { value: '14', label: 'OEM platforms coordinated' },
  { value: '18', label: 'Enterprise & government clients supported' },
  { value: '5', label: 'Sectors, from BFSI to healthcare' },
]

export const summary = [
  'I am a Senior AV Presales and Solution Design professional with more than six years of experience leading end-to-end audio-visual system design and technical presales across enterprise, government and institutional projects.',
  'My work spans boardrooms, meeting rooms, auditoriums, training rooms, classrooms, experience centres and command & control centres — covering video conferencing, digital signage, video walls, active LED displays, audio DSP, AV-over-IP and control systems.',
  'I translate client requirements into technically compliant, cost-optimised proposals through BOQ/BOM preparation, technical specifications, RFP/RFQ/tender compliance analysis and value engineering, working closely with OEMs, consultants and project teams.',
]

export const competencies = [
  'AV Solution Design & System Architecture',
  'AV Presales Engineering & Technical Consulting',
  'Site Survey & Client Requirement Analysis',
  'BOQ / BOM Development & Cost Estimation',
  'Technical Specifications & Compliance Documentation',
  'RFP / RFQ & Tender Analysis',
  'Value Engineering & Cost Optimisation',
  'OEM & Vendor Coordination',
  'Technical Proposals & Client Presentations',
  'Stakeholder & Customer Management',
  'Cross-Functional Project Coordination',
  'Project Planning & Design Documentation',
]

export type ExpertiseGroup = {
  id: string
  code: string
  title: string
  description: string
  items: string[]
}

export const expertise: ExpertiseGroup[] = [
  {
    id: 'design',
    code: 'SYS-01',
    title: 'AV System Design & Engineering',
    description: 'Architecture and solution design for integrated meeting, learning and command spaces.',
    items: [
      'AV system architecture & solution design',
      'Audio system design — DSP & signal flow',
      'Video conferencing solutions',
      'Microsoft Teams Rooms (MTR) & Zoom Rooms',
      'Unified Communications (UC) solutions',
      'AV-over-IP & network infrastructure',
      'Control & automation systems',
      'Digital signage & video wall solutions',
      'Active LED / direct-view display design',
      'Room collaboration systems',
    ],
  },
  {
    id: 'presales',
    code: 'PRE-02',
    title: 'Presales & Consulting',
    description: 'Turning requirements into compliant, value-engineered and winnable proposals.',
    items: [
      'Solution design & technical consulting',
      'Site surveys & requirement analysis',
      'BOQ / BOM preparation & cost estimation',
      'Technical specifications & compliance documentation',
      'RFP / RFQ & tender analysis',
      'Value engineering & cost optimisation',
      'OEM & vendor coordination',
      'Client presentations, demos & POCs',
      'Stakeholder & customer management',
    ],
  },
  {
    id: 'docs',
    code: 'DOC-03',
    title: 'Design & Documentation',
    description: 'Drawings and documents that carry a design cleanly from proposal into execution.',
    items: [
      'AV system schematics & signal flow diagrams',
      'Rack layouts & network topology diagrams',
      'Scope of Work (SOW) documentation',
      'Construction drawing & infrastructure review',
      'Project planning & design documentation',
      'AutoCAD & Microsoft Visio',
    ],
  },
]

export const spaces = [
  'Boardrooms',
  'Meeting rooms',
  'Auditoriums',
  'Training rooms',
  'Classrooms',
  'Experience centres',
  'Command & control centres',
  'Digital signage',
]

export const oemGroups = [
  { category: 'Video Conferencing & Collaboration', brands: ['Cisco', 'Logitech', 'Poly', 'Yealink'] },
  { category: 'Control & Automation', brands: ['Crestron', 'Extron', 'QSC (Q-SYS)'] },
  { category: 'Audio', brands: ['Shure', 'Sennheiser', 'Biamp'] },
  { category: 'Displays & Signage', brands: ['LG', 'Samsung', 'Sony', 'Barco'] },
]

export const experience = [
  {
    company: 'Four Corners Technology Pvt. Ltd.',
    role: 'Presales Specialist',
    location: 'Bangalore, Karnataka, India',
    start: 'Jan 2020',
    end: 'Present',
    scope: [
      'Enterprise',
      'Government & Defence',
      'BFSI',
      'Healthcare',
      'Education',
    ],
    groups: [
      {
        title: 'Presales lifecycle',
        points: [
          'Lead the end-to-end AV presales lifecycle — requirement analysis, site surveys, solution design, technical proposals and handover to project execution teams.',
          'Run client meetings, site surveys and technical workshops to translate business requirements into the right AV and collaboration solutions.',
          'Deliver technical presentations, customer demonstrations and proof-of-concept (POC) walkthroughs for stakeholders and decision-makers.',
        ],
      },
      {
        title: 'Solution design',
        points: [
          'Design enterprise AV systems for boardrooms, meeting rooms, auditoriums, training rooms, classrooms, experience centres, command & control centres and digital signage deployments.',
          'Design Microsoft Teams Rooms, Zoom Rooms and Cisco collaboration environments, integrating audio, video, control and collaboration into unified hybrid meeting solutions.',
          'Run product comparisons and interoperability assessments with OEM partners to recommend best-fit solutions.',
        ],
      },
      {
        title: 'Documentation & compliance',
        points: [
          'Prepare detailed BOQs, BOMs, Scopes of Work, technical specifications and compliance documentation.',
          'Develop AV schematics, signal flow diagrams, rack layouts and network topology drawings in AutoCAD and Visio.',
          'Evaluate RFPs, RFQs and tenders for technical compliance, identifying value-engineering and cost-optimisation opportunities.',
          'Support government tenders and enterprise bids with compliance matrices, OEM documentation, MAFs and prequalification submissions.',
        ],
      },
      {
        title: 'Coordination & delivery support',
        points: [
          'Partner with sales, procurement, engineering and project management to align pricing, technical feasibility and delivery timelines.',
          'Review project drawings, construction documents and site readiness against AV design standards; provide technical guidance during FAT/SAT, commissioning and client handover.',
        ],
      },
    ],
    achievements: [
      'Designed and proposed AV solutions for multiple enterprise, government, healthcare, education and BFSI projects valued at several crores (INR).',
      'Delivered technically compliant, value-engineered proposals with strong win rates through optimised BOQs.',
      'Reduced project costs by identifying alternative technologies without compromising performance or functionality.',
      'Managed multiple concurrent presales opportunities while meeting aggressive submission timelines.',
      'Built strong technical relationships with OEMs, consultants, architects and key clients.',
    ],
  },
]

export type ProjectType = {
  id: string
  title: string
  image: 'boardroom' | 'auditorium' | 'classroom' | 'signage' | 'control' | 'experience'
  sectors: string[]
  scope: string
  technologies: string[]
}

// Project types documented in the resume. Specific client projects are not
// itemised in the resume, so these are presented as solution categories.
export const projectTypes: ProjectType[] = [
  {
    id: 'boardroom',
    title: 'Boardrooms & Hybrid Meeting Rooms',
    image: 'boardroom',
    sectors: ['Enterprise', 'BFSI'],
    scope:
      'Microsoft Teams Rooms, Zoom Rooms and Cisco collaboration environments that unify audio, video, control and content sharing for hybrid meetings.',
    technologies: ['Video conferencing', 'UC platforms', 'Audio DSP', 'Room control'],
  },
  {
    id: 'auditorium',
    title: 'Auditoriums',
    image: 'auditorium',
    sectors: ['Enterprise', 'Government', 'Education'],
    scope:
      'Large-room audio, display and control design for presentations and events, with DSP-based audio signal flow and centralised control.',
    technologies: ['Professional audio', 'DSP', 'Large-format display', 'Control systems'],
  },
  {
    id: 'learning',
    title: 'Training Rooms & Classrooms',
    image: 'classroom',
    sectors: ['Education', 'Enterprise'],
    scope:
      'Learning spaces that combine presentation, collaboration and conferencing so local and remote participants can take part equally.',
    technologies: ['Displays', 'Collaboration', 'Video conferencing', 'Audio reinforcement'],
  },
  {
    id: 'signage',
    title: 'Video Walls, Active LED & Digital Signage',
    image: 'signage',
    sectors: ['Enterprise', 'Healthcare'],
    scope:
      'Video wall and direct-view LED display design alongside digital signage deployments for corporate and public-facing spaces.',
    technologies: ['Video walls', 'Active LED', 'Digital signage', 'AV-over-IP'],
  },
  {
    id: 'control',
    title: 'Command & Control Centres',
    image: 'control',
    sectors: ['Government', 'Defence', 'Enterprise'],
    scope:
      'Operator-focused environments with multi-source visualisation, signal distribution and control for monitoring and decision-making.',
    technologies: ['Video walls', 'Signal distribution', 'AV-over-IP', 'Control systems'],
  },
  {
    id: 'experience',
    title: 'Experience Centres',
    image: 'experience',
    sectors: ['Enterprise'],
    scope:
      'Showcase spaces that bring together display, audio and control technologies to present products and brand stories to visitors.',
    technologies: ['LED & displays', 'Audio', 'Control & automation', 'Digital signage'],
  },
]

export const myRole = [
  'Requirement analysis & site survey',
  'Solution architecture & product selection',
  'BOQ / BOM, specifications & SOW',
  'Schematics, signal flow & rack layouts',
  'Tender compliance & OEM documentation',
  'Technical guidance through FAT/SAT & handover',
]

export const clients = {
  enterprise: [
    'Hindustan Petroleum Corporation Limited',
    'Reserve Bank of India',
    'Diageo',
    'Allen Digital Corporate Office',
    'Lenovo',
    'ABB',
    'MMD',
    'CX100',
    'West Pharma',
    'Foxconn',
    'TASC',
    'Magna',
    'Kanini Software Solutions',
    'National Institute of Technology',
    'Astellas Pharma',
  ],
  government: [
    'ISRO — Indian Space Research Organisation',
    'HAL — Hindustan Aeronautics Limited',
    'Defence Services Staff College',
    'Reserve Bank of India',
  ],
}

export const certifications = [
  { issuer: 'Extron', name: 'Product / Technical Training' },
  { issuer: 'Crestron', name: 'Product / Technical Training' },
  { issuer: 'QSC', name: 'Product / Technical Training' },
  { issuer: 'Logitech', name: 'Product / Technical Training' },
]

export const education = {
  degree: 'B.Tech, Mechanical Engineering',
  institution: 'Priyadarshini College of Engineering and Technology',
  location: 'Nellore, India',
  year: '2019',
}

export const valueProps = [
  {
    title: 'Requirements into real solutions',
    body: 'Site surveys and workshops that turn business needs into AV designs people can actually use.',
  },
  {
    title: 'Right technology for the room',
    body: 'Product comparisons and interoperability checks across OEMs to recommend the best fit — not the default.',
  },
  {
    title: 'Performance within budget',
    body: 'Value engineering that finds alternative technologies and lowers cost without compromising function.',
  },
  {
    title: 'Compliant BOQs & proposals',
    body: 'BOQs, BOMs, specifications and compliance matrices that stand up to RFP, RFQ and tender scrutiny.',
  },
  {
    title: 'One thread across stakeholders',
    body: 'Coordination between clients, consultants, architects, OEMs, sales and project teams on pricing, feasibility and timelines.',
  },
  {
    title: 'Clean handover',
    body: 'Schematics, rack layouts and documentation, with technical guidance through FAT/SAT, commissioning and handover.',
  },
]
