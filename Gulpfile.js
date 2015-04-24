var gulp         = require( 'gulp' );
var sass         = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps   = require( 'gulp-sourcemaps' );

gulp.task( 'styles', function() {
	return gulp.src( './sass/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass() )
		.pipe( autoprefixer({ browsers: ['last 2 versions'] }) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( './' ) );
});

gulp.task( 'default', ['styles'] );
