export type EventDetail = {
  slug: string;
  title: string;
  date: { day: string; month: string; year: string };
  time: string;
  location: string;
  image: string;
  shortDescription: string;
  overview: string;
  objectives: string[];
  agenda: string[];
  audience: string[];
  outcomes: string[];
  ctaLabel: string;
};

export const eventDetails: EventDetail[] = [
  {
    slug: 'self-management-leadership',
    title: 'Self Management Leadership',
    date: { day: '15', month: 'AUG', year: '2026' },
    time: '8:00 am - 12:30 pm',
    location: 'Ananda Pashupati Dharmashala, Kathmandu',
    image: '/images/events/self-management.jpg',
    shortDescription:
      'A leadership program focused on self-management, positive thinking, and personal discipline.',
    overview:
      'This program is designed to help participants build discipline, strengthen decision-making, and develop the inner confidence needed to lead with clarity and compassion. The session combines guided reflection, practical learning, and interactive discussion to encourage responsible leadership in daily life.',
    objectives: [
      'Develop self-awareness and personal accountability.',
      'Learn practical techniques for disciplined living.',
      'Strengthen communication and emotional balance.',
      'Encourage positive decision-making in challenging situations.',
    ],
    agenda: [
      'Welcome and opening reflection',
      'Session on self-management and habits',
      'Interactive leadership exercises',
      'Group discussion and Q&A',
      'Closing remarks and commitment activity',
    ],
    audience: [
      'Youth participants',
      'Volunteer members',
      'Students and emerging leaders',
      'Anyone interested in personal growth',
    ],
    outcomes: [
      'A clearer personal leadership mindset',
      'Practical tools for daily self-management',
      'Improved confidence in team settings',
    ],
    ctaLabel: 'Register for this Program',
  },
  {
    slug: 'youth-empowerment-workshop',
    title: 'Youth Empowerment Workshop',
    date: { day: '20', month: 'AUG', year: '2026' },
    time: '10:00 am - 4:00 pm',
    location: 'LPM Training Hall, Kathmandu',
    image: '/images/events/1.jpg',
    shortDescription:
      'A workshop focused on developing leadership skills, positive mindset, and career guidance for youth.',
    overview:
      'The Youth Empowerment Workshop is built to support young people as they prepare for study, work, and community leadership. The event offers practical guidance, motivational talks, and collaborative exercises that help participants discover their strengths and build confidence.',
    objectives: [
      'Introduce practical leadership foundations for youth.',
      'Support career awareness and goal setting.',
      'Encourage teamwork and communication.',
      'Build confidence through guided activities.',
    ],
    agenda: [
      'Registration and welcome session',
      'Motivational talk on youth leadership',
      'Career guidance and goal-setting activity',
      'Group work and peer discussion',
      'Closing feedback and next steps',
    ],
    audience: [
      'School and college students',
      'Young volunteers',
      'Community youth groups',
      'First-time workshop participants',
    ],
    outcomes: [
      'Greater clarity about personal goals',
      'Improved confidence in public speaking',
      'A practical action plan for growth',
    ],
    ctaLabel: 'Join the Workshop',
  },
  {
    slug: 'spiritual-awakening-program',
    title: 'Spiritual Awakening Program',
    date: { day: '25', month: 'AUG', year: '2026' },
    time: '6:00 am - 9:00 am',
    location: 'Pashupatinath Temple Area',
    image: '/images/events/hero.jpg',
    shortDescription:
      'Guided meditation and mindfulness sessions for spiritual growth and inner peace.',
    overview:
      'This early-morning gathering creates space for reflection, calm breathing, and mindful connection. Participants are guided through simple practices that support inner peace, emotional balance, and a stronger sense of purpose.',
    objectives: [
      'Introduce simple meditation and mindfulness practices.',
      'Create a peaceful shared spiritual experience.',
      'Encourage reflective thinking and gratitude.',
      'Support emotional balance and calm focus.',
    ],
    agenda: [
      'Opening prayer and welcome',
      'Guided meditation session',
      'Mindfulness talk and reflection',
      'Group sharing and closing blessing',
    ],
    audience: [
      'Spiritual seekers',
      'Volunteer teams',
      'Community members',
      'Anyone seeking a quiet morning practice',
    ],
    outcomes: [
      'A calmer and more focused mindset',
      'Basic mindfulness tools for daily life',
      'A deeper connection to shared purpose',
    ],
    ctaLabel: 'Reserve Your Spot',
  },
  {
    slug: 'entrepreneurship-development-meet',
    title: 'Entrepreneurship Development Meet',
    date: { day: '10', month: 'SEP', year: '2026' },
    time: '1:00 pm - 5:00 pm',
    location: 'Kathmandu University Hall',
    image: '/images/events/30.webp',
    shortDescription:
      'A networking and mentoring meet designed to support aspiring entrepreneurs and local innovation.',
    overview:
      'The Entrepreneurship Development Meet brings together mentors, students, and young professionals to discuss ideas, opportunities, and practical steps for building sustainable ventures. The session encourages innovation, collaboration, and community-centered business thinking.',
    objectives: [
      'Introduce entrepreneurial thinking and problem solving.',
      'Connect participants with mentors and peers.',
      'Share practical lessons on starting small initiatives.',
      'Encourage ethical and community-focused growth.',
    ],
    agenda: [
      'Welcome and introduction',
      'Panel discussion with mentors',
      'Business idea sharing session',
      'Networking and feedback round',
      'Closing summary and next steps',
    ],
    audience: [
      'Aspiring entrepreneurs',
      'Students and graduates',
      'Community leaders',
      'Small business starters',
    ],
    outcomes: [
      'Actionable business inspiration',
      'Connections with mentors and peers',
      'Greater confidence in building ideas',
    ],
    ctaLabel: 'Attend the Meet',
  },
  {
    slug: 'leadership-training-for-youth',
    title: 'Leadership Training for Youth',
    date: { day: '15', month: 'SEP', year: '2026' },
    time: '8:00 am - 12:30 pm',
    location: 'LPM Training Center',
    image: '/images/events/2.jpg',
    shortDescription:
      'A transformational program focused on communication, discipline, and future leadership.',
    overview:
      'This training strengthens the personal and social skills that young people need to become reliable leaders. It blends practical exercises with reflection so that participants can improve teamwork, communication, and positive influence in their communities.',
    objectives: [
      'Build leadership confidence and accountability.',
      'Practice communication and teamwork skills.',
      'Encourage positive habits and discipline.',
      'Prepare youth for community service roles.',
    ],
    agenda: [
      'Opening circle and introduction',
      'Communication skills session',
      'Team challenge and reflection',
      'Leadership planning activity',
      'Closing commitment and photo session',
    ],
    audience: [
      'Youth volunteers',
      'Student leaders',
      'New members of LPM',
      'Community youth representatives',
    ],
    outcomes: [
      'Improved leadership readiness',
      'Better collaboration and communication',
      'A stronger sense of service and purpose',
    ],
    ctaLabel: 'Join the Training',
  },
  {
    slug: 'traffic-awareness-campaign',
    title: 'Traffic Awareness Campaign',
    date: { day: '22', month: 'SEP', year: '2026' },
    time: '10:00 am - 2:00 pm',
    location: 'Major Intersections, Kathmandu',
    image: '/images/events/hero.jpg',
    shortDescription:
      'A public outreach campaign to promote road safety and traffic discipline.',
    overview:
      'The Traffic Awareness Campaign is a community outreach effort focused on safe road behavior and responsible civic action. Volunteers will work with the public to share practical reminders about traffic rules, pedestrian safety, and mutual respect on the road.',
    objectives: [
      'Promote safe driving and pedestrian habits.',
      'Increase awareness of road safety rules.',
      'Encourage community cooperation with local authorities.',
      'Support public safety through direct outreach.',
    ],
    agenda: [
      'Volunteer briefing and safety instructions',
      'Distribution of awareness materials',
      'Public engagement and traffic reminders',
      'Wrap-up and reporting',
    ],
    audience: [
      'Volunteers',
      'Local residents',
      'Drivers and commuters',
      'Community safety partners',
    ],
    outcomes: [
      'Greater public awareness of road safety',
      'More responsible travel behavior',
      'A visible community safety presence',
    ],
    ctaLabel: 'Support the Campaign',
  },
  {
    slug: 'cultural-harmony-meet',
    title: 'Cultural Harmony Meet',
    date: { day: '5', month: 'OCT', year: '2026' },
    time: '4:00 pm - 7:00 pm',
    location: 'Nepal-India Friendship Hall',
    image: '/images/events/30.webp',
    shortDescription:
      'A cultural exchange gathering promoting harmony, respect, and shared understanding.',
    overview:
      'The Cultural Harmony Meet celebrates diversity and encourages respectful dialogue between communities. Through shared stories, performances, and interaction, participants can build appreciation for different backgrounds while strengthening social connection.',
    objectives: [
      'Encourage respect between communities and cultures.',
      'Create a warm environment for sharing and dialogue.',
      'Highlight the value of diversity and unity.',
      'Strengthen friendship through cultural exchange.',
    ],
    agenda: [
      'Opening welcome and introductions',
      'Cultural presentation and performances',
      'Dialogue and exchange session',
      'Group reflection and closing remarks',
    ],
    audience: [
      'Community leaders',
      'Students and families',
      'Cultural groups',
      'Anyone interested in social harmony',
    ],
    outcomes: [
      'A stronger sense of community unity',
      'More cultural understanding and respect',
      'Lasting relationships across groups',
    ],
    ctaLabel: 'Attend the Meet',
  },
];

export function getEventBySlug(slug: string) {
  return eventDetails.find((event) => event.slug === slug);
}
