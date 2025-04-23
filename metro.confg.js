module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Add other extensions if needed
  },
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
  },
};
