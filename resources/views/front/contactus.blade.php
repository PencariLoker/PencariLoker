@include('front.partial.master')
<!DOCTYPE HTML>
<html class="greybody">
  @yield('jobshead')
  <link rel="stylesheet" href="{{URL::asset('assets/frontend/css/lightslider.min.css')}}">
  <body class="jobdescbody" style="background:white;">
    @yield('navbar')

    <div class="container" style="padding:6em;background:white;min-height:300px;">
        <h1>Contact Us</h1> 
        <br>
        For Employer <strong>Services</strong>, Kindly contact us at : 
        <br>
        <br>
        <strong>MedanJob Corps</strong>
        <p>random street Number ##
        <br>Medan 20123
        <br>
        <br><strong>Phone :</strong>
        <br><strong>Fax :</strong>
        <br><strong>Email :</strong>
        <br><strong>Working Hours :</strong>
        </p>
    </div>


    <script src="{{URL::asset('assets/frontend/js/lightslider.js')}}" type="text/javascript"></script>
    <script type="text/javascript">
  $(document).ready(function() {
    $("#lightSlider").lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
    }); 
  });
</script>
    @yield('footer')
  </body>
</html>