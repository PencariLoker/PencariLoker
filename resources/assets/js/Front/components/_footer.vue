<template>
  <!-- /.banner -->
  <div class="landing footer" style="font-size:14px !important;">
    <div class="container">
      <div class="col-md-3 grid_3">
        <h4>Navigasi</h4>
        <ul class="f_list f_list1">
          <li><a href="">Home</a></li>
          <li v-if="logged"><a id="show-modal" href="#modal-id" data-toggle="modal" class="landing btn-regis">Masuk</a></li>
          <li v-if="logged"><a id="show-modal" href="#modal-id" data-toggle="modal" class="landing btn-regis">Daftar</a></li>
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
            <li><p><span><i class="fa fa-user tw1"></i></span>Nipe Setiawan Harefa – 131110011</li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 grid_3">
        <h4>PencariLoker.com</h4>
        <p>PencariLoker.com adalah sebuah website dirancang untuk membantu masyarakat menemukan lowongan pekerjaan yang sesuai dengan kemampuannya dan juga membantu perusahaan dalam mensortir calon karyawan.</p>
      </div>
      <div class="clearfix"> </div>
        <h4 class="copy">
        <p>Copyright © 2015 PencariLoker.com</a> </p>
        </h4>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    ready: function () {
      console.log("Footer Ready");
      var _this = this;
      var handle = function(e){
        _this.logged = e.guest;
      }
      $.ajax({
          method : 'GET',
          async : true,
          cache : false,
          'url' : window.location.origin + "/data",
          success : function(res){
              handle(res);
          }
      });
    },
    data: function(){
      return {
          logged: false,
      }
    }
  }
</script>
