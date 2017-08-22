var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;
var _ = require('underscore');

var env = _.memoize(function() {
 var _env = process.env.ENV;
 // ensure 'prod' or 'dev'
 return (_env === 'prod') ? _env : 'dev';
});

var build = function(tier) {
 return new Promise(function (resolve, reject) {
  exec('./bin/cljsc.sh build/' + tier + '.' + env() + '.clj', function(err, stdout, stderr) {
   if(err != null) {
    console.error(stderr);
    reject(err);
   } else {
    console.log(stdout);
    resolve();
   }
  });
 })
}

gulp.task('clean', function() {
 return del(['out', 'server.js', 'public/js/**/*']);
});

gulp.task('build:client', function() {
 return build('client');
});

gulp.task('build:server', function() {
 return build('server');
});

gulp.task('default', ['clean', 'build:client', 'build:server']);
