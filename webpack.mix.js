const mix = require('laravel-mix');

mix.sass('assets/css/app.scss', '/');
mix.options({
   processCssUrls: false
});
mix.js('assets/js/app.js', '/');
mix.browserSync({
	proxy: 'http://cole-ad.test',
	files: 'assets/css/app.scss'
});