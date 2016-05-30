var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
elixir(function(mix) {
    mix
        .sass('app.scss')
        .browserify('Admin/Users.js', 'public/js/bambambole/users.js')
        .browserify('Admin/Company.js', 'public/js/bambambole/company.js');
});