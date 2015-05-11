var dest = "./dist";
var src = './source';
var tmp = './tmp';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest,
      port: 8080
    }
  },
  sass: {
    srcImport: src + "/scss/import.scss",
    src: src + "/scss/**/*.{css,scss}",
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
    tmp: tmp + '/styleguide',
    config: {
      title: 'Jalo Pattern library',
      server: true,
      disableEncapsulation: true,
      rootPath: tmp  + '/styleguide',
      overviewPath: "readme-patternlibrary.md",
      port: 4000
    }
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
    name: 'Gulp Starter Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    sassDest: src + '/scss',
    template: './gulp/tasks/iconFont/template.scss.swig',
    sassOutputName: '_icons.scss',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/main.js',
      dest: dest + '/js',
      outputName: 'global.js',
      // Additional file extentions to make optional
      extensions: [''],
      // list of modules to make require-able externally
      require: []
    }, {
      entries: src + '/js/main.js',
      dest: dest + '/js',
      outputName:  'main.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};