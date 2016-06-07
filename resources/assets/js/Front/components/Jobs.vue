<template>
	<navbar></navbar>
	<modal></modal>
	<div class="container bungkus">
	  	<div class="single">
		    <div class="col-md-3 colputih" style="padding: 0 1em 0 1em;">
			   	<div class="widget_search">
					<h5 class="widget-title">Search</h5>
					<div class="widget-content">
				        <form action="#" method="get" role="form">
				            <select name="idcomp" id="input" class="selectpicker" v-model="idcomp" data-style="form-control" data-live-search="true" title='Choose Company'>
					            <option value="">Show all</option>
				                <option v-for="company in companies" value="{{company.id}}">{{company.name}}</option>
					        </select><br>
					        <select name="idcat" id="input" class="selectpicker" v-model="idcat" data-style="form-control" data-live-search="true" title='Choose Category'>
					            <option value="">Show all</option>
					             <option v-for="lowongancat in lowongancats" value="{{lowongancat.id}}">{{lowongancat.name}}</option>
				            </select>
				            <hr>
				            <button type="button" class="btn btn-default btn-info" @click="filterCategory">Cari</button>
				        </form>
				    </div>
			    </div>
		    </div>
		    <div class="col-md-9 single_left">
		        <div class="but_list">
			        <div id="myTabContent" class="tab-content">
				        <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
				            <a v-for="lowongan in lowongans" track-by="id" class="tab_grid_link" href="{{ '/jobdetails/'+lowongan.id }}" target="blank_">
						        <div class="tab_grid colputih">
						            <div class="jobs-item with-thumb">
									    <div class="jobs_right">
					                    	<img style="float:right;" v-bind:src="lowongan.company.logo" alt="">
									        <div class="date_desc">
									        	<h6 class="title">{{lowongan.name}}</h6>
									            <span class="meta">{{lowongan.company.name}}</span>
									        </div>
			  						      	<div class="clearfix" style="border-top:1px solid rgba(100,100,100,0.3);"></div>
						                    <ul class="descriptionjob" type=square>
							                    {{{ lowongan.highlight }}}
						                    </ul>
						                    <div class="salary" style="float:right;"> Estimated Salary : {{lowongan.gaji}}</div>
					                    </div>
								        <div class="clearfix"> </div>
							        </div>
						        </div>
				            </a>
				        </div>
		            </div>
			    </div>
		    </div>
	    	<div class="clearfix"> </div>
	  	</div>
	</div>
</template>

<script type="text/javascript">
	Vue.component('navbar', require('./_navbar.vue'));
	Vue.component('modal', require('./_modal.vue'));
	export default {
		ready: function () {
			console.log("Jobs Ready");
			var _this = this;
            $.ajax({
                method : 'GET',
                async : false,
                cache : false,
                'url' : window.location.origin + "/jobsInit",
                success : function(res){
                    _this.companies = res.companies;
                    _this.lowongancats = res.lowongancat;
                    _this.lowongans = res.lowongans;
                }.bind(_this)
            });
		},
        data: function(){
            return {
                companies:[],
                lowongancats:[],
                lowongans:[],
                idcomp:'',
                idcat:''
            }
        },
        methods: {
			filterCategory: function(){
				var data = {
					_csrf : $('meta[name=csrf]').attr('content'),
					idcomp:this.idcomp,
					idcat:this.idcat
				}
				var _this = this;
				$.ajax({
					url : window.location.origin + "/filterData",
					method : 'POST',
					async : false,
					data : data,
					success : function(res){
						_this.lowongans = res.lowongans;
					}
				})
			}
		}
	}
</script>
