@include('front.partial.master')

<!DOCTYPE HTML>
<html>
@yield('indexhead')
<body class="landing">
@yield('navbar')
    <!-- Header -->
    <a name="about"></a>
    <div class="intro-header">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1 class="landing">MedanJob</h1 class="landing">
                        <h3 class="landing">Uniting Employers and JobSeeker</h3 class="landing">
                        <hr class="intro-divider">
                        <ul class="list-inline intro-social-buttons">
                            <li>
                                <a href="{{URL::route('jobs')}}" class="btn btn-default btn-lg"><i class="fa fa-search fa-fw"></i> <span class="network-name">Find Jobs</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.intro-header -->

    <!-- Page Content -->

	<a  name="services"></a>
    <div class="content-section-a">

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="landing" class="section-heading">Is it hard to get a job?<br><br><a href="{{URL::route('jobs')}}" class="btn btn-default btn-lg"><i class="fa fa-search fa-fw"></i> <span class="network-name">Find A Job</span></a></h2 class="landing">
                    <p class="lead">You can find any job here at <a target="_blank" href="#">MedanJob</a>. <br>Upload your CV now and get the job you dream for !</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="assets/frontend/img/ipad.png" alt="">
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-a -->

    <div class="content-section-b">

        <div class="container">

            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="landing" class="section-heading">Can't find the suitable employee?<br><br></h2 class="landing">
                    <p class="lead">Just post your vacancy here at <a target="_blank" href="#">MedanJob</a>! <br> and you will have the suitable employee candidate for your company.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="assets/frontend/img/dog.png" alt="">
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-b -->

    <div class="content-section-a">

        <div class="container">

            <div class="row">
                <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="landing" class="section-heading">Need Qualified Employees?</h2 class="landing">
                    <p class="lead">We offer you a feature to test your employees online to sort and find the best employee for your company.</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="assets/frontend/img/phones.png" alt="">
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-a -->

	<a  name="contact"></a>
    <div class="bannerlanding">

        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <h2 class="landing">Follow us :</h2 class="landing">
                </div>
                <div class="col-lg-6">
                    <ul class="list-inline banner-social-buttons">
                        <li>
                            <a href="https://twitter.com" class="btn btn-default btn-lg" style="width:170px;background:none;color:white;"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="http://instagram.com" class="btn btn-default btn-lg" style="width:170px;background:none;color:white;"><i class="fa fa-instagram fa-fw"></i> <span class="network-name">Instagram</span></a>
                        </li>

                        <li>
                            <a href="http://facebook.com" class="btn btn-default btn-lg" style="width:170px;background:none;color:white;"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.banner -->

    @yield('footer')

    <!-- jQuery -->
    <script src="assets/frontend/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="assets/frontend/js/bootstrap.min.js"></script>

</body>



</html>
