var gulp = require('gulp');
var bourbon = require('node-bourbon');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');




gulp.task('sass', function() {
		return gulp.src('app/sass/*.sass')
				.pipe(sass())
				.pipe(gulp.dest('app/css'))
				.pipe(browserSync.reload({stream: true}))

});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
});