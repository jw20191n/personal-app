const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        style: 'css',
    }),
    addLessLoader({
        //not sure how this works
         lessOptions: {
             javascriptEnabled: true,
         }
    })
)