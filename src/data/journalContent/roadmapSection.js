// src/data/journalContent/roadmapSection.js

export const roadmapSection = {
    id: 'roadmap',
    number: '5',
    title: 'Growth Roadmap',
    content: [
      {
        type: 'subheading',
        text: 'Current Status'
      },
      {
        type: 'paragraph',
        text: 'We\'ve been developing the Καιρός concept for about three weeks, and have achieved:'
      },
      {
        type: 'list',
        items: [
          'Functioning prototype with NFC chip integration',
          'Complete v1.4.0 software release with flexible journey architecture',
          'Seven journaling paths of varying durations (10-100 days)',
          'Three specialized journeys for creativity, habits, and life planning',
          'Adaptive UI system with journey-specific theming',
          'Created visual assets and landing page with NDA functionality',
          'Developed early waitlist with 179+ signups'
        ]
      },
      {
        type: 'subheading',
        text: 'Development Timeline'
      },
      {
        type: 'smallheading',
        text: 'Q2 2025: Validation & Pre-Seed'
      },
      {
        type: 'list',
        items: [
          'Complete working prototype with functional NFC',
          'Secure pre-seed funding of €10,000',
          'Grow waitlist to 500+ potential customers',
          'Conduct user testing with 10-15 beta testers',
          'File provisional patent application'
        ]
      },
      {
        type: 'smallheading',
        text: 'Q3 2025: Seed Funding & Production'
      },
      {
        type: 'list',
        items: [
          'Secure seed funding of €250,000',
          'Launch Kickstarter campaign for initial orders',
          'Establish manufacturing partnerships',
          'Finalize app development for both iOS and Android',
          'Prepare for limited production run'
        ]
      },
      {
        type: 'smallheading',
        text: 'Q4 2025: Launch & Initial Distribution'
      },
      {
        type: 'list',
        items: [
          'Begin first production run (2,000 units)',
          'Launch to waitlist and Kickstarter backers',
          'Establish direct-to-consumer sales channel',
          'Begin outreach to premium retail partners',
          'Start development of add-on products'
        ]
      },
      {
        type: 'smallheading',
        text: '2026: Growth & Expansion'
      },
      {
        type: 'list',
        items: [
          'Scale production to 10,000+ units',
          'Expand to select European retail partners',
          'Launch complete add-on product ecosystem',
          'Develop B2B offering for corporate wellness',
          'Prepare for Series A funding round'
        ]
      },
      {
        type: 'subheading',
        text: 'Key Metrics for Success'
      },
      {
        type: 'stats',
        items: [
          { value: '500+', label: 'Waitlist signups by Q2 2025' },
          { value: '5,000', label: 'Units sold in first year' },
          { value: '40%', label: 'Subscription retention rate' },
          { value: '€750K', label: 'Revenue target for year 1' }
        ]
      }
    ]
  };