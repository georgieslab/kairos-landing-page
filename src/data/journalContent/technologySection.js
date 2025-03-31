// src/data/journalContent/technologySection.js

export const technologySection = {
    id: 'technology',
    number: '3',
    title: 'Technical Innovation',
    content: [
      {
        type: 'subheading',
        text: 'System Architecture'
      },
      {
        type: 'paragraph',
        text: 'The Καιρός system creates a seamless bridge between physical journals and digital analysis through our proprietary architecture, now enhanced with a centralized journey registry:'
      },
      {
        type: 'list',
        items: [
          'Centralized Journey Registry: Core architecture enabling easy addition of new paths with minimal code changes',
          'Flexible Path Architecture: Support for paths of varied durations (10, 14, 21, 30, and 100 days)',
          'Dynamic Content Delivery: Intelligent day grouping and themed presentation',
          'Multi-tier Privacy Model: User control over data processing with flexible options'
        ]
      },
      {
        type: 'chart',
        src: '/static/diagrams/system-architecture-diagram.svg',
        alt: 'System Architecture Diagram'
      },
      {
        type: 'subheading',
        text: 'NFC Implementation'
      },
      {
        type: 'paragraph',
        text: 'Our NFC implementation contains several innovative elements that elevate it beyond standard NFC applications:'
      },
      {
        type: 'list',
        items: [
          'Dynamic URL Routing: Unlike static NFC tags, our system generates context-aware deep links',
          'Cross-Device Continuity: Session state maintained across multiple devices',
          'Progressive Authentication: Tiered access with optional privacy modes',
          'Offline Capability: Functions without internet connection',
          'Hardware-Software Binding: Physical journal linked to digital account securely'
        ]
      },
      {
        type: 'chart',
        src: '/static/diagrams/nfc-implementation-diagram.svg',
        alt: 'NFC Implementation Diagram'
      },
      {
        type: 'subheading',
        text: 'Handwriting Recognition System'
      },
      {
        type: 'paragraph',
        text: 'The Καιρός handwriting analysis system employs a custom-trained machine learning model specifically optimized for journal entries:'
      },
      {
        type: 'list',
        items: [
          'Handles varied handwriting styles with 92%+ accuracy',
          'Preserves semantic meaning over literal transcription',
          'Recognizes emotional indicators from pressure and style',
          'Maintains connection between visual elements and text',
          'Adapts to individual user\'s handwriting over time',
          'Operates partially or fully on-device for privacy'
        ]
      },
      {
        type: 'subheading',
        text: 'Privacy Architecture'
      },
      {
        type: 'paragraph',
        text: 'A core innovation is our tiered privacy model that puts users in control of their data:'
      },
      {
        type: 'list',
        items: [
          'Level 1: Complete local processing (no cloud)',
          'Level 2: Anonymized pattern analysis only',
          'Level 3: Full cloud processing with encryption',
          'Level 4: Secure sharing with selected mentors/coaches'
        ]
      },
      {
        type: 'highlight',
        title: 'Intellectual Property Protection',
        text: 'Our technology is protected through a comprehensive IP strategy:',
        items: [
          'Provisional patent application filed for the integrated physical-digital journaling system',
          'Trademark protection for "Καιρός" in relation to journaling products',
          'Software copyright for the handwriting analysis algorithm',
          'Trade secrets protection for the journey framework methodology'
        ]
      }
    ]
  };