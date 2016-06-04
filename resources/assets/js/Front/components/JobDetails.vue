<template>
  <navbar></navbar>
 <div class="container bungkus">
      <div class="colputih">
        <hr style="margin-top:3px;">
        <div class="row smalldetail colputih">
          <div class="colputih col-md-6 col-xs-12">
            @if(!empty($lowongan->company->logo))
            <div class="col-md-4 col-xs-12 divdetaillogo">
              <img src="{{URL::asset($lowongan->company->logo)}}" class="jobdetaillogo img-responsive" alt="">
              <hr class="visible-sm visible-xs">
            </div>
            @endif
            <div class="colputih col-md-8 col-xs-12">
              <h2>{{$lowongan->name}}</h2>
              {{$lowongan->company->name}}
            </div>
          </div>
          <div class="colputih col-md-4 col-xs-12 pull-right">
            <ul class ="detailsmalllist" type="none">
              <li class="salary"><span><i class="fa fa-money"></i></span> {{$lowongan->gaji}}</li>
              <li><span><i class="fa fa-briefcase"></i></span> {{$lowongan->syaratpengalaman}}</li>
              <li><span style="padding:3px"><i class="fa fa-map-marker"></i></span> {{$lowongan->kotaprovinsi}}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr>
      <div class="clearfix">
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 kotakjobdesc">
          <div class="colputih jobdesc"><h4><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Job Description</h4>
          <hr style="margin-top:1px;">
          <div class="unselectable wrap-text" id="job_description">
            {{$lowongan->descript}}
          </div>
        </div>
      </div>
      @if(!empty($lowongan->gmaps))
      <div class="col-xs-12 col-lg-12 col-md-12 col-sm-12 kotakjobdesc">
        <div class="colputih jobdesc">
          <h4><i class="fa fa-map-marker icon_header"></i> WORK LOCATION</h4>
          <hr style="margin-top:1px;">
          <center>
          <iframe src="{{$lowongan->gmaps}}"  frameborder="0" id="iframe_ee9f_0" allowfullscreen></iframe>
          </center>
        </div>
        <div class="clearfix">
        </div>
      </div>
      @endif
    </div>
    <div class="col-xs-12 col-lg-6 col-md-6 col-sm-6 kotakjobdesc">
      <div class="colputih jobdesc"><h4><i class="fa fa-list-alt icon_header"></i> Company Info</h4>
        <hr style="margin-top:1px;">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Company Name</p>
          <p>
            <span id="company_registration_number">{{$lowongan->company->name}}</span>
          </p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Industry</p>
          <p id="company_industry">{{$lowongan->company->industry}}</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Company Size</p>
          <p id="company_size">{{$lowongan->company->size}} orang</p>
        </div>
        @if(!empty($lowongan->company->website))
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Website</p>
          <p>
            <a id="company_website" target="_blank" href="http://{{$lowongan->company->website}}">{{$lowongan->company->website}}</a>
          </p>
        </div>
        @endif
        @if(!empty($lowongan->company->phone))
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Phone</p>
          <p id="company_contact">021-29809200</p>
        </div>
        @endif
        @if(!empty($lowongan->company->email))
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Email</p>
          <p id="work_environment_working_hours">{{$lowongan->company->email}}</p>
        </div>
        @endif
        @if(!empty($lowongan->company->address))
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Address</p>
          <p id="work_environment_working_hours">{{$lowongan->company->address}}</p>
        </div>
        @endif
        <div class="clearfix">
        </div>
      </div>
      <div class="clearfix">
      </div>
    </div>
    @if(!empty($arr))
    <div class="col-xs-12 col-lg-6 col-md-6 col-sm-6 kotakjobdesc">
      <div class="colputih jobdesc"><h4><i class="fa fa-list-alt icon_header"></i> COMPANY PHOTOS</h4>
        <hr style="margin-top:1px;">
        <ul id="lightSlider">
          @foreach($arr as $gambar)
          <li data-thumb="{{URL::asset($gambar)}}">
            <img class="img-responsive" src="{{URL::asset($gambar)}}" />
          </li>
          @endforeach
        </ul>
      </div>
      <div class="clearfix">
      </div>
    </div>
    @endif
    <div class="clearfix">
    </div>
    <div class="row smalldetail colputih" id="div_ee9f_7">
      <div class="colputih col-md-10 col-xs-12">
        <h4>Tanggal Pemasangan : {{date('d M Y',strtotime($lowongan->updated_at))}} </h4>
        <h4>Tanggal Berakhir : {{date('d M Y',strtotime($lowongan->tanggalberakhir))}} </h4>
      </div>
      <div class="colputih col-md-2 col-xs-12 pull-right">
        <center>
        @if(Auth::check())
        <a class="btn btn-primary" id="button_ee9f_0" data-toggle="modal" href='#modal-id'>Apply Now!</a>
        @else
        <a class="btn btn-primary" id="button_ee9f_0" data-toggle="modal" href='{{URL::route('login')}}'>Login to apply</a>
        @endif
        </center>
        <div class="modal fade" id="modal-id">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Quistionnaire</h4>
              </div>
              <div class="modal-body">
                <ul>
                  @foreach($ujians as $ujian)
                  <li><a href="{{URL::route('ujian', $ujian->id)}}">{{$ujian->nama}}</a></li>
                  @endforeach
                </ul>
              </div>
              <!--             <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
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
  <!-- /.banner -->
  <div class="landing footer" style="font-size:14px !important;">
    <div class="container">
      <div class="col-md-3 grid_3">
        <h4>Navigasi</h4>
        <ul class="f_list f_list1">
          <li><a href="http://pencariloker.tk">Home</a></li>
          <li><a href="http://pencariloker.tk/login">Masuk</a></li>
          <li><a href="http://pencariloker.tk/register">Daftar</a></li>
          <!--                <li><a href="#">Tentang PencariLoker.com</a></li>
        </ul>
        <ul class="f_list">
          <li><a href="#">Kebijakan Privasi</a></li>
          <li><a href="#">Aturan Penggunaan</a></li>
          <li><a href="#">Hubungi Kami</a></li>
          <li><a href="#">Pasang Lowongan</a></li>
        </ul> -->
        <div class="clearfix"> </div>
      </div>
      <div class="col-md-3 grid_3">
        <h4>Tim PKM Mikroskil 2015</h4>
        <div class="footer-list">
          <ul>
            <li><p><span><i class="fa fa-user tw1"></i></span>Dennis Daslim – 131112641</li>
            <li><p><span><i class="fa fa-user tw1"></i></span>Adeline Rosabella – 131110381</li>
            <li><p><span><i class="fa fa-user tw1"></i></span>Javentira Lienata – 131110950</li>
            <li><p><span><i class="fa fa-user tw1"></i></span>Michael – 131111718</li>
            <li><p><span><i class="fa fa-user tw1"></i></span>Denny  Ho – 141110191</li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 grid_3">
        <h4>PencariLoker.com</h4>
        <p>PencariLoker.com adalah sebuah website dirancang untuk membantu masyarakat menemukan lowongan pekerjaan yang sesuai dengan kemampuannya dan juga membantu perusahaan dalam mensortir calon karyawan.</p>
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
        <p>Copyright © 2015 PencariLoker.com</a> </p>
        </h4>
      </div>
    </div>
  </div>
</template>


<script type="text/javascript">
  Vue.component('navbar', require('./_navbar.vue'));
  export default {
    ready: function () {
      console.log("Job Details Ready");
    }
  }
</script>
