@include('front.partial.master')
<!DOCTYPE HTML>
<html class="greybody">
  @yield('jobshead')
  <link rel="stylesheet" href="{{URL::asset('assets/frontend/css/lightslider.min.css')}}">
  <link rel="stylesheet" href="http://joaopereirawd.github.io/fakeLoader.js/demo/css/fakeLoader.css">
  <script src="http://joaopereirawd.github.io/fakeLoader.js/js/fakeLoader.min.js"></script>

  <body class="greybody jobdescbody">
  <div id="fakeloader"></div>
      <script type="text/javascript">
$("#fakeloader").fakeLoader();
$("#fakeloader").fakeLoader({
timeToHide:3600, //Time in milliseconds for fakeLoader disappear
zIndex:"999",//Default zIndex
spinner:"spinner1",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
bgColor:"#FFF", //Hex, RGB or RGBA colors
imagePath:"http://loadinggif.com/images/image-selection/32.gif" //If you want can you insert your custom image
});
</script>
    @yield('navbar')
    <div class="container bungkus" style="padding:18%;">
    
    <center><h1>Ujian Berhasil Disubmit</h1>
    <a href="{{URL::route('jobs')}}" class="btn btn-default btn-lg"><i class="fa fa-search fa-fw"></i> <span class="network-name">Cari Lowongan lain</span></a></center>

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