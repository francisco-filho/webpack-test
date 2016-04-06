var config = {
    entry: {
        app: ['babel-polyfill', '../client/js/app'],
        type: ['/home/francisco/dev/webpack-app/client/ts/app']
    },
    output: {
        path: '../build',
        filename: '[name]-bundle.js'
    },
    devtool: 'source-map',
    module: {
       loaders: [
        {test: /\.ts$/, loader: 'ts-loader'}
       ] 
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['/home/francisco/dev/webpack-app/node/node_modules'],
    }
}

module.exports = config;
