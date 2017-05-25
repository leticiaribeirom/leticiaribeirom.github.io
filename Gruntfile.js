module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //concatenando arquivos js
    concat: {
      dist: {
        src: [
            'js/lib/*.js',
            'js/script.js'
        ],
        dest: 'js/build/production.js',
      }
    },
    //minificando arquivo concatenado de js
    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js',
      }
    },
    //minificando imagens
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'images/build/',
        }]
      }
    },
    //configurando o grunt para observar mudanças nos arquivos js e concatená-los e minificá-los automaticamente
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
      styles: {
        files: ['css/main.css'],
        tasks: ['autoprefixer'],
      },
      images: {
        expand: true,
        files: '/*.{jpg,gif,png,svg}',
        tasks: 'responsive_images'
      }
    },
    //autoprefixer faz um parse no css adicionando vendor prefixes como -webkit-,
    // -moz- quando necessário de acordo com o BD de Can I Use
    autoprefixer: {
      dist: {
        files: {
          'css/build/main.css': 'css/main.css',
          'css/build/responsive.css': 'css/responsive.css',
        }
      }
    },
    //deixando imagens responsivas, configurando as com 3 tamanhos, small, medium, large
    // e large_x2 para computadores com retina
    responsive_images: {
      dev: {
        options: {},
        sizes: [{
          name: "small",
          width: 320,
          height: 240,
        },{
          name: "medium",
          width: 640
        },{
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 0.6,
        }],
        files: [{
          expand: true,
          src: ['build/**/*.{jpg,gif,png,svg}'],
          cwd: 'images_src/',
          dest: 'images/',
        }],
      },
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['**/*', '!build/**/*.*'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
    favicons: {
      options: {
        trueColor: true,
        precomposed: true,
        appleTouchBackgroundColor: "#69d2e7",
        coast: true,
        windowsTile: true,
        tileBlackWhite: false,
        tileColor: "auto",
        html: 'index.html',
        HTMLPrefix: "images/icons"
      },
      icons: {
        src: 'images_src/logo-fundo-ondas.png',
        dest: 'images/icons'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-favicons');

  grunt.registerTask('default', ['responsive_images','watch']);

};
