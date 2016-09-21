var gulp = require("gulp");
// var htmlmin = require("gulp-htmlmin");
//  var cssnano = require("gulp-cssnano");
// var browserSync = require("browser-sync").create();
// var reload = browserSync.reload;


// gulp.task("html",function(){
// 	gulp.src("*.html")
// 		.pipe(gulp.dest("dist/"))
// 		// .pipe(reload({stream: true}));
// });
// gulp.task("img",function(){
// 	gulp.src("img/*")
// 		.pipe(gulp.dest("dist/img/"))
// 		// .pipe(reload({stream: true}));
// });
// gulp.task("js",function(){
// 	gulp.src("js/*.*")
// 		.pipe(gulp.dest("dist/js/"))
// 		// .pipe(reload({stream: true}));
// });
gulp.task("fonts",function(){
	gulp.src("fonts/*.*")
 		.pipe(gulp.dest("dist/fonts/"))
 		 // .pipe(reload({stream: true}));
});
 // gulp.task("css",function(){
 // 	gulp.src("css/*.css")
 // 		.pipe(cssnano())
 // 		.pipe(gulp.dest("dist/css/"))
 // 	 .pipe(reload({stream: true}));

 // });
 gulp.task("lib",function(){
 	gulp.src("lib/")
 		.pipe(gulp.dest("dist/"))
 	 // .pipe(reload({stream: true}));

 });
// gulp.task("serve",function(){
// 	browserSync.init({
// 		server:{
// 			baseDir:"dist/"
// 		}

// 	});
// 	gulp.watch("*.html",["html"]);
// 	gulp.watch("css/*.css",["css"]);
// 	gulp.watch("img/*",["img"]);
// });