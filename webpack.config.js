const path = require("path");

module.exports = {
    entry: {
        index: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'assets/js/'),
        publicPath: "/public/",
        filename: "script.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|webm)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: false,
                        name: '../images/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(gz|json)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '../files/[name].[ext]'
                    }
                }]
            }
        ]
    }
};
