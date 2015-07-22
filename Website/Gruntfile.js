module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dev: {
        files: {
          'build/app.js': ['js/app.jsx']
        },
        options: {
          transform: [
            'babelify', 'reactify'
          ]
        },
      }
    },
    watch: {
      src: {
        files: ['js/**/*.js', 'js/**/*.jsx', '!source/build/app.js'],
        tasks: ['browserify:dev'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      dev: {
        options: {
          hostname: 'localhost',
          port: 7012,
          open: true,
          middleware: function(connect, options, middlewares) {
            var modRewrite = require('connect-modrewrite');

            // enable Angular's HTML5 mode
            middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']));

            return middlewares;
          }
        }
      }
    }
  });

  grunt.registerTask('start:dev', ['browserify', 'connect', 'watch']);

  grunt.registerTask('default', 'browserify');
};
