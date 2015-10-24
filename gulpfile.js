var elixir = require('laravel-elixir');
var path = {
	'vendors':'public/css/vendor/'
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	//mix.less(['bootstrap/bootstrap.less'], path.vendors); //Solo para actualizar bootstrap
	mix.less([
		'app.less'
	]);
});
