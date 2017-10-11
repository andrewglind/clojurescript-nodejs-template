var fs = require('fs');
var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

var FILENAME = 'cljs.jar';
var ENV = process.env.ENV;
var VERSION = process.env.VERSION || '1.9.946';

var download = function() {
 return new Promise(function(resolve, reject) {
  fs.access(FILENAME, fs.constants.R_OK, function(err) {
   if(err) { // file doesn't exist
    console.log('Downloading '+FILENAME+' r'+VERSION+', this may take a few moments...');
    exec('curl -L https://github.com/clojure/clojurescript/releases/download/r'+VERSION+'/cljs.jar > '+FILENAME, function(err, stdout, stderr) {
     if(err != null) {
      console.error(stderr);
      reject(err);
     } else {
      console.log('...done');
      resolve();
     }
    });
   } else {
    console.log(FILENAME+' already downloaded');
    resolve();
   }
  });
 });
}

var env = function() {
 // ensure 'prod' or 'dev'
 return (ENV === 'prod') ? ENV : 'dev';
};

var build = function(tier) {
 return new Promise(function(resolve, reject) {
  exec('java -cp cljs.jar:./src clojure.main build/' + tier + '.' + env() + '.clj', function(err, stdout, stderr) {
   if(err != null) {
    console.error(stderr);
    reject(err);
   } else {
    resolve();
   }
  });
 })
}

gulp.task('clean', function() {
 return del(['out', 'server.js', 'public/js/**/*']);
});

gulp.task('download', ['clean'], function() {
 return download();
});

gulp.task('build:client', ['download'], function() {
 return build('client');
});

gulp.task('build:server', ['download'], function() {
 return build('server');
});

gulp.task('default', ['clean', 'download', 'build:client', 'build:server']);
