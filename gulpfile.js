var gulp = require("gulp"),
    sass = require("gulp-sass");


gulp.task('sass', function() {
    return gulp.src('scss/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('./css'))
})

gulp.task('watch', function(){
    gulp.watch('scss/*.scss', gulp.series('sass'));
    // Other watchers
})