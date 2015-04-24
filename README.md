# Test Case: Sourcemaps Bug
A reduced test case demonstrating the Gulp + Sass + Autoprefixer + Sourcemaps bug.


## Description
Sourcemaps don't work when used in combination with `gulp-sass` & `gulp-autoprefixer`.


## Cause
As you can see from running the test case, using unicode symbols (eg: an en dash in a pseudo element `content` property) will cause the sourcemaps to be ignored in Chrome.

If you comment out the `content` property with the en dash **symbol** in `.t2` and recompile, the sourcemap will show up in Chrome.


## Workarounds:
1. Not piping though `gulp-autoprefixer`
Commenting out the autoprefixer line in `gulpfile.js` will display the sourcemap correctly when symbols are used.

2. Using the hex representation
Using the hex (`\2013` for en dash - see `.t3`) instead of the symbol will display the sourcemap correctly when autoprefixer is enabled.


## Related
- [sindresorhus/gulp-autoprefixer#8](https://github.com/sindresorhus/gulp-autoprefixer/issues/8)


## Test environment
OS X 10.10.3
Chrome 42.0.2311.90 (x64)

```
node@0.12.2
npm@2.7.4

gulp@3.8.11
gulp-autoprefixer@2.2.0
gulp-sass@1.3.3
gulp-sourcemaps@1.5.2
```
