// Platform detection and exports for @mariner/tailwind-config
const { Platform } = require('react-native');

// Detect platform and export appropriate configuration
function getTailwindConfig() {
  // Check if we're in a web environment
  if (typeof window !== 'undefined') {
    return require('./web.js');
  }
  
  // Check if we're in React Native
  if (Platform && Platform.OS) {
    return require('./native.js');
  }
  
  // Default to web configuration
  return require('./web.js');
}

module.exports = getTailwindConfig();
