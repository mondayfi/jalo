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
    template: './gulp/tasks/iconFont/template.scss.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'ja-icon',
    options: {
      fontName: 'jalo-icons',
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
      outputName: 'bundle.js',
      // Additional file extentions to make optional
      extensions: [''],
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