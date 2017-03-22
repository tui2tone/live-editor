var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('default', function () {
	// Start browser process
	electron.start();
	// Restart browser process
	gulp.watch('./dist/app.js', electron.reload);
	// Reload renderer process
	gulp.watch(['index.html'], electron.reload);
});
