

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

const concat = require('gulp-concat');
// Top level Functions

// gulp.task - Define tasks
// gulp.src - Point to file to use 
// gulp.dest - Point to folder to output 
// gulp.watch - Watch files and folders for changes 




//logs Massages 

gulp.task('message',   function(){
    return console.log("mr Abdi Gulp is running ...");
});

//gulp massage in order to run

//Capy all HTML files 
gulp.task('copyHtml',  function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

//it created dist foder basicli it is our production application  
// we can upload to server 
 
// gulp copyHtml    //run it 




//optimaze images 
//Lets optimise images 
//https://github.com/sindresorhus/gulp-imagemin
// /npm install --save-dev gulp-imagemin


gulp.task('imageMin', () => 
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// gulp imageMin
// it optimasez photo size decresed 

//******************************* */
// npm i --save-dev gulp-uglify

//Minify JS

gulp.task('minify',  function(){
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
// gulp minify
//it is look like ugly but optimisez   comments are remuved and free spaces also 


//***************** */
//lets install plugins   npm i --save-dev gulp-sass
// Compile sass
gulp.task('sass',  function(){
    gulp.src('src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


// gulp.task('default', function(){
//     return console.log("mr Abdi Gulp is running ...");
// });


//**************************** */

//scrips 
gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
     .pipe(concat('main.js'))
     .pipe(uglify())

     .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series('message','copyHtml', 'imageMin','sass', 'scripts'));
//gulp 


gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/html/*.html', ['copyHtml']);
});

// npm i --save-dev gulp-concat