<style type="text/css">
  #maps{
    height: 300px;
  }
  .socialShare{
    cursor: pointer;
  }
  .geserBawahMas{
    background: white;
    margin-bottom: 40px;
  }
  .contentContent{
    background: white;
    margin-bottom: 20px;
    padding: 25px;
  }.
  .baliho{

  }
</style>
<template>
	<navbar></navbar>
	<modal></modal>
	<div class="container bungkus">
		<div class="row baliho">
			<hr style="margin-top:3px;">
			<div class="row smalldetail colputih">
				<div class="colputih col-md-6 col-xs-12">
					<div v-if="company.logo" class="col-md-4 col-xs-12 divdetaillogo">
						<img v-bind:src="company.logo" class="jobdetaillogo img-responsive" alt="">
						<hr class="visible-sm visible-xs">
					</div>
					<div class="colputih col-md-8 col-xs-12">
						<h2>{{ lowongan.name }}</h2>
						{{ company.name }}
					</div>
				</div>
				<div class="colputih col-md-4 col-xs-12 pull-right">
					<ul class ="detailsmalllist" type="none">
						<li class="salary"><span><i class="fa fa-money"></i></span> {{ lowongan.gaji | currency 'Rp' 0 }}</li>
						<li><span><i class="fa fa-briefcase"></i></span> {{ lowongan.syaratpengalaman }}</li>
						<li><span style="padding:3px"><i class="fa fa-map-marker"></i></span> {{ lowongan.kotaprovinsi }}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>


    <div class="row geserBawahMas">
      <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 contentContent">
          <h4><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Job Description</h4>
          <small>Posted: {{ lowongan.updated_at | convertToDate }}</small>
          <div>
            <a v-bind:href="tw()">
              <i class="fa fa-twitter socialShare" aria-hidden="true" title="Share With Twitter"></i>
            </a>
            <a b-bind:href="fb()">
              <i class="fa fa-facebook socialShare" aria-hidden="true" title="Share With Facebook"></i>
            </a>
            | <span>{{lowongan.shorturl}}</span>
          </div>
          <hr style="margin-top:0px">
          <div>
            {{{ lowongan.descript }}}
          </div>

          <div id="maps">

          </div>
      </div>

      <!-- Company FIeld -->
      <div class="col-xs-12 col-lg-4 col-md-4 col-sm-4 contentContent">
        <h4 style="margin-bottom:50px;"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Company Info</h4>
        <hr>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Industry</p>
          <p id="company_industry">{{ company.industry }}</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
            <p class="desc_subject">Company Size</p>
            <p id="company_size">{{ company.size }} orang</p>
          </div>
        <div  class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Website</p>
          <p><a id="company_website" target="_blank" href="{{ company.website }}">{{ company.website}}</a></p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Phone</p>
          <p id="company_contact">{{ company.phone }}</p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Email</p>
          <p id="work_environment_working_hours">{{ company.email }}</p>
        </div>
        <div v-if="company.address" class="col-lg-6 col-md-6 col-sm-12">
          <p class="desc_subject">Address</p>
          <p id="work_environment_working_hours">{{{ company.address }}}</p>
        </div>
      </div>
    </div>



		<div v-if="img.length != 0" class="col-xs-12 col-lg-6 col-md-6 col-sm-6 kotakjobdesc">
			<div class="colputih jobdesc">
				<h4><i class="fa fa-list-alt icon_header"></i> COMPANY PHOTOS</h4>
				<hr style="margin-top:1px;">
				<ul id="lightSlider">
					<li v-for="gambar in img" data-thumb="{{ gambar }}">
						<img class="img-responsive" v-bind:src="gambar" />
					</li>
				</ul>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="clearfix"></div>
	</div>
	<script type="text/javascript" src="/js/lightslider.js"></script>
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
	<foot></foot>
</template>

<script type="text/javascript">
	const navbar = Vue.component('navbar', require('./_navbar.vue'));
	Vue.component('modal', require('./_modal.vue'));
	Vue.component('foot', require('./_footer.vue'));
  var path = require('path');
	Vue.filter('convertToDate', function (value) {
		if(!value) return "";
	  	return value.substring(0,value.indexOf("T"));
	})
  Vue.config.debug = false;
  export default {
	ready: function () {
		console.log("JobDetails Ready");
		var self = this;
    var handle = function(e){
      console.log(e);
      self.lowongan = e;
      self.company = e.company;
      self.company.logo = window.location.origin + "/" + path.join('img', self.company.logo);


      if (self.company.lat && self.company.lng){
        var maps;
        var myLatLng = {lat: parseFloat(self.company.lat), lng : parseFloat(self.company.lng)};
        console.log(myLatLng);
        map = new google.maps.Map(document.getElementById('maps'), {
          center: myLatLng,
          zoom: 16,
        });

        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          draggable : true,
        });

        marker.addListener('click', toggleBounce);
      }
    }
    $.ajax({
      async  : true,
      method :'GET',
      cache  : false,
      data   : {index:parseInt(window.location.pathname.match(/\d+/g)[0])},
      url    : window.location.origin + "/getJobDetails",
      success: function(e){
        handle(e);
      }
    })
	},
	data: function(){
		return{
			lowongan:{},
			company:{},
			img:[],
			logged:false
		}
	},
  methods:{
    tw: function(){
      return 'http://twitter.com/share?text=' + this.lowongan.shorturl;
    },
    fb : function(){
      return 'http://www.facebook.com/sharer.php?u=' + this.lowongan.shorturl;
    },
  }
}
</script>
