var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
elixir(function(mix) {
    mix
        .sass('app.scss')
        .browserify('Admin/Users.js', 'public/js/bambambole/users.js')
        .browserify('Admin/Company.js', 'public/js/bambambole/company.js')
        .browserify('Front/Home.js', 'public/js/front/home.js')
        .browserify('Front/Profile.js', 'public/js/front/profile.js')
        .browserify('Front/Jobs.js', 'public/js/front/jobs.js')
        .browserify('Front/JobDetails.js', 'public/js/front/jobDetails.js');
});
