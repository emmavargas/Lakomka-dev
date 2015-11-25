var elixir = require('laravel-elixir');

var paths = {
  foundation: 'node_modules/foundation-sites/scss/',
  slick: 'node_modules/slick-carousel/'
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss', null, {includePaths:[paths.foundation, paths.slick]});
    mix.browserify('main.js');

    mix.copy(paths.slick + 'slick/fonts', 'public/fonts');
});
