exports.config = {
  namespace: 'uiavatar',
  generateDistribution: true,
  bundles: [
    { components: ['ui-avatar'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
