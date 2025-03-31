// src/data/journalContent/visionSection.js

export const visionSection = {
    id: 'vision',
    number: '1',
    title: 'Executive Overview & Vision',
    content: [
      {
        type: 'subheading',
        text: 'Our Core Purpose'
      },
      {
        type: 'paragraph',
        text: 'Καιρός exists to bridge the gap between the deeply personal experience of handwritten journaling and the insights made possible through technology, creating a seamless experience that honors both worlds without compromising either.'
      },
      {
        type: 'highlight',
        title: 'Our Name: Καιρός',
        text: 'From ancient Greek, meaning "the opportune moment" or "the right time for action." In our context, it represents:',
        items: [
          'The perfect moment to bridge analog and digital worlds',
          'The opportune time for meaningful self-reflection',
          'The right balance between technological efficiency and human touch'
        ]
      },
      {
        type: 'subheading',
        text: 'The Problems We\'re Solving'
      },
      {
        type: 'stats',
        items: [
          { value: '80%', label: 'Journals abandoned within first month' },
          { value: '90%', label: 'Entries never revisited for patterns' },
          { value: '7hr', label: 'Average daily screen time (ages 25-40)' },
          { value: '70%+', label: 'Users cite privacy concerns with digital journaling' }
        ]
      },
      {
        type: 'paragraph',
        text: 'We\'ve identified four critical problems in the journaling space:'
      },
      {
        type: 'list',
        items: [
          'The Abandonment Problem: 80% of journals are abandoned within a month of purchase. Users lack structure and guidance to maintain the habit.',
          'The Insight Gap: 90% of handwritten entries are never revisited for patterns. Valuable self-knowledge remains buried in unanalyzed pages.',
          'The Digital Dilemma: Digital journaling increases screen time and anxiety, while handwriting offers neurological benefits that typing can\'t match.',
          'The Structure Deficit: Most journaling practices lack progressive frameworks, leaving users uncertain about "what to write" or "if they\'re doing it right."'
        ]
      },
      {
        type: 'subheading',
        text: 'Our Solution: The Physical-Digital Bridge'
      },
      {
        type: 'paragraph',
        text: 'Καιρός creates a seamless bridge between analog writing and digital insights through:'
      },
      {
        type: 'list',
        items: [
          'NFC-Enabled Journals: Premium physical journals with embedded NFC technology',
          'Smartphone Scanning: Quick scanning of handwritten entries',
          'AI-Powered Analysis: Handwriting recognition with emotional pattern detection',
          'Structured Journey Framework: Guided 10-day journaling paths',
          'Privacy-First Design: Local processing options for sensitive content'
        ]
      },
      {
        type: 'highlight',
        title: 'Key Transformations We Create',
        items: [
          'Scattered thoughts → Structured insights',
          'Abandoned practice → Consistent habit',
          'Uncertainty about progress → Visible growth',
          'One-time reflections → Progressive journeys',
          'Isolated writing → Connected experience'
        ]
      }
    ]
  };