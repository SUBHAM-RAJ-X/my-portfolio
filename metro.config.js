const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add web platform support
config.resolver.platforms = ['ios', 'android', 'web', 'native'];

module.exports = config;
