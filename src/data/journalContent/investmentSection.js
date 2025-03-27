// src/data/journalContent/investmentSection.js

export const investmentSection = {
    id: 'investment',
    number: '6',
    title: 'Investment Opportunity',
    content: [
      {
        type: 'subheading',
        text: 'Funding Strategy'
      },
      {
        type: 'chart',
        src: '/static/charts/funding-roadmap-chart.svg',
        alt: 'Funding Roadmap Chart'
      },
      {
        type: 'paragraph',
        text: 'We are taking a staged approach to funding to maximize value creation at each step:'
      },
      {
        type: 'smallheading',
        text: 'Current Funding Round Details'
      },
      {
        type: 'highlight',
        title: 'Pre-Seed Round Details',
        items: [
          'Raising: €10,000',
          'Instrument: Convertible note with 20% discount at seed',
          'Minimum Investment: €2,000',
          'Use of Funds: Production-ready prototype, app development, IP protection',
          'Timeline: Closing by April 2025'
        ]
      },
      {
        type: 'subheading',
        text: 'Financial Projections'
      },
      {
        type: 'paragraph',
        text: 'Based on validated industry metrics:'
      },
      {
        type: 'chart',
        src: '/static/charts/revenue-growth-chart.svg',
        alt: 'Revenue Growth Chart'
      },
      {
        type: 'subheading',
        text: 'Use of Funds'
      },
      {
        type: 'chart',
        src: '/static/charts/use-of-funds-pie-chart-final.svg',
        alt: 'Use of Funds Pie Chart'
      },
      {
        type: 'paragraph',
        text: 'The pre-seed investment will be allocated to:'
      },
      {
        type: 'list',
        items: [
          '40% - Product Development: Finalize NFC implementation, create production-ready prototypes',
          '30% - Software Development: Complete core app functionality for both iOS and Android',
          '15% - IP Protection: File provisional patent, trademark registration',
          '10% - Marketing: Grow waitlist, create professional photography and video',
          '5% - Operations: Legal, administrative, and business development'
        ]
      }
    ]
  };