module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify : {
            options: {
                banner: "/*! jQuery plugin onvisible <%= pkg.version %> - MIT license - Copyright 2015 Mikhael GERBET */\n"
            },
            target: {
                files: {
                    "jquery.onvisible.min.js" : "jquery.onvisible.js"
                }
            }
        },
        watch: {
            files: ["*.js", "!*.min.js" ,"test/spec/*Spec.js"],
            tasks: ["test"],
        },
        jshint: {
            files: ["*.js", "!*.min.js" ,"test/spec/*Spec.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        jasmine: {
            src: ["jquery.onvisible.js"],
            options: {
                helpers: "test/spec/*Helper.js",
                specs: "test/spec/*Spec.js",
                vendor: ["test/vendor/jquery-1.9.0.js", "test/vendor/jasmine-jquery.js"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //grunt.registerTask("test", ["jshint", "jasmine"]);
    grunt.registerTask("test", ["jshint"]);
    grunt.registerTask("default", ["test", "uglify"]);

};