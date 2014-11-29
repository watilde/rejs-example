module.exports = function(grunt) {
  grunt.initConfig({
    rejs: {
      options: {},
      target: {
        files: {
          'dist/XmasPresent.js': 'src/*.js',
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-rejs');
};
