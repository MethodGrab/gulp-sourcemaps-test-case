var gulp         = require( 'gulp' );
var sass         = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps   = require( 'gulp-sourcemaps' );
var postcss      = require( 'gulp-postcss' );


gulp.task( 'default', ['styles:postcss'] );



// -- with gulp-autoprefixer -- //
gulp.task( 'styles:gap', function(  ) {
	console.log( 'Using gulp-autoprefixer' );

	return gulp.src( './sass/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass() )
		.pipe( autoprefixer({ browsers: ['last 2 versions'] }) )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( './' ) );
});



// -- with postcss -- //
gulp.task( 'styles:postcss', function(  ) {
	console.log( 'Using postcss' );

	var processors = [
		require( 'autoprefixer' )( 'last 2 versions' )
	];

	return gulp.src( './sass/*.scss' )
		.pipe( sourcemaps.init() )
		.pipe( sass() )
		.pipe( postcss( processors ) )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( gulp.dest( './' ) );
});
