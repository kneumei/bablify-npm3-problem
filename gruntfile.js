
module.exports = function (grunt) {
    grunt.initConfig({
       
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', { presets: ['es2015'] }],
                        ['browserify-ng-html2js', {extension: 'html', baseDir: 'dist/', module: 'test'}]
                    ],
                    browserifyOptions: { fullPaths: false, debug: true},
                    //watch: true,
                    keepAlive: true,
                },
                files: {
                    'dist/app.js':'src/entry.js' 
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify'])
}