const mix = require('laravel-mix');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');

let css_plugin = 'public/frontend/css/';
let js_plugin = 'public/frontend/js/';
mix.setResourceRoot(process.env.MIX_ASSET_URL);

mix.js('resources/js/app.js', 'public/frontend/js')
    .vue().combine([
    css_plugin + 'bootstrap.min.css',
    css_plugin + 'animate.min.css',
    css_plugin + 'structure.css',
    css_plugin + 'main.css',
    css_plugin + 'development.css',
    css_plugin + 'responsive.css',
    css_plugin + 'vue-plyr.css',
], 'public/frontend/css/app.css').combine([
    js_plugin + 'html5shiv.min.js',
    js_plugin + 'respond.min.js',
], 'public/frontend/js/plugin.js').webpackConfig({
    devtool: 'inline-source-map',
    output: {
        chunkFilename: "public/frontend/js/chunks-152/[name].[chunkhash].js",
        publicPath: 'auto',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        // new BundleAnalyzerPlugin(),      // load this package to see which plugins with its size detail
        new CompressionPlugin({             // very import to compress the assets
            filename: "[path][base].gz",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$|\.svg$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
}).sourceMaps();

mix.js('resources/js/admin.js', 'public/admin/js/app.js');


mix.version();
mix.disableNotifications();