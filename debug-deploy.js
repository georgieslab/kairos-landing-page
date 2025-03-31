// Save this as debug-deploy.js
const fs = require('fs');
const path = require('path');

console.log('Deployment Debug Tool for Kairos Landing Page');
console.log('============================================\n');

// Check if build directory exists
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
  console.error('❌ Error: Build directory not found!');
  console.log('Run npm run build first to create the build directory.');
  process.exit(1);
}

// Check index.html
console.log('Checking index.html...');
const indexPath = path.join(buildDir, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  console.log('✅ index.html exists');
  
  // Check for resource paths
  const cssLinks = indexContent.match(/<link[^>]+\.css/g) || [];
  const jsLinks = indexContent.match(/<script[^>]+\.js/g) || [];
  
  console.log(`Found ${cssLinks.length} CSS links and ${jsLinks.length} JS links`);
  
  console.log('\nCSS links:');
  cssLinks.forEach(link => console.log(` - ${link}`));
  
  console.log('\nJS links:');
  jsLinks.forEach(link => console.log(` - ${link}`));
  
  // Check for PUBLIC_URL
  if (indexContent.includes('%PUBLIC_URL%')) {
    console.error('❌ Error: %PUBLIC_URL% placeholder found in built index.html');
    console.log('This suggests that environment variables are not being properly replaced during build.');
  } else {
    console.log('✅ No %PUBLIC_URL% placeholders found (good)');
  }
} else {
  console.error('❌ Error: index.html not found in build directory!');
}

// Check static directories
console.log('\nChecking static directories...');
const staticDir = path.join(buildDir, 'static');
if (fs.existsSync(staticDir)) {
  const subDirs = fs.readdirSync(staticDir);
  console.log(`Found static subdirectories: ${subDirs.join(', ')}`);
} else {
  console.error('❌ Error: static directory not found in build!');
}

// Check manifest.json
console.log('\nChecking manifest.json...');
const manifestPath = path.join(buildDir, 'manifest.json');
if (fs.existsSync(manifestPath)) {
  console.log('✅ manifest.json exists');
} else {
  console.error('❌ Error: manifest.json not found in build directory!');
}

// Check asset-manifest.json
console.log('\nChecking asset-manifest.json...');
const assetManifestPath = path.join(buildDir, 'asset-manifest.json');
if (fs.existsSync(assetManifestPath)) {
  const assetManifest = JSON.parse(fs.readFileSync(assetManifestPath, 'utf8'));
  console.log('✅ asset-manifest.json exists with entries:');
  
  // Log the main entries
  if (assetManifest.files) {
    console.log(' Main JS: ' + assetManifest.files['main.js']);
    console.log(' Main CSS: ' + assetManifest.files['main.css']);
  } else {
    console.log(' Warning: No "files" property in asset-manifest.json');
  }
} else {
  console.error('❌ Error: asset-manifest.json not found in build directory!');
}

// Final suggestions
console.log('\nDeployment Suggestions:');
console.log('1. Make sure homepage in package.json is set to your GitHub Pages URL');
console.log('2. Verify all asset paths use process.env.PUBLIC_URL');
console.log('3. Use HashRouter instead of BrowserRouter for GitHub Pages compatibility');
console.log('4. Create/fix manifest.json and logo files in public directory');
console.log('5. After deployment, clear browser cache with Ctrl+F5 or Command+Shift+R');
console.log('\nGood luck with your deployment! 🚀');