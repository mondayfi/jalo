var dest = "./dist";
var src = './source';
var tmp = './tmp';
var backend = './backend'

module.exports = {
  server: {
    folder: backend,
    src: backend + '**/*.js',
    processFile: 'server.js'
  },
  browserSync: {
    server: {
      baseDir: dest,
      port: 8080
    },
    open: false
  },
  sass: {
    srcImport: src + "/scss/import.scss",
    src: src + "/scss/**/*.{css,scss,sass}",
    dest: dest + "/css",
    settings: {
      indentedSyntax: true, // Enable .scss syntax!
      imagePath: 'images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  styleguide: {
    src: src + "/scss/**/*.scss",
    tmp: tmp + '/styleguide',
    dest: [
      "./source/scss/import.scss"
    ],
    config: {
      title: 'Jalo Pattern library',
      server: true,
      disableEncapsulation: false,
      rootPath: tmp  + '/styleguide',
      overviewPath: "readme-patternlibrary.md",
      port: 4000,
      extraHead: '<link href="http://fonts.googleapis.com/css?family=Maven+Pro|Open+Sans:400,600,700" rel="stylesheet" type="text/css">',
      styleVariables: src + '/scss/_variables-colors.scss'
    }
  },
  vendorstyles: {
    src: './node_modules/normalize.css/normalize.css',
    dest: dest + '/css'
  },
  markup: {
    src: src + "/htdocs/**",
    dest: dest
  },
  html: {
    src: src + "/**.html",
    dest: dest
  },
  iconFonts: {
    name: 'Jalo Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    sassDest: src + '/scss',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: '../fonts',
    className: 'ja-icon',
    options: {
      fontName: 'jalo-icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  favicons: {
    src: dest + '/index.html',
    dest: dest,
    config: {
      files: {
        src: src + '/images/favicons/favicon.png',
          // src: {
          //   "android": src + '/images/favicons/android.png',
          //   "appleIcon": src + '/images/favicons/appleIcon.png',
          //   "appleStartup": src + '/images/favicons/appleStartup.png',
          //   "coast": src + '/images/favicons/favicon-coast.png',
          //   "favicons": src + '/images/favicons/favicon.png',
          //   "firefox": src + '/images/favicons/favicon.png',
          //   "opengraph": src + '/images/favicons/favicon.png',
          //   "windows": src + '/images/favicons/favicon.png',
          //   "yandex": src + '/images/favicons/favicon.png'
          // },
          // Doesn't fucking work. Pyry please fix!!!!! // Samuel
          dest: '/images/favicons',
          html: src + '/index.html',
          iconsPath: '/images/favicons'
      },
      icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false, // Pyry, can these be removed?
          favicons: true,
          firefox: false,
          opengraph: false,
          windows: false,
          yandex: false
      },
      settings: {
          background: null,
          silhouette: false,
          logging: true,
          index: ''
      }
    }
  },
  browserify: {
    templates: {
      extensions: ['hbs'],
    },
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/app.js',
      dest: dest + '/js',
      outputName: 'bundle.js',
      // Additional file extentions to make optional
      extensions: ['.hbs'],
      // list of modules to make require-able externally
      require: []
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};