var gulp = require("gulp");
const { series } = require("gulp");


/**
 * Copiamos el readme principal
 */
function copy() {
	return gulp.src("dist/**/*").pipe(gulp.dest("demo/dist"));
}

/**
 * Ejecutamos las tareas en serie, una detras de otra
 */
exports.default = series(
	copy
);
