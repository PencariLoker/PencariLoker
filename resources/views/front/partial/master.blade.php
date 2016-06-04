@section('navbar')
<!-- Navigation -->
<link href="{{ URL::asset('assets/frontend/css/landing-page.css') }} " rel="stylesheet">
    <nav class="navbar navbar-default navbar-fixed-top topnav landing" role="navigation">
        <div class="container topnav landing">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header landing">
                <button type="button landing" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only landing">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand topnav landing" id="logonav" href="{{URL::route('online_home')}}"><img src="{{URL::asset('assets/logo.png')}}" class="img-responsive" id="logo" alt="Image"/></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse landing" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right landing" >
					 @if(Auth::check())
                        <li style="padding:15px;">Halo, 
                            <p style="display:inline;font-size:1.5em;margin-left:5px;" class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span style="color:#00349D">{{Auth::user()->name}}</span>
                                <span class="caret"></span>
                            </p>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a href="{{URL::route('profile',[Auth::user()->id] )}}">Edit Profile</a></li>
                                <li><a href="{{URL::route('logout')}}"><i class="fa fa-sign-out fa-fw"></i>Logout</a></li>
                            </ul>
                        </li>
                         
                    @else
                    <li>
                        <a href="{{URL::route('register')}}" class="landing btn-regis">Sign Up</a>
                    </li>
                    <li>
                        <a href="{{URL::route('login')}}" class="landing btn-regis">Sign In</a>
                    </li>
					@endif
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
 @stop
@section('jobshead')
<head>
<title>MedanJob - Uniting Employers and JobSeeker</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="{{ URL::asset('assets/frontend/css/bootstrap.min.css') }} " rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.7.5/css/bootstrap-select.min.css">
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="{{ URL::asset('assets/frontend/js/jquery.js') }} "></script>
<script src="{{ URL::asset('assets/frontend/js/bootstrap.min.js') }} "></script>
<!-- Custom Theme files -->
<link href="{{ URL::asset('assets/frontend/style.css') }} " rel='stylesheet' type='text/css' />
<link href='//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,600,700,800,900' rel='stylesheet' type='text/css'>
<!-- Custom Fonts -->
    <link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
<!-- font-Awesome -->
<link href="{{URL::asset('assets/frontend/font-awesome/css/font-awesome.css')}}" rel="stylesheet"> 


</head>
@stop
@section('indexhead')
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>MedanJob - Uniting Employers and JobSeeker</title>
    <link href="assets/frontend/style.css" rel='stylesheet' type='text/css' />
    <!-- Bootstrap Core CSS -->
    <link href="{{ URL::asset('assets/frontend/css/bootstrap.min.css')}} " rel="stylesheet">

    <!-- Custom CSS -->
    <link href="{{ URL::asset('assets/frontend/css/landing-page.css')}} " rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="{{ URL::asset('assets/frontend/font-awesome/css/font-awesome.min.css')}} " rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
@stop

@section('footer')
        <div class="landing footer" style="background:#EEE;color:black;font-size:14px !important;">
            <div class="container">
                <div class="col-md-4 grid_3">
                    <h4>Navigation</h4>
                    <ul class="f_list f_list1">
                        <li><a href="{{URL::route('online_home')}}">Home</a></li>
                        <li><a href="{{URL::route('login')}}">Sign In</a></li>
                        <li><a href="{{URL::route('register')}}">Sign Up</a></li>
                        <li><a href="{{URL::route('about')}}">About</a></li>
                        <li><a href="{{URL::route('contactus')}}">Contact Us</a></li>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="col-md-4 grid_3">
                        <h4>MedanJob</h4>
                        <p>Is a Website which help JobSeeker to find the most suitable job for their skills and help Employers find and sort their Employee Candidate</p>
                    </div>
                    <div class="col-md-4 grid_3">
                        <h4>Specially Made For</h4>
                        <img style="max-width:100%;" src="{{URL::asset('assets/frontend/img/itnb.png')}}" alt="">
                    </div>
                    <!--         <div class="col-md-3 grid_3">
                        <h4>Daftarkan Email anda</h4>
                        <p>Daftarkan email anda untuk menerima pemberitahuan update pada website</p>
                        <form>
                            <input type="text" class="form-control" placeholder="Masukkan Email anda" style="padding:0 15px;">
                            <button type="button" class="btn red">Daftar sekarang!</button>
                        </form>
                    </div> -->
                    
                    
                    <div class="clearfix"> </div>
                    <h4 class="copy">
                    <p>Copyright © 2015 - {{date("Y")}} Hashed</a> </p>
                    </h4>
                </div>
            </div>
        </div>
</div>

@stop
