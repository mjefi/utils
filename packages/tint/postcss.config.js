module.exports = {
    browsers: "last 2 versions",
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 3,
            features: {
                'nesting-rules': true
            }
        }),
        require('autoprefixer')
    ]
};
