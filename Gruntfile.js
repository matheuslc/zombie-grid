
module.exports = function(grunt) {

grunt.initConfig({
  compass: {                  // Task
    dist: {                   // Target
      options: {              // Target options
        sassDir: 'css/',
        cssDir: 'css/',
        output: 'expanded',
        environment: 'production'
      }
    },
    dev: {                    // Another target
      options: {
        sassDir: 'css/',
        cssDir: 'css/',
        watch: true
      }
    }
  }
 });

grunt.loadNpmTasks('grunt-contrib-compass');
    
grunt.registerTask('default', ['compass']);

};