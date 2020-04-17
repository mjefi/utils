module.exports = {
    roots: ['<rootDir>packages'],
    transform: { '^.+\\.jsx?$': ['babel-jest', { cwd: __dirname }] }
};
