const gulp = require("gulp")
const { series } = gulp
const minify = require("gulp-minify")
const inject = require("gulp-inject-string")
const rename = require("gulp-rename")
const fs = require("fs")
const del = require("del")
const exec = require("child_process").exec

const FILENAME = "cljs.jar"
const ENV = process.env.ENV
const VERSION = process.env.VERSION || "1.10.758"

const download = () => {
  return new Promise((resolve, reject) => {
    fs.access(FILENAME, fs.constants.R_OK, err => {
      if (err) {
        // file doesn't exist
        console.log(
          `Downloading ${FILENAME} r${VERSION} this may take a few moments...`
        )
        exec(
          `curl -L https://github.com/clojure/clojurescript/releases/download/r${VERSION}/${FILENAME} > ${FILENAME}`,
          (err, stdout, stderr) => {
            if (err != null) {
              console.error(stderr)
              reject(err)
            } else {
              console.log("...done")
              resolve()
            }
          }
        )
      } else {
        console.log(`${FILENAME} already downloaded`)
        resolve()
      }
    })
  })
}

const env = () => {
  // ensure prod or dev
  return ENV === "prod" ? ENV : "dev"
}

const build = tier => {
  return new Promise((resolve, reject) => {
    exec(
      `java -cp ${FILENAME}:./src clojure.main build/${tier}.${env()}.clj`,
      (err, stdout, stderr) => {
        if (err != null) {
          console.error(stderr)
          reject(err)
        } else {
          resolve()
        }
      }
    )
  })
}

const clean = () => {
  return del(["out", "server.js", "public/js/**/*", "public/css/style.min.css", "views/index.pug"])
}

const buildClient = async () => {
  await build("client")
  await gulp
    .src("views/index-template.pug")
    .pipe(inject.replace("#CLIENT_JS#", "client.js"))
    .pipe(rename("index.pug"))
    .pipe(gulp.dest("views"))
  if (env() === "prod") {
    await gulp
      .src(["public/js/client.js"])
      .pipe(
        minify({
          ext: {
            min: ".min.js"
          }
        })
      )
      .pipe(gulp.dest("public/js"))
    return gulp
      .src("views/index-template.pug")
      .pipe(inject.replace("#CLIENT_JS#", "client.min.js"))
      .pipe(rename("index.pug"))
      .pipe(gulp.dest("views"))
  }
  return Promise.resolve()
}

const buildServer = () => {
  return build("server")
}

exports.default = series(clean, download, buildClient, buildServer)
