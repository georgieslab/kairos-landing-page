# Image Dimensions and Aspect Ratio Guide for Καιρός Landing Page

This document provides a comprehensive guide for preparing and optimizing images for the Καιρός landing page and confidential information package to ensure a consistent, professional, and visually appealing user experience.

## General Best Practices

- **File Formats:**
  - Use SVG for logos, icons, and diagrams where possible
  - Use JPG for photographs (90% quality)
  - Use PNG for images that require transparency
  - Use WebP with fallbacks for better performance

- **File Size:**
  - Optimize all images to be under 200KB where possible
  - Use appropriate compression techniques that maintain quality
  - Consider lazy loading for images below the fold

- **Resolution:**
  - All images should be at least 2x the display size for retina displays
  - Minimum resolution for photographs: 72 DPI
  - Preferred resolution for high-quality prints: 300 DPI

## Specific Image Dimensions by Category

### 1. Logo and Brand Elements

| Asset | Dimensions | Aspect Ratio | Format | Notes |
|-------|------------|--------------|--------|-------|
| Καιρός Logo | 800px × 800px | 1:1 | SVG | Primary logo, scalable |
| Favicon | 32px × 32px | 1:1 | ICO/PNG | Multiple sizes in one file |
| App Icon | 512px × 512px | 1:1 | PNG | For PWA and mobile |

### 2. Product Photography

| Asset | Dimensions | Aspect Ratio | Format | Notes |
|-------|------------|--------------|--------|-------|
| Product Hero Shot | 1600px × 900px | 16:9 | JPG | Main product showcase |
| Journal Essential | 800px × 1200px | 2:3 | JPG | Portrait orientation |
| Journal Insight | 800px × 1200px | 2:3 | JPG | Portrait orientation |
| Journal Legacy | 800px × 1200px | 2:3 | JPG | Portrait orientation |
| NFC Scanning | 1200px × 800px | 3:2 | JPG | Landscape orientation |
| Writing Experience | 1200px × 800px | 3:2 | JPG | Landscape orientation |

### 3. Team Photos

| Asset | Dimensions | Aspect Ratio | Format | Notes |
|-------|------------|--------------|--------|-------|
| Founder Portrait | 800px × 800px | 1:1 | JPG | Square, professional |
| Team Photos | 800px × 800px | 1:1 | JPG | Consistent style across team |

### 4. Diagrams and Charts

| Asset | Dimensions | Aspect Ratio | Format | Notes |
|-------|------------|--------------|--------|-------|
| User Flow Diagram | 1200px × 800px | 3:2 | SVG | Scalable vector format |
| System Architecture | 1200px × 800px | 3:2 | SVG | Scalable vector format |
| NFC Implementation | 1000px × 600px | 5:3 | SVG | Scalable vector format |
| Flexible Journey Architecture | 1000px × 600px | 5:3 | SVG | Scalable vector format |

### 5. Charts

| Asset | Dimensions | Aspect Ratio | Format | Notes |
|-------|------------|--------------|--------|-------|
| Revenue Mix Pie Chart | 800px × 800px | 1:1 | SVG/PNG | Circle chart |
| Funding Roadmap Chart | 1000px × 600px | 5:3 | SVG/PNG | Timeline format |
| Use of Funds Pie Chart | 800px × 600px | 4:3 | SVG/PNG | Circle chart |
| Projected Revenue Growth | 1000px × 600px | 5:3 | SVG/PNG | Line or bar chart |

### 6. Landing Page Sections

| Asset | Dimensions | Aspect Ratio | Format | Notes |
|-------|------------|--------------|--------|-------|
| Hero Background | 1920px × 1080px | 16:9 | JPG/WebP | Optimized for fast loading |
| Section Dividers | 1920px × 200px | 19:2 | SVG | Lightweight, scalable |
| Card Images | 600px × 400px | 3:2 | JPG | Consistent across all cards |
| Testimonial Backgrounds | 1200px × 400px | 3:1 | JPG | Subtle, not distracting |

## Image Content Guidelines

### Product Photos

1. **Consistent Lighting:**
   - Use consistent soft, natural lighting
   - Avoid harsh shadows or overexposed areas
   - Consider a light gradient background (white to light gray)

2. **Styling:**
   - Include complementary props that match the brand's aesthetic (wooden surfaces, plants, minimalist desk accessories)
   - Maintain consistent styling across all product photos
   - Ensure journals are shown at the same angle across comparison shots

3. **Context:**
   - Show the product in use where appropriate (hands writing, NFC scanning)
   - Use real scenarios rather than staged studio shots when possible
   - Include environmental context that suggests mindfulness and creativity

### Diagrams and Charts

1. **Color Scheme:**
   - Primary colors should match brand palette
   - Use no more than 5-7 distinct colors for clarity
   - Maintain consistent color meanings across all charts

2. **Typography:**
   - Use the same font family as the main site (Inter)
   - Ensure text is legible at intended display size
   - Minimum font size of 12px for labels

3. **Style:**
   - Maintain consistent line weights and styles
   - Use simple icons rather than complex illustrations
   - Add subtle shadows or depth for important elements

## Responsive Considerations

1. **Mobile Optimization:**
   - Test all images at mobile viewport widths (320px-480px)
   - Consider creating alternate crops for critical images on mobile
   - Ensure text within images remains readable on small screens

2. **Art Direction:**
   - Use the `<picture>` element for important images that need different crops at different screen sizes
   - For product displays, consider single column layouts on mobile vs. grid layouts on desktop

3. **Loading Performance:**
   - Implement responsive image techniques (srcset, sizes)
   - Consider using a CDN for image delivery
   - Enable AVIF or WebP format delivery for supporting browsers

## File Naming Conventions

Use consistent file naming to maintain organization:

- Section specific: `section_name-image_description.format`
- Product specific: `product_tier-image_description.format`
- Charts: `chart-data_description.format`
- Diagrams: `diagram-system_name.format`

Examples:
- `journal_essential-cover.jpg`
- `chart-revenue_breakdown.svg`
- `diagram-user_flow.svg`

## Accessibility Considerations

1. **Alt Text:**
   - Provide descriptive alt text for all images
   - For complex charts, include a text summary in the alt text
   - For decorative images, use empty alt text (alt="")

2. **Color Contrast:**
   - Ensure sufficient contrast between text and background in charts
   - Don't rely solely on color to convey information
   - Test with color blindness simulators

3. **Text in Images:**
   - Minimize text embedded in images
   - If text must be in images, ensure it's also available in the alt text
   - Consider using SVG with actual text elements for better accessibility

## Image Optimization Workflow

1. **Creation:**
   - Create at 2x the final display size
   - Use appropriate color profile (sRGB for web)
   - Export from design software at appropriate quality

2. **Optimization:**
   - Use tools like ImageOptim, TinyPNG, or SVGOMG
   - Remove unnecessary metadata
   - Apply appropriate compression

3. **Implementation:**
   - Use responsive image techniques
   - Implement lazy loading for below-the-fold images
   - Set explicit width and height attributes to prevent layout shifts

By following these guidelines, we'll ensure a consistent, professional, and optimized visual experience across the Καιρός landing page and confidential information package.