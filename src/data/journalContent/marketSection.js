// src/data/journalContent/marketSection.js

export const marketSection = {
    id: 'market',
    number: '4',
    title: 'Market & Business Model',
    content: [
      {
        type: 'subheading',
        text: 'Target Market'
      },
      {
        type: 'paragraph',
        text: 'Our solution is designed primarily for:'
      },
      {
        type: 'list',
        items: [
          'Age: 25-40 years old (Millennials and Gen Z)',
          'Mindset: Values both technology and meaningful analog experiences',
          'Behaviors: Has attempted journaling before but struggled with consistency',
          'Desires: Seeks personal growth, mindfulness, and self-understanding',
          'Frustrations: Feels torn between digital efficiency and screen-free experiences'
        ]
      },
      {
        type: 'subheading',
        text: 'Market Size & Opportunity'
      },
      {
        type: 'stats',
        items: [
          { value: '€150-160B', label: 'Global stationery market size' },
          { value: '€1-5B', label: 'Premium journal segment' },
          { value: '€10-15B', label: 'Wellness app market size' },
          { value: '20-30%', label: 'Millennials & Gen Z journaling adoption' }
        ]
      },
      {
        type: 'highlight',
        title: 'Competitive Landscape',
        text: 'The journaling market is fragmented with no dominant player bridging physical and digital:',
        items: [
          'Traditional Journal Brands: Moleskine, Leuchtturm1917, Papier (no digital component)',
          'Digital Journaling Apps: Day One, Journey, Daylio (no physical component)',
          'Limited Bridge Attempts: Rocketbook, Moleskine Smart Writing Set (focus on replication, not enhancement)'
        ]
      },
      {
        type: 'paragraph',
        text: 'Καιρός stands apart by creating true enhancement of the writing experience rather than just digitization.'
      },
      {
        type: 'subheading',
        text: 'Business Model'
      },
      {
        type: 'smallheading',
        text: 'Revenue Streams'
      },
      {
        type: 'list',
        items: [
          'Physical Products: One-time purchases of journals and accessories (€79-499)',
          'Digital Subscriptions: Monthly recurring revenue (€9.99-19.99/month)',
          'B2B Partnerships: Team packages and organizational implementations',
          'Expanded Accessories: Additional journals, pens, and complementary items'
        ]
      },
      {
        type: 'chart',
        src: '/static/charts/revenue-mix-pie-chart.svg',
        alt: 'Revenue Mix Pie Chart'
      },
      {
        type: 'smallheading',
        text: 'Unit Economics (Industry-Validated)'
      },
      {
        type: 'list',
        items: [
          'Journal Gross Margin: 40% (aligned with premium stationery industry averages)',
          'Subscription Gross Margin: 80-85% (after infrastructure costs)',
          'Customer Acquisition Cost (CAC): €37',
          'Lifetime Value (LTV): €111',
          'LTV:CAC Ratio: 3:1 (industry standard for sustainable growth)'
        ]
      }
    ]
  };