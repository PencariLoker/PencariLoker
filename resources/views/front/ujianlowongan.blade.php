@include('front.partial.master')
<!DOCTYPE HTML>
<html class="greybody">
  @yield('jobshead')
  <link rel="stylesheet" href="{{URL::asset('assets/frontend/css/lightslider.min.css')}}">
  <body class="greybody jobdescbody">
    @yield('navbar')
    <div class="container bungkus" style="background:white;">
    <div class="page-header">
      <h1>Soal Ujian <small>{{$ujian->nama}}</small></h1>
    </div>
      {{Form::open(array('action' => ['FrontpageController@submitujian',$ujian->id] , 'method' => 'post'))}}
      <div class="hidden">
        <input name="ujianid" value="{{$ujian->id}}"></input>
        <input name="lowid" value="{{$ujian->lowongan_id}}"></input>
      </div>
      <ol>
        <?php $i=0; ?>
        @foreach($ujian->soalujians->shuffle() as $soal)
        <?php $i++; ?>
        <li>{{$soal->soal}}
            @foreach($soal->jawabanujians->shuffle() as $jawaban)
              <div class="radio">
                <label>
                  <input type="radio" name="jawabansoal{{$i}}" id="inputJawabansoal" value="{{$soal->id}},{{$jawaban->id}}" required>
                  {{$jawaban->jawaban}}
                </label>
              </div>
            @endforeach
        </li>
        <hr>
        @endforeach
        <input class="hidden" name="jumlahsoal" value={{$i}}></input>
      </ol>
    
    <div class="checkbox">
      <label style="color:red;">
        <input type="checkbox" value="" required>
        I do this quistionnaire honestly by myself and without intervention of other people.
      </label>
    </div>
    <div class="panel panel-default">
        <div class="panel-footer">
          <input type="submit" class="btn btn-primary" style="width:100%;">Submit Quistionnaire</a>
        </div>
    </div>
    </div>
    {{ Form::close() }}

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