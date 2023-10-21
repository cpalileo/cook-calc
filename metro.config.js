const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    ...defaultConfig,
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(
        (ext) => ext !== 'svg'
      ), // Modify asset extensions if needed
    },
    // Add any additional configuration here
  };
})();
