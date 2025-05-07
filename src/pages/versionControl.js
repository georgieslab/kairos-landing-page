// src/utils/versionControl.js

export const APP_VERSION = '0.6.3';

export const VERSION_HISTORY = [
  {
    version: '0.1.0',
    releaseDate: '2025-02-15',
    features: [
      'Initial release with Self-Discovery journey',
      'AI-powered journal analysis',
      'Handwriting recognition',
      'Journey completion analysis'
    ],
    bugFixes: []
  },
  {
    version: '0.1.1',
    releaseDate: '2025-03-04',
    features: [
      '3 different 10 days journey for free users',
      'New premium "coming soon" journey available',
      'UI improvements',
    ],
    bugFixes: [
      'fixed image/text extraction bug'
    ]
  },
  {
    version: '0.2.0',
    releaseDate: '2025-03-09',
    features: [
      '3 different 10-day journaling paths available for all users',
      'Enhanced path progress tracking and visualization',
      'Improved navigation between journaling paths',
      'Smarter day tracking that remembers your progress',
      'New premium "coming soon" journeys preview',
      'More detailed analytics on your journaling patterns',
      'Offline support for journal uploads'
    ],
    bugFixes: [
      'Fixed "Continue Journey" navigation issues',
      'Improved reliability of text extraction from journal images',
      'Fixed incorrect day display in Write tab',
      'Resolved Firestore permission issues with image uploads',
      'Fixed journey preview to respect user progress',
      'Improved error handling throughout the app',
      'Enhanced data loading with better fallback options'
    ],
    improvements: [
      'Faster journaling analysis with Claude 3.7 Sonnet',
      'Smoother transitions between screens',
      'More detailed instructions for each journaling day',
      'Enhanced user interface for path selection',
      'Better display of completed days and progress'
    ],
    notes: [
      'This update focuses on improving the core user journey and fixing navigation issues',
      'For the best experience, please ensure you have an active internet connection when analyzing journal entries',
      'Your journaling data is now automatically synced when you come back online after writing in offline mode'
    ]
  },
  {
    version: '0.3.0',
    releaseDate: '2025-03-10',
    features: [
      'New 21-day "Transformation Journey: Breaking Patterns" recovery path',
      'Enhanced analytics system with intelligent caching',
      'Specialized recovery resources and support information',
      'Teal color scheme for the Transformation Journey experience',
      'Special disclaimer system for sensitive journaling topics',
      'Support for different journey lengths (10-day and 21-day paths)',
      'Add-on product catalog with premium journaling accessories',
      'Automatic analytics refresh when new journal entries are made'
    ],
    bugFixes: [
      'Fixed analytics tab data refreshing unnecessarily',
      'Resolved timestamp handling issues in calendar visualization',
      'Fixed infinite loop bug when viewing journey details',
      'Corrected navigation issues between different path lengths',
      'Improved date and time handling for journal entries',
      'Fixed cache persistence issues between sessions',
      'Resolved path selection navigation edge cases'
    ],
    improvements: [
      'Optimized API usage with intelligent caching system',
      'Enhanced navigation between different journey path types',
      'Improved progress tracking for longer journeys',
      'Better performance on analytics tab with caching',
      'Enhanced visualization handling for date-based analytics',
      'More descriptive journey details and path information',
      'Smoother experience when switching between analytics views'
    ],
    notes: [
      'The new Transformation Journey is designed to support pattern-breaking and recovery',
      'This update significantly improves performance for users with many journal entries',
      'The 21-day journey offers a more comprehensive experience for serious journalers',
      'For users in recovery: journaling is a supplement to, not replacement for, professional support',
      'Links to professional resources are available within the Transformation Journey',
      'All analytics are now cached locally for improved privacy and performance'
    ]
  },
  {
    version: "0.4.0",
    releaseDate: "2025-03-16",
    features: [
      "Flexible journey path architecture supporting varied durations (10, 14, 21, 30, and 100 days)",
      "New 14-day 'Creative Expression' journey for developing artistic practice",
      "New 30-day 'Habit Formation' journey for establishing lasting behavior changes",
      "Premium 100-day 'Life Vision & Purpose' comprehensive life planning journey",
      "Path filtering system (All, In Progress, Not Started, by duration)",
      "Complete 21-day Transformation Journey with recovery focus",
      "Expanded Premium Journeys section with 8 upcoming specialized paths",
      "Dynamic UI that adapts to journey length with intelligent day grouping",
      "Journey-specific color theming and iconography system",
      "Centralized path registry for easy future expansion"
    ],
    bugFixes: [
      "Fixed infinite loop issue in path selection component",
      "Resolved auto-expanding issue with self-discovery path",
      "Fixed path details toggle behavior across all journey types",
      "Corrected styling issues with filter buttons",
      "Fixed React key warnings for journey path lists",
      "Resolved syntax errors in component descriptions",
      "Fixed event bubbling issues with path action buttons",
      "Corrected edge cases in journey day completion tracking",
      "Fixed memory leaks in path selection rendering",
      "Resolved inconsistent state updates in expanded path views"
    ],
    improvements: [
      "Optimized state management with useMemo hooks for better performance",
      "Enhanced path navigation between different journey lengths",
      "Improved progress visualization for longer journeys",
      "Streamlined path addition process requiring changes to only one file",
      "Better responsive design for path selection on all devices",
      "Intelligence pagination for journeys longer than 20 days",
      "Enhanced path completion status visualization",
      "More descriptive journey details with difficulty levels and duration indicators",
      "Smoother transitions between expanded and collapsed path views",
      "Improved accessibility with ARIA attributes on interactive elements"
    ],
    notes: [
      "The flexible architecture allows for journeys of any length from 1-100+ days",
      "The 100-day Life Vision journey guides users through comprehensive life planning with 10 thematic sections",
      "Premium paths provide a preview of upcoming features in the Premium subscription",
      "Each journey has a consistent theme structure regardless of length",
      "Long journeys (>20 days) display intelligently to avoid overwhelming users",
      "The new path filtering system helps users find journeys based on their needs and time commitment",
      "All new journeys feature unique color schemes and icons that reflect their themes",
      "Future journeys can now be added with minimal code changes thanks to the registry architecture",
      "Path progress is consistently tracked across all journey lengths",
      "The Creative Expression journey helps users overcome creative blocks and establish artistic practice"
    ]
  },
  {
    version: '0.5.0',
    releaseDate: '2025-02-15',
    features: [
      'Export journal entries to PDF',
      'Text Extraction Enhancements',
    ],
    bugFixes: []
  },
  {
    version: '0.5.1',
    releaseDate: '2025-04-05',
    features: [
      'PDF export functionality for completed journeys',
      'Enhanced multi-page journal support (up to 2 pages per entry)',
      'Improved journey completion experience',
      'Active journey tracking with streak counter',
      'Updated profile page with journey progress visualization'
    ],
    bugFixes: [
      'Fixed text extraction issues with various image formats',
      'Resolved navigation issues between different journeys',
      'Improved handling of Claude API responses',
      'Fixed incorrect prompt display on homepage',
      'Enhanced error handling during image processing'
    ]
  },
  {
    version: '0.5.2',
    releaseDate: '2025-04-24',
    features: [
      'Universal path handling architecture for consistent journey tracking',
      'Improved current path synchronization across all components',
      'Enhanced Firebase integration for journey progress storage',
      'Context-aware journey UI that displays correct path information',
      'Transformation Journey disclaimer with improved accessibility'
    ],
    bugFixes: [
      'Fixed journey completion screen loop when viewing completed paths',
      'Resolved "Cannot access M before initialization" module error',
      'Fixed Transformation Journey disclaimer button functionality',
      'Corrected path display inconsistencies between home screen and write tab',
      'Fixed path context synchronization issues across components',
      'Improved handling of multiple active journeys'
    ],
    improvements: [
      'Centralized path registry for consistent path identification',
      'Enhanced path progress tracking with standardized field names',
      'Safer initialization patterns for better error handling',
      'More robust navigation state management',
      'Better debug logging for troubleshooting',
      'Improved backward compatibility for legacy path structures'
    ],
    notes: [
      'This update focuses on journey context consistency and navigation stability',
      'Path selection now properly updates the current path in your profile',
      'All components now display the correct path information consistently',
      'Added ability to switch between journeys with confirmation',
      'Fixed multiple journey paths appearing active simultaneously'
    ]
  },
  {
    version: '0.5.3',
    releaseDate: '2025-04-26',
    features: [
      'Enhanced PDF export with improved visual design',
      'New Καιρός branding throughout exported documents',
      'Text export option for journal entries'
    ],
    bugFixes: [
      'Fixed journey completion data display issues',
      'Resolved logo display problems in PDF exports',
      'Fixed overlapping text in "Your Affirmation" and "Next Steps" sections',
      'Corrected theme tags rendering in completion screen',
      'Fixed validation issues with completion analysis data',
      'Addressed missing data in journey completion screen'
    ],
    improvements: [
      'More lenient validation of completion data for better user experience',
      'Enhanced error handling for PDF generation',
      'Better spacing and typography in exported documents',
      'Improved rendering of journey analysis sections',
      'More robust fallbacks for missing completion data',
      'Consistent export options across all journey paths',
      'Better progress reporting during export process'
    ],
    notes: [
      'This update focuses on improving the journey completion experience and export functionality',
      'PDF exports now include high-quality Καιρός branding and logos',
      'Journey completion now shows all insights and themes consistently',
      'The export process provides clearer feedback on progress',
      'Exports now support both PDF and plain text formats for flexibility'
    ]
  },
  {
    version: '0.5.4',
    releaseDate: '2025-05-02',
    features: [
      'Persistent back button in daily journey view for easier navigation',
      'Redesigned journey day view with enhanced visual styling',
      'Improved path theme integration throughout journal screens',
      'Visual Enhancements & Animations'
    ],
    bugFixes: [
      'Fixed navigation issue where viewing archived entries showed blank screens',
      'Resolved bottom navigation indicator not highlighting correctly on daily view',
      'Fixed journey context reset issues when navigating between day views',
      'Corrected view context problems causing entries not to load properly',
      'Fixed data fetching logic to properly reset when changing viewing contexts'
    ],
    improvements: [
      'Completely redesigned day journey view with enhanced typography and layout',
      'Better visual hierarchy for daily prompts and entry information',
      'Improved navigation between day entries with smoother transitions',
      'More consistent path color theming across all journey components',
      'Enhanced loading states with animated indicators',
      'Design Improvements for Home Screen',
      'Better error handling for journal entry loading',
      'Clearer content organization for journal entries and analysis',
      'Improved responsive design for all screen sizes'
    ],
    notes: [
      'This update focuses on navigation improvements and visual refinements',
      'The daily journey view now shows a back button for easier path navigation',
      'Bottom navigation now correctly indicates which section you\'re in',
      'The redesigned day view provides a more immersive journaling experience',
      'Journal archives can now be viewed reliably without navigation issues',
      'Path colors are now consistently applied throughout the journey experience'
    ]
  },
  {
    version: '0.5.5',
    releaseDate: '2025-05-04',
    features: [
      'Enhanced version display with changelog history',
      'Redesigned analytics dashboard with improved visualizations',
      'Updated visualization components with better data handling'
    ],
    bugFixes: [
      'Fixed overlapping "Your Journaling Habits" title in calendar visualization',
      'Resolved spacing issue between "Entry Count" legend and "Current Streak" metrics', 
      'Fixed duplicate headings in Emotions tab analytics',
      'Corrected text cutoff issues in journal entry summaries',
      'Fixed theme cloud visualization layout issues',
      'Resolved inconsistent spacing in analytics cards',
      'Fixed bar chart label alignment in emotion analytics'
    ],
    improvements: [
      'Added proper spacing between visualization components',
      'Enhanced calendar component with better title handling',
      'Improved spacing in consistency metrics section',
      'Better visual hierarchy for analytics dashboard sections',
      'Added animated transitions between analytics tabs',
      'Enhanced responsive design for all analytics components',
      'Optimized data processing for faster visualization rendering',
      'More consistent styling across all analytics visualizations'
    ],
    notes: [
      'This update focuses on visual refinements to the analytics dashboard',
      'Analytics visualizations now properly handle all data types and edge cases',
      'The new version display makes it easier to track app changes and improvements',
      'All analytics components now maintain proper spacing and avoid overlapping elements',
      'Visualizations now respond better to different screen sizes and data volumes'
    ]
  },
  {
    version: '0.6.0',
    releaseDate: '2025-05-10',
    features: [
      'Multi-image upload support (up to 5 pages per entry)',
      'User choice between single and multiple page uploads',
      'Enhanced analysis for multi-page journal entries'
    ],
    bugFixes: [
      'Fixed issues with image upload limits in previous versions',
      'Resolved text extraction errors for multi-page entries'
    ],
    improvements: [
      'Streamlined upload process with clearer user options',
      'Optimized performance for processing multiple images',
      'Enhanced UI feedback during multi-page analysis'
    ],
    notes: [
      'This update significantly enhances the journaling experience by allowing more flexible entry formats',
      'Users can now upload up to 5 images per journal entry for more comprehensive daily reflections',
      'The analysis system has been upgraded to handle multi-page entries seamlessly'
    ]
  },
  {
    version: '0.6.1',
    releaseDate: '2025-05-15',
    features: [
      'Unified journal upload interface combining single and multi-page options',
      'Automatic text extraction for all uploaded journal images',
      'Streamlined two-step upload process (Upload → Review & Submit)',
      'Enhanced multi-page preview with thumbnail navigation',
      'Text editing capabilities for refined journal entries'
    ],
    bugFixes: [
      'Fixed issue where upload interface showed incorrect stages',
      'Resolved navigation problems between upload steps',
      'Fixed inconsistent text extraction for multi-page entries',
      'Corrected visual issues with image carousel controls'
    ],
    improvements: [
      'Simplified user experience by removing unnecessary decision points',
      'Enhanced visual feedback during text extraction and upload processes',
      'Optimized file handling for smoother multi-page uploads',
      'Improved accessibility of image controls and navigation',
      'Better error handling with clearer user messages'
    ],
    notes: [
      'This update refines the multi-page upload experience introduced in version 0.6.0',
      'Users no longer need to choose between single and multi-page uploads upfront',
      'Journal entries now automatically include extracted text for better analysis and record-keeping',
      'The simplified interface makes journaling more intuitive while maintaining advanced functionality'
    ]
  },
  {
    version: '0.6.2',
    releaseDate: '2025-05-20',
    features: [
      'Improved multi-page journal upload with user-initiated text extraction',
      'New "Upload and Analyze" button for greater control over image processing',
      'Enhanced visual feedback during the upload and extraction process'
    ],
    bugFixes: [
      'Fixed issue with automatic text extraction starting immediately after image upload',
      'Improved error handling during the extraction process',
      'Resolved UI inconsistencies in the upload flow'
    ],
    improvements: [
      'More intuitive journal upload workflow with clear step progression',
      'Better user guidance with explanatory text at each stage',
      'Enhanced styling for action buttons and interactive elements',
      'Improved responsiveness of upload interface on smaller screens'
    ],
    notes: [
      'This update provides greater user control over the journal analysis process',
      'Users can now add all desired images before initiating the text extraction',
      'The improved flow helps users understand each step in the journaling process',
      'This change addresses user feedback about wanting more control over when processing begins'
    ]
  },
  {
    version: '0.6.3',
    releaseDate: '2025-05-25',
    features: [
      'Enhanced visual design for the daily journal prompt interface',
      'Improved WriteTab with more intuitive prompt styling',
      'New pill-style day heading with clearer visual hierarchy',
      'Refined quotation styling for journal prompts'
    ],
    bugFixes: [
      'Fixed blurry icon rendering in journal entry buttons',
      'Resolved inconsistent styling in day titles and theme indicators',
      'Fixed animation issues causing UI jitter on some devices',
      'Corrected padding and alignment issues in prompt containers'
    ],
    improvements: [
      'Added meaningful icons throughout the journaling interface',
      'Enhanced typography with better readability and contrast',
      'Improved color scheme for prompt themes and indicators',
      'More consistent visual styling across all journey paths',
      'Enhanced mobile experience with better button sizing and spacing',
      'Optimized animations for smoother performance on all devices',
      'Added CSS variables for easier theming and maintenance'
    ],
    notes: [
      'This update focuses on visual refinements to improve the journaling experience',
      'The day title now appears in a distinctive pill-shaped container for better visibility',
      'Prompt text is now styled with clear quotation marks and improved readability',
      'The new design creates a more cohesive and premium feel across the application'
    ]
  }
];

/**
 * Get current version information
 * @returns {Object} Current version details
 */
export const getCurrentVersionInfo = () => {
  return VERSION_HISTORY.find(v => v.version === APP_VERSION) || VERSION_HISTORY[0];
};

/**
 * Check if the current version is the latest
 * @returns {boolean} True if using the latest version
 */
export const isLatestVersion = () => {
  const latestVersion = VERSION_HISTORY[VERSION_HISTORY.length - 1].version;
  return APP_VERSION === latestVersion;
};

export default {
  APP_VERSION,
  VERSION_HISTORY,
  getCurrentVersionInfo,
  isLatestVersion
};