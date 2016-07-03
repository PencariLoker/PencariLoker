var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
elixir(function(mix) {
    mix.sass('app.scss');
    mix.browserify('Front/Home.js', 'public/js/front/home.js');
    mix.browserify('Admin/Users.js', 'public/js/bambambole/users.js');
    mix.browserify('Front/Jobs.js', 'public/js/front/jobs.js');
    mix.browserify('Front/JobDetails.js', 'public/js/front/jobDetails.js')
       .browserify('Front/Profile.js', 'public/js/front/profile.js')
       .browserify('Admin/Login.js', 'public/js/bambambole/login.js');
      /*  .sass('app.scss')
        .browserify('Admin/Users.js', 'public/js/bambambole/users.js')
        // .browserify('Admin/Company.js', 'public/js/bambambole/company.js')
        .browserify('Front/Home.js', 'public/js/front/home.js')

        ;*/
});
