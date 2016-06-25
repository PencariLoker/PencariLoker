<template>
	<navbar></navbar>
	<modal></modal>
	<div class="container bungkus">
		<div class="colputih">
			<hr style="margin-top:3px;">
			<div class="row smalldetail colputih">
				<div class="colputih col-md-6 col-xs-12">
					<div v-if="lowongan.company.logo" class="col-md-4 col-xs-12 divdetaillogo">
						<img v-bind:src="lowongan.company.logo" class="jobdetaillogo img-responsive" alt="">
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
		<hr>
		<div class="clearfix"></div>
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 kotakjobdesc">
				<div class="colputih jobdesc">
					<h4><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Job Description</h4>
					<hr style="margin-top:1px;">
					<div class="unselectable wrap-text" id="job_description">
						{{{ lowongan.descript }}}
					</div>
				</div>
			</div>
			<div v-if="lowongan.gmaps" class="col-xs-12 col-lg-12 col-md-12 col-sm-12 kotakjobdesc">
				<div class="colputih jobdesc">
					<h4><i class="fa fa-map-marker icon_header"></i> WORK LOCATION</h4>
					<hr style="margin-top:1px;">
					<center>
						<iframe v-bind:src="lowongan.gmaps"  frameborder="0" id="iframe_ee9f_0" allowfullscreen></iframe>
					</center>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
		<div class="col-xs-12 col-lg-6 col-md-6 col-sm-6 kotakjobdesc">
			<div class="colputih jobdesc">
				<h4><i class="fa fa-list-alt icon_header"></i> Company Info</h4>
				<hr style="margin-top:1px;">
				<div class="col-lg-6 col-md-6 col-sm-12">
					<p class="desc_subject">Company Name</p>
					<p>
						<span v-text="lowongan.company.name" id="company_registration_number"></span>
					</p>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<p class="desc_subject">Industry</p>
					<p id="company_industry">{{ lowongan.company.industry }}</p>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<p class="desc_subject">Company Size</p>
					<p id="company_size">{{ lowongan.company.size }} orang</p>
				</div>
				<div  class="col-lg-6 col-md-6 col-sm-12">
					<p class="desc_subject">Website</p>
					<p><a id="company_website" target="_blank" href="{{ company.website }}">{{ lowongan.company.website}}</a></p>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<p class="desc_subject">Phone</p>
					<p id="company_contact">{{ lowongan.company.phone }}</p>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<p class="desc_subject">Email</p>
					<p id="work_environment_working_hours">{{ lowongan.company.email }}</p>
				</div>
				<div v-if="company.address" class="col-lg-6 col-md-6 col-sm-12">
					<p class="desc_subject">Address</p>
					<p id="work_environment_working_hours">{{ lowongan.company.address }}</p>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
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
		<div class="row smalldetail colputih" id="div_ee9f_7">
			<div class="colputih col-md-10 col-xs-12">
				<h4>Tanggal Pemasangan :{{ lowongan.updated_at | convertToDate }}</h4>
				<h4>Tanggal Berakhir : {{ lowongan.tanggalberakhir | convertToDate }}</h4>
			</div>
			<div class="colputih col-md-2 col-xs-12 pull-right">
				<center>
					<a v-if="logged == true" class="btn btn-primary" id="button_ee9f_0" data-toggle="modal" href='#modal-id'>Apply Now!</a>
					<a v-if="logged == false" class="btn btn-primary" id="button_ee9f_0" data-toggle="modal" href='#modal-id'>Login to apply</a>
				</center>
				<!-- <div class="modal fade" id="modal-id">
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
						</div>
					</div>
				</div> -->
			</div>
		</div>
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
	<div class="landing footer" style="font-size:14px !important;">
		<div class="container">
			<div class="col-md-3 grid_3">
				<h4>Navigasi</h4>
				<ul class="f_list f_list1">
					<li><a href="http://pencariloker.tk">Home</a></li>
					<li><a href="http://pencariloker.tk/login">Masuk</a></li>
					<li><a href="http://pencariloker.tk/register">Daftar</a></li>
					<div class="clearfix"></div>
				</ul>
			</div>
			<div class="col-md-3 grid_3">
				<h4>Tim PKM Mikroskil 2015</h4>
				<div class="footer-list">
					<ul>
						<li><p><span><i class="fa fa-user tw1"></i></span>Dennis Daslim – 131112641</p></li>
						<li><p><span><i class="fa fa-user tw1"></i></span>Adeline Rosabella – 131110381</p></li>
						<li><p><span><i class="fa fa-user tw1"></i></span>Javentira Lienata – 131110950</p></li>
						<li><p><span><i class="fa fa-user tw1"></i></span>Michael – 131111718</p></li>
						<li><p><span><i class="fa fa-user tw1"></i></span>Denny  Ho – 141110191</p></li>
					</ul>
				</div>
			</div>
	  		<div class="col-md-3 grid_3">
				<h4>PencariLoker.com</h4>
				<p>PencariLoker.com adalah sebuah website dirancang untuk membantu masyarakat menemukan lowongan pekerjaan yang sesuai dengan kemampuannya dan juga membantu perusahaan dalam mensortir calon karyawan.</p>
	  		</div>
	  		<div class="clearfix"></div>
			<h4 class="copy">
				<p>Copyright © 2015 PencariLoker.com</p>
			</h4>
	  	</div>
	</div>
</template>


<script type="text/javascript">
	const navbar = Vue.component('navbar', require('./_navbar.vue'));
	Vue.component('modal', require('./_modal.vue'));
	Vue.filter('convertToDate', function (value) {
		if(!value) return "";
	  	return value.substring(0,value.indexOf("T"));
	})
  export default {
	ready: function () {
		console.log("JobDetails Ready");
		var _this = this;
		$.ajax({
           	method : 'GET',
            async : false,
            cache : false,
            data:{
            	index:parseInt(window.location.pathname.match(/\d+/g)[0])
            },
            'url' : window.location.origin + "/getJobDetails",
            success : function(res){
                _this.lowongan = res.lowongan[0];
                _this.logged = _this.$children[0]._data.user.logged;
                _this.img = _this.lowongan.photos.split('||');
                _this.img.forEach( function(element, index,array) {
                  array[index] = "/" + element.replace('assets/images','img');
                });
                _this.company = _this.lowongan.company;
                _this.company.logo = "/" + _this.company.logo;
                _this.lowongan.company.logo = 's';
            }.bind(_this)
        });
	},
	data: function(){
		return{
			lowongan:{},
			company:{},
			img:[],
			logged:false
		}
	}
}
</script>
