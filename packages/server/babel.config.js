module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: '10.16.2' } }]
    ],
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import'
    ]
};
